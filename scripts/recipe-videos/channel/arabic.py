"""Arabic normalization shared by the matching steps."""
import re

DIACRITICS = re.compile(r"[ً-ْـ]")
EMOJI = re.compile("[\U0001F000-\U0001FFFF☀-➿️‍]+")

# Egyptian home words -> the words the site's recipes use.
SYNONYMS = {
    "فراخ": "دجاج", "فرخه": "دجاج", "رز": "ارز", "مكرونه": "معكرونه", "لحمه": "لحم",
    "بتنجان": "باذنجان", "طماطم": "طماطم", "قلقاس": "قلقاس",
    "كفته": "كفته", "بانيه": "بانيه", "عيش": "خبز", "شوربه": "شوربه", "حساء": "شوربه",
    "جلاش": "جلاش", "بسكوت": "بسكويت", "كيكه": "كيك", "تورته": "تورته",
}
STOP = {"ال", "و", "في", "من", "علي", "على", "مع", "ب", "طريقه", "عمل", "اسهل", "احلي", "احلى",
        "سر", "اسرار", "بطريقه", "اصولها", "المطاعم", "زي", "البيت", "سهله", "سريعه"}


def normalize(text: str) -> str:
    text = EMOJI.sub(" ", DIACRITICS.sub("", text))
    text = re.sub("[إأآا]", "ا", text)
    text = text.replace("ة", "ه").replace("ى", "ي").replace("ؤ", "و").replace("ئ", "ي")
    text = re.sub(r"[^\w\s]", " ", text)
    words = []
    for word in text.split():
        if word.startswith("ال") and len(word) > 3:
            word = word[2:]
        elif word.startswith(("وال", "بال")) and len(word) > 4:
            word = word[3:]
        word = SYNONYMS.get(word, word)
        if word not in STOP:
            words.append(word)
    return " ".join(words)

"""Tiny wrapper around a local MLX model that returns parsed JSON."""
from __future__ import annotations

import json
import os
import re

from mlx_lm import generate, load
from mlx_lm.sample_utils import make_sampler

MODEL = os.environ.get("LOCAL_LLM", "mlx-community/Qwen3-30B-A3B-Instruct-2507-4bit")
_model = _tokenizer = None


def ask(system: str, user: str, max_tokens: int = 800) -> str:
    global _model, _tokenizer
    if _model is None:
        _model, _tokenizer = load(MODEL)
    messages = [{"role": "system", "content": system}, {"role": "user", "content": user}]
    prompt = _tokenizer.apply_chat_template(messages, add_generation_prompt=True, tokenize=False)
    return generate(_model, _tokenizer, prompt, max_tokens=max_tokens, sampler=make_sampler(temp=0.0))


def ask_json(system: str, user: str, max_tokens: int = 800):
    """Ask for JSON; retry once with a reminder if the reply does not parse."""
    for attempt in range(2):
        text = ask(system, user if attempt == 0 else user + "\n\nأجب بكائن JSON صالح فقط.", max_tokens)
        text = re.sub(r"<think>.*?</think>", "", text, flags=re.S)
        match = re.search(r"[\[{].*[\]}]", text, re.S)
        if match:
            try:
                return json.loads(match.group(0))
            except json.JSONDecodeError:
                pass
    raise ValueError(f"no JSON in reply: {text[:300]}")

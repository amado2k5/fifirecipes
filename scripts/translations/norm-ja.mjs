// Convert norm/es.json values → norm/ja.json (same Arabic keys).
// Section maps (units/mods/numbers) translated via dict; 'exact' values
// get longest-match phrase replacement, single pass.
import { readFile, writeFile } from 'node:fs/promises';
const src = JSON.parse(await readFile('scripts/translations/norm/es.json','utf8'));

// whole-value exact overrides (checked before token pass)
const WHOLE = {
  '1 cda.':'大さじ1','1 cdta.':'小さじ1','2 cda.':'大さじ2','2 cdta.':'小さじ2',
  '½ cdta.':'小さじ1/2','½ cda.':'大さじ1/2','¼ cdta.':'小さじ1/4','1½ cda.':'大さじ1と1/2',
  '½ taza':'カップ1/2','¼ taza':'カップ1/4','⅓ taza':'カップ1/3','1 taza':'カップ1',
  '2 tazas':'カップ2','1½ tazas':'カップ1と1/2','1¼ tazas':'カップ1と1/4','1⅓ tazas':'カップ1と1/3',
  '¾ taza':'カップ3/4','2½ tazas':'カップ2と1/2','2¼ tazas':'カップ2と1/4','3½ tazas':'カップ3と1/2',
  '4 tazas':'カップ4','6 tazas (800 g)':'カップ6(800 g)','6 tazas (~800 g)':'カップ6(約800 g)',
  '1 kg (7½ tazas)':'1 kg(カップ7と1/2)','¼ kg (3 tazas)':'1/4 kg(カップ3)','½ kg (2 tazas)':'1/2 kg(カップ2)','½ kg (~4 tazas)':'1/2 kg(約カップ4)',
  '½ taza grande':'大きめのカップ1/2','1 taza grande':'大きめのカップ1','½ taza pequeña':'小さめのカップ1/2',
  '500 g (½ kg)':'500 g(1/2 kg)','500 g (4 tazas)':'500 g(カップ4)','500 g, molido':'500 g、ひき肉状',
  '500 g, en dados pequeños':'500 g、小さめの角切り','aprox. 1 kg':'約1 kg','1,5 kg':'1.5 kg','1,5 L':'1.5 L',
  'una pizca':'ひとつまみ','una pizca (al gusto)':'ひとつまみ(お好みで)','un poco':'少々','un chorro':'少々','2 chorros':'少々','un chorrito':'少々',
  'según la necesidad':'必要に応じて','al gusto':'お好みで','al gusto (opcional)':'お好みで(任意)','al gusto (rallado)':'お好みで(すりおろし)',
  'según el método':'作り方に応じて','cantidad necesaria':'必要量','por persona':'1人分','opcional':'任意','el resto':'残り',
  'según la cantidad':'量に応じて','según la cantidad preparada':'作る量に応じて','según la receta indicada':'指定のレシピ量',
  '1 sobre':'1袋','2 sobres':'2袋','1–2 sobres':'1〜2袋','1 sobre o cubo':'1袋または1個','1 sobre (opcional)':'1袋(任意)',
  '1 cubo':'1個','1 cubo (opcional)':'1個(任意)','1 sobre (16 g)':'1袋(16 g)','1 sobre o 2 cda.':'1袋または大さじ2',
  '4 sobres (~300 g)':'4袋(約300 g)','5 sobres (250 g)':'5袋(250 g)','3 sobres (~5–6 piezas cada una)':'3袋(各約5〜6個)',
  '1 lata':'1缶','1 lata (100 g)':'1缶(100 g)','2 latas (120 g)':'2缶(120 g)','2 latas (100 g cada una)':'2缶(各100 g)','2 latas (120 g cada una)':'2缶(各120 g)',
  '1 lata grande':'大きめの1缶','1 brik':'1パック','1 pequeña brik':'小さめの1パック','1 pequeña brik (~100 g)':'小さめの1パック(約100 g)',
  '1 brik (120 g)':'1パック(120 g)','1 brik grande':'大きめの1パック','1 brik grande (~120 g)':'大きめの1パック(約120 g)',
  '3 briks (120 g cada una)':'3パック(各120 g)','2 briks':'2パック','la mitad de 2 frascos':'瓶2本分の半量',
  '1 rebanada':'1枚','en rebanadas':'スライス','cortado en rebanadas':'スライス','en rebanadas, dorado':'スライス、こんがり',
  '2 rebanadas':'2枚','8 rebanadas':'8枚','2 trozos':'2切れ','en dados pequeños':'小さめの角切り','picado':'みじん切り',
  'grandes, finamente picados':'大きめ、細かいみじん切り','grandes, en rebanadas':'大きめ、スライス',
  '1 trozo pequeño, picado':'小さめの1切れ、みじん切り','2 mitades':'2半分','2 dientes':'2かけ','2 dientes, machacadas':'2かけ、つぶした',
  '2 dientes, picadas':'2かけ、みじん切り','1 diente':'1かけ','6 dientes':'6かけ','6–7 dientes':'6〜7かけ','1 pequeña diente':'小さめの1かけ',
  '2 hojas':'2枚','3 hojas':'3枚','7 hojas':'7枚','2–3 hojas':'2〜3枚','varias hojas':'数枚',
  '1 cebolla':'玉ねぎ1個','1 cebolla mediano':'中くらいの玉ねぎ1個','1 cebolla grande':'大きめの玉ねぎ1個',
  '1 cebolla, picada':'玉ねぎ1個、みじん切り','1 cebolla grande, picada':'大きめの玉ねぎ1個、みじん切り',
  '1 cebolla grande, finamente picada':'大きめの玉ねぎ1個、細かいみじん切り','1 cebolla, finamente picada':'玉ねぎ1個、細かいみじん切り',
  '1 cebolla grande o 2 medianas':'大きめの玉ねぎ1個または中くらいの2個','2 cebollas medianas':'中くらいの玉ねぎ2個',
  '2 cebollas grandes':'大きめの玉ねぎ2個','3 cebollas grandes':'大きめの玉ねぎ3個','4 cebollas medianas':'中くらいの玉ねぎ4個',
  '2 pequeños cebollas':'小さめの玉ねぎ2個','1 cabeza':'1玉','1 cabeza grande':'大きめの1玉','½ cabeza (aprox. 1 cda., picada)':'1/2玉(みじん切りで大さじ約1)',
  '½ cabeza de ajo (~1 cda. molida)':'にんにく1/2玉(すりおろしで大さじ約1)',
  '1 pieza':'1個','2 piezas':'2個','½ pieza':'1/2個','3 piezas':'3個','2 piezas grandes':'大きめの2個','2–3 piezas':'2〜3個','3–4 piezas':'3〜4個','6–7 piezas':'6〜7個','8 piezas':'8個',
  '1 chile':'唐辛子1本','2 pimientos':'ピーマン2個','4 tomates':'トマト4個','2 tomates':'トマト2個','1 tomate':'トマト1個',
  '4 claras':'卵白4個分','2 claras de huevo':'卵白2個分','1 clara de huevo':'卵白1個分','1 yema de huevo':'卵黄1個分','1 huevo':'卵1個',
  '2 zanahorias':'にんじん2本','1 zanahoria':'にんじん1本','1 grosse zanahoria':'大きめのにんじん1本',
  '4–5 limones':'レモン4〜5個','2 limones':'レモン2個','½ limón':'レモン1/2個','1 limón grande':'大きめのレモン1個',
  'zumo de 1 limón':'レモン1個分の果汁','zumo de 1':'1個分の果汁','zumo de 1 pieza':'1個分の果汁','zumo de 2 limones':'レモン2個分の果汁','zumo, 2 cda.':'果汁、大さじ2',
  '1 pepino':'きゅうり1本','1 de cada color':'各色1個','1, picado':'1個、みじん切り','1, cortado':'1個、切ったもの','1, en dados pequeños':'1個、小さめの角切り',
  '1, picado finamente':'1個、細かいみじん切り','1, en cuartos':'1個、くし切り','1, en rebanadas':'1個、スライス',
  '1 pequeña, rallada':'小さめの1個、すりおろし','2 medianas':'中くらいの2個','4 medianas':'中くらいの4個','1 pequeño':'小さめの1個','1 grande':'大きめの1個','1 pequeña':'小さめの1個','pequeña':'小さめの','pequeño':'小さめの',
  '3, en dados':'3個、角切り','2, rallados':'2個、すりおろし','2, picadas':'2個、みじん切り','2, cortados':'2個、切ったもの','3, en dados medianos':'3個、中くらいの角切り','3 pequeñas, ralladas':'小さめの3個、すりおろし',
  '1 (al gusto)':'1個(お好みで)','3 (rojo, amarillo, verde)':'3個(赤・黄・緑)',
  '1 manojo':'1束','3 manojos':'3束','½ manojo':'1/2束','2 manojos':'2束','aprox. 1 manojo':'約1束','un manojo pequeño':'小さめの1束',
  '2 puñados':'2つかみ','2 ramitas':'2枝','2 ramitas, picados':'2枝、みじん切り','2 palos':'2本','2 pares':'2組','2 cucharones':'おたま2杯','2 shots':'2ショット','1–2 shots':'1〜2ショット',
  '2 pollos':'鶏2羽','1 pollo, deshuesado':'鶏1羽、骨なし','1 pollo, en 4 trozos':'鶏1羽、4切れ','1 pollo, en 4 o 8 trozos':'鶏1羽、4または8切れ','1–2 pollos (en 8 trozos)':'鶏1〜2羽(8切れ)',
  '3 panes':'パン3個','4 panes':'パン4個','12 panes':'パン12個','15 panes':'パン15個',
  '4 platos':'4皿','4 tortitas':'パンケーキ4枚','4 sándwiches':'サンドイッチ4個','6 sándwiches':'サンドイッチ6個','4–6 sándwiches':'サンドイッチ4〜6個',
  '10 sándwiches':'サンドイッチ10個','10–15 sándwiches':'サンドイッチ10〜15個','12 sándwiches':'サンドイッチ12個','12–15 sándwiches':'サンドイッチ12〜15個',
  '15 sándwiches':'サンドイッチ15個','20 sándwiches':'サンドイッチ20個','28 sándwiches':'サンドイッチ28個','30 sándwiches':'サンドイッチ30個','aprox. 20 sándwiches':'サンドイッチ約20個',
  '12 tazas':'カップ12','12–15 bolas':'12〜15個','12–15 rollos':'12〜15本','6–8 tartaletas':'タルトレット6〜8個',
  '4–6 porciones':'4〜6人分','rinde una gran cantidad, para una semana o más':'たっぷりの量(1週間以上もつ)',
  '10–15 min':'10〜15分','15 min':'15分','2 min':'2分','aprox. 1 h':'約1時間','aprox. 1 h 15':'約1時間15分','1 h 15':'1時間15分','1 h 30':'1時間30分',
  '2 h':'2時間','2 h 15':'2時間15分','2 h 30':'2時間30分','2–3 h':'2〜3時間','4 h':'4時間','1 h–1 h 30':'1時間〜1時間30分','1 h–1 h 15':'1時間〜1時間15分',
  '3 h 15':'3時間15分','2 h 10':'2時間10分','14 días':'14日','1 h a 1 h 15':'1時間〜1時間15分','2 a 3 h':'2〜3時間','1 h 10':'1時間10分',
  '3–4 min por sobre':'1袋あたり3〜4分','3–4 h en la nevera':'冷蔵庫で3〜4時間','5–6 h en el congelador':'冷凍庫で5〜6時間','4 h (en frío)':'4時間(冷蔵)','6 h (en frío)':'6時間(冷蔵)','1 h':'1時間',
  '½':'1/2','¼':'1/4','⅓':'1/3','½ grande':'大きめの半分','½ barra':'バター1/2本','½ taza, machacado':'カップ1/2、つぶした','½ taza o plus':'カップ1/2強',
  '1¼ cda.':'大さじ1と1/4','1½ cdta.':'小さじ1と1/2','1 cdta. rasa':'小さじ1すりきり','1 o ½ cdta.':'小さじ1/2〜1','unas cdta.':'小さじ数杯',
  '1 cda. + ½ taza':'大さじ1+カップ1/2','3 cda.':'大さじ3','2–3 cda.':'大さじ2〜3','3 cda. + ½ taza':'大さじ3+カップ1/2','2 cdta. rases':'小さじ2すりきり',
  '2 cda. o ¼ taza':'大さじ2またはカップ1/4','2 cda. por frasco':'瓶1本あたり大さじ2','4 cda. por litro de agua':'水1Lあたり大さじ4',
  '½ taza por litro de agua':'水1Lあたりカップ1/2','¼ taza por litro de agua':'水1Lあたりカップ1/4','1¼ tazas por sobre':'1袋あたりカップ1と1/4',
  'aprox. 3 cda.':'大さじ約3','3 cdta. (al gusto)':'小さじ3(お好みで)','3 cda. (50 g)':'大さじ3(50 g)',
  'un chorro (opcional)':'少々(任意)','un poco de ralladura':'皮のすりおろし少々','abundante':'たっぷり','para engrasar':'型に塗る用','para engrasar la bandeja':'天板に塗る用',
  '1 paquete':'1パック','1 barra':'バター1本','1½ tartas':'タルト1.5個','2 galletas':'ビスケット2枚','2 veces':'2回分','1 rollo':'1本',
  '1 taza de orzo dorado':'黄金色に炒めたオルゾ カップ1','1½ tazas de azúcar + 1 taza de agua':'砂糖 カップ1と1/2 + 水 カップ1',
  '1½ tazas (o 1 brik de nata + ½ taza de leche)':'カップ1と1/2(または生クリーム1パック+牛乳 カップ1/2)',
  'suficiente para cubrir las habas':'豆が浸る量','1 kg por kg de pescado':'魚1kgあたり1 kg','¼ kg (o pimientos de colores)':'1/4 kg(または色とりどりのピーマン)',
  '1 molde de 24 cm':'24cm型1個','22 cm':'22 cm','aprox. 20 trozos':'約20切れ','aprox. 20 galletas':'約20枚','aprox. 24 piezas':'約24個','aprox. 30 piezas':'約30個','aprox. 50 piezas':'約50個','aprox. 6 personas':'約6人分',
  '4 tipos diferentes':'4種類','4 trozos (al menos ½ kg cada uno)':'4切れ(各1/2 kg以上)','3 tazas (remojado 30 min)':'カップ3(30分水に浸す)',
  'se conserva 1 semana':'1週間保存可','se conserva de 1 a 2 meses':'1〜2か月保存可','se conserva mucho tiempo':'長期保存可',
  'suficiente para una cantidad de leche concentrada':'濃縮ミルク1回分に足りる量',
  '4 tazas de harina, ¼ taza de levadura, 1 cda. de azúcar, ½ cdta. de sal, 1 taza de leche tibia, 1 taza de yogur':'小麦粉 カップ4、ベーキングパウダー カップ1/4、砂糖 大さじ1、塩 小さじ1/2、ぬるい牛乳 カップ1、ヨーグルト カップ1',
  '½ taza + 2 cda.':'カップ1/2 + 大さじ2','1 a ¼ taza':'カップ1〜1と1/4','3½ tazas (500 g)':'カップ3と1/2(500 g)',
  '3 tazas menos 2 cda.':'カップ3 から大さじ2を引いた量','1 taza menos 2 cda.':'カップ1 から大さじ2を引いた量','1 taza menos 3 cda.':'カップ1 から大さじ3を引いた量',
  '1 + 3 tazas':'カップ1+3','1½ + 3 tazas':'カップ1と1/2 + 3','1 taza o menos':'カップ1以下','1 a 1¼ tazas':'カップ1〜1と1/4','2 o 3 tazas':'カップ2〜3','½ a 1 taza':'カップ1/2〜1',
  'aprox. 1 taza':'カップ約1','aprox. 2 tazas':'カップ約2','aprox. 2¼ tazas':'カップ約2と1/4','1 taza (200 g)':'カップ1(200 g)','1 taza (~200 g)':'カップ1(約200 g)',
  '2 tazas (225 g)':'カップ2(225 g)','2 tazas (320 g)':'カップ2(320 g)','2 tazas (500 g)':'カップ2(500 g)','2½ tazas (250 g)':'カップ2と1/2(250 g)',
  '3 tazas (360 g)':'カップ3(360 g)','3 tazas (400 g)':'カップ3(400 g)','3 tazas (500 g)':'カップ3(500 g)',
  '100 g (½ taza)':'100 g(カップ1/2)','120 g (1 taza)':'120 g(カップ1)','160 g (1 taza)':'160 g(カップ1)','80 g (⅔ taza)':'80 g(カップ2/3)','80 g (4 cda.)':'80 g(大さじ4)',
  '400 g (3 tazas)':'400 g(カップ3)','aprox. 550 g (~2¼ tazas)':'約550 g(約カップ2と1/4)','aprox. 1 L':'約1 L','aprox. 1,25 L':'約1.25 L','350 ml':'350 ml',
  '1 apio':'セロリ1本','1 pimiento':'ピーマン1個','2 naranjas':'オレンジ2個',
  '1 brik o ½ taza de crema pastelera o 2 cda. de qashta':'1パックまたはカスタードクリーム カップ1/2またはカシュタ 大さじ2',
};
// compositional sections
const NUMS_JA = { 'نص':'1/2','نصف':'1/2','ربع':'1/4','تلت':'1/3','ثلث':'1/3' };
const UNITS_JA = {
  'cda. rasa':'大さじ(すりきり)','cda.':'大さじ','cdta.':'小さじ',
  'taza grande':'大きめのカップ','taza pequeña':'小さめのカップ','taza de café':'コーヒーカップ','tazas, hirviendo':'カップ(沸騰した)','tazas':'カップ','taza':'カップ',
  'kg':'kg','g':'g','L':'L','ml':'ml','h':'時間','min':'分','días':'日','día':'日','semana':'週間','meses':'か月','personas':'人分','persona':'人分',
  'hojas de laurel':'枚(ローリエ)','hoja de laurel':'枚(ローリエ)','hojas':'枚','hoja':'枚',
  'granos de mástica':'粒(マスティック)','cardamomo':'個(カルダモン)',
  'piezas':'個','pieza':'個','dientes':'かけ','diente':'かけ','chile':'本','pares':'組','pizcas':'つまみ','pizca':'つまみ',
  'trozos':'切れ','trozo':'切れ','sobres':'袋','sobre':'袋','cubo de caldo':'個(ブイヨン)','cubo':'個','dados':'角切り',
  'latas':'缶','lata':'缶','pequeña lata':'小さめの缶','frascos':'瓶','frasco':'瓶','manojos':'束','manojo':'束','puñado':'つかみ',
  'ramitas':'枝','ramita':'枝','palos':'本','panes':'個(パン)','pan':'個(パン)','limones':'個(レモン)','limón':'個(レモン)',
  'cebollas':'個(玉ねぎ)','cebolla':'個(玉ねぎ)','pollos':'羽','pollo':'羽','huevos':'個','huevo':'個',
  'tartas':'個(タルト)','tarta':'個(タルト)','sándwiches':'個(サンドイッチ)','sándwich':'個(サンドイッチ)',
  'rollos':'本','rollo':'本','tortitas':'枚','tortita':'枚','rebanadas':'枚','rebanada':'枚','cucharón':'おたま','shot':'ショット',
  'bolas':'個','bola':'個','moldes':'個','molde':'個','bandejas':'枚','bandeja':'枚','plato':'皿','palitos':'本','palito':'本',
  'kibbeh':'個(キッベ)','barra':'本','patatas':'個(じゃがいも)','naranjas':'個(オレンジ)','cuencos':'杯','tazones':'杯',
  'porciones':'人分','buñuelos':'個','trenzas':'本','cupcakes':'個','manakish':'枚(マナキーシュ)','rosas':'個','sambusaks':'個(サンブーサク)',
  'nudos':'個','galletas':'枚','cruasanes':'個(クロワッサン)','cabeza':'玉','yema de huevo':'個分(卵黄)','clara de huevo':'個分(卵白)',
  'pimientos':'個(ピーマン)','zanahorias':'本(にんじん)','apio':'本(セロリ)'
};
const MODS_JA = {
  'picados':'みじん切り','picado finamente':'細かいみじん切り','picados finamente':'細かいみじん切り',
  'rallado':'すりおろし','rallados':'すりおろし','rallada':'すりおろし','cortado':'切ったもの','cortados':'切ったもの',
  'en dados':'角切り','en dados, dorado':'角切り、こんがり','cortado finamente':'細かく切ったもの',
  'cortado en 4':'4等分','cortado en 4 u 8':'4または8等分','grande':'大きめ','grandes':'大きめ','mediana':'中くらい','mediano':'中くらい','de tamaño mediano':'中くらい',
  'pequeño':'小さめ','machacado':'つぶした','hervido':'茹でた','dorado':'こんがり焼いた','seco':'乾燥','seca':'乾燥','fino':'細かい',
  'molido':'粉状','molida':'粉状','molidos':'粉状','(opcional)':'(任意)','(al gusto)':'(お好みで)',
  'para freír':'揚げ用','para decorar':'飾り用','para servir':'盛り付け用','para la masa':'生地用',
  'por taza de arroz':'米カップ1あたり','por pollo':'鶏1羽あたり','cada una':'各','de cada tipo':'各種類',
  'hirviendo':'沸騰した','fría':'冷たい','caliente':'熱い','tibia':'ぬるい','helada':'氷冷の',
  'deshuesado':'骨なし','deshuesado, sin piel':'骨・皮なし','con hueso':'骨付き','escurrido':'水切りした','ahumado':'燻製',
  'de mástica':'(マスティック)','de cardamomo':'(カルダモン)','en bastón':'棒状','en granos':'粒のまま','hervido, seco':'茹でて水気を切った',
  '(picado)':'(みじん切り)','rojo, amarillo, verde':'赤・黄・緑','rase':'すりきり','rases':'すりきり',
  'en cuartos':'くし切り','en dados medianos':'中くらいの角切り','en pequeños trozos':'小さめの切れ','en 8 trozos':'8切れ','remojado 30 min':'30分水に浸す'
};
function convExact(v){
  if (WHOLE[v] !== undefined) return WHOLE[v];
  return v; // leftover → logged below
}
const out = { exact: {}, numbers: NUMS_JA, units: {}, mods: MODS_JA };
const leftover = [];
for (const [k,v] of Object.entries(src.exact)) {
  const nv = convExact(v);
  if (nv === v && /[a-zA-Záéíóúñü]/.test(v)) leftover.push([k,v]);
  out.exact[k] = nv;
}
for (const [k,v] of Object.entries(src.units)) out.units[k] = UNITS_JA[v] ?? v;
for (const [k,v] of Object.entries(src.mods)) out.mods[k] = MODS_JA[v] ?? MODS_JA[v.toLowerCase()] ?? v;
await writeFile('scripts/translations/norm/ja.json', JSON.stringify(out,null,2)+'\n');
console.log('leftover exact values (untranslated):', leftover.length);
leftover.forEach(([k,v])=>console.log('  ',JSON.stringify(v),'<=',k));
const badU=Object.values(out.units).filter(v=>/[a-zA-Záéíóúñü]{2,}/.test(v));
console.log('units left as-is:',badU.length); badU.slice(0,30).forEach(v=>console.log('  u:',v));

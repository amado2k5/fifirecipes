// Convert norm/es.json values → norm/pt.json (same Arabic keys).
import { readFile, writeFile } from 'node:fs/promises';
const src = JSON.parse(await readFile('scripts/translations/norm/es.json','utf8'));

// whole-value exact overrides (ES value → PT value)
const WHOLE = {
  '1 cda.':'1 col. sopa','1 cdta.':'1 col. chá','2 cda.':'2 col. sopa','2 cdta.':'2 col. chá',
  '½ cdta.':'½ col. chá','½ cda.':'½ col. sopa','¼ cdta.':'¼ col. chá','1½ cda.':'1½ col. sopa',
  '½ taza':'½ xícara','½ taza grande':'½ xícara grande','¼ taza':'¼ xícara','⅓ taza':'⅓ xícara','1 taza':'1 xícara',
  '2 tazas':'2 xícaras','1½ tazas':'1½ xícaras','1¼ tazas':'1¼ xícaras','1⅓ tazas':'1⅓ xícaras','1 taza grande':'1 xícara grande',
  '500 g (½ kg)':'500 g (½ kg)','500 g, molido':'500 g, moído','500 g, en dados pequeños':'500 g, em cubos pequenos',
  '500 g (4 tazas)':'500 g (4 xícaras)','aprox. 1 kg':'aprox. 1 kg','1 kg':'1 kg','1,5 kg':'1,5 kg','2 kg':'2 kg',
  '100 g':'100 g','500 ml':'500 ml','1,5 L':'1,5 L','½ taza pequeña':'½ xícara pequena',
  'una pizca':'uma pitada','una pizca (al gusto)':'uma pitada (a gosto)','un poco':'um pouco',
  'un chorro':'um fio','2 chorros':'2 fios','según la necesidad':'conforme necessário','al gusto':'a gosto',
  'según el método':'conforme o método','cantidad necesaria':'quantidade necessária','por persona':'por pessoa',
  'opcional':'opcional','el resto':'o restante',
  '1 sobre':'1 pacote','2 sobres':'2 pacotes','1–2 sobres':'1–2 pacotes','1 sobre o cubo':'1 pacote ou cubo',
  '1 sobre (opcional)':'1 pacote (opcional)','1 cubo':'1 cubo','1 cubo (opcional)':'1 cubo (opcional)',
  '1 lata':'1 lata','1 pequeña brik':'1 brik pequeno','1 brik':'1 brik','1 lata grande':'1 lata grande',
  '1 pequeña brik (~100 g)':'1 brik pequeno (~100 g)','1 brik (120 g)':'1 brik (120 g)',
  '1 brik grande':'1 brik grande','1 brik grande (~120 g)':'1 brik grande (~120 g)',
  '3 briks (120 g cada una)':'3 briks (120 g cada)','2 briks':'2 briks','la mitad de 2 frascos':'metade de 2 frascos',
  '1 rebanada':'1 fatia','en rebanadas':'em fatias','cortado en rebanadas':'cortado em fatias',
  'en rebanadas, dorado':'em fatias, dourado','2 rebanadas':'2 fatias','8 rebanadas':'8 fatias',
  '2 trozos':'2 pedaços','en dados pequeños':'em cubos pequenos','picado':'picado',
  'grandes, finamente picados':'grandes, finamente picados','grandes, en rebanadas':'grandes, em fatias',
  '1 trozo pequeño, picado':'1 pedaço pequeno, picado','2 mitades':'2 metades',
  '2 dientes':'2 dentes','2 dientes, machacadas':'2 dentes, amassados','2 dientes, picadas':'2 dentes, picados',
  '1 diente':'1 dente','6 dientes':'6 dentes','6–7 dientes':'6–7 dentes',
  '2 hojas':'2 folhas','3 hojas':'3 folhas','7 hojas':'7 folhas','2–3 hojas':'2–3 folhas','varias hojas':'várias folhas',
  '1 cebolla':'1 cebola','1 cebolla mediano':'1 cebola média','1 cebolla grande':'1 cebola grande',
  '1 cebolla, picada':'1 cebola, picada','1 cebolla grande, picada':'1 cebola grande, picada',
  '1 cebolla grande, finamente picada':'1 cebola grande, finamente picada','1 cebolla, finamente picada':'1 cebola, finamente picada',
  '1 cebolla grande o 2 medianas':'1 cebola grande ou 2 médias','2 cebollas medianas':'2 cebolas médias',
  '2 cebollas grandes':'2 cebolas grandes','3 cebollas grandes':'3 cebolas grandes','4 cebollas medianas':'4 cebolas médias',
  '1 cabeza grande':'1 cabeça grande','1 pieza':'1 peça','2 piezas':'2 peças','½ pieza':'½ peça',
  '1 chile':'1 pimenta','2 pimientos':'2 pimentões','4 tomates':'4 tomates','2 tomates':'2 tomates','1 tomate':'1 tomate',
  '4 claras':'4 claras','2 zanahorias':'2 cenouras','4–5 limones':'4–5 limões','2 limones':'2 limões',
  '½ limón':'½ limão','1 limón grande':'1 limão grande','zumo de 1 limón':'suco de 1 limão','zumo, 2 cda.':'suco, 2 col. sopa',
  '1 pepino':'1 pepino','1 de cada color':'1 de cada cor','1, picado':'1, picado','1, cortado':'1, cortado',
  '1, en dados pequeños':'1, em cubos pequenos','1, picado finamente':'1, finamente picado',
  '1 pequeña, rallada':'1 pequena, ralada','3 piezas':'3 peças','2 piezas grandes':'2 peças grandes',
  '2 medianas':'2 médias','4 medianas':'4 médias','2–3 piezas':'2–3 peças','1 (al gusto)':'1 (a gosto)',
  '3 (rojo, amarillo, verde)':'3 (vermelho, amarelo, verde)','3, en dados':'3, em cubos','2, rallados':'2, ralados',
  '2, picadas':'2, picadas','2, cortados':'2, cortados','1 pequeño':'1 pequeno','1 grande':'1 grande',
  '3 manojos':'3 maços','1 manojo':'1 maço','½ manojo':'½ maço','aprox. 1 manojo':'aprox. 1 maço',
  '2 manojos':'2 maços','2 puñados':'2 punhados','2 ramitas, picados':'2 raminhos, picados','2 palos':'2 paus',
  '2 pares':'2 pares','2 cucharones':'2 conchas','2 shots':'2 doses','2 claras de huevo':'2 claras de ovo',
  '3–4 piezas':'3–4 peças','3 panes':'3 pães','4 panes':'4 pães','12 panes':'12 pães','15 panes':'15 pães',
  '2 pollos':'2 frangos','1 pollo, deshuesado':'1 frango, desossado','1 pollo, en 4 trozos':'1 frango, em 4 pedaços',
  '1 pollo, en 4 o 8 trozos':'1 frango, em 4 ou 8 pedaços',
  '4 platos':'4 pratos','4 tortitas':'4 panquecas','4 sándwiches':'4 sanduíches','6 sándwiches':'6 sanduíches',
  '4–6 sándwiches':'4–6 sanduíches','10 sándwiches':'10 sanduíches','10–15 sándwiches':'10–15 sanduíches',
  '12 sándwiches':'12 sanduíches','12–15 sándwiches':'12–15 sanduíches','15 sándwiches':'15 sanduíches',
  '20 sándwiches':'20 sanduíches','28 sándwiches':'28 sanduíches','30 sándwiches':'30 sanduíches','aprox. 20 sándwiches':'aprox. 20 sanduíches',
  '12 tazas':'12 xícaras','12–15 bolas':'12–15 bolas','12–15 rollos':'12–15 rolos','6–8 tartaletas':'6–8 tarteletes',
  '6–7 piezas':'6–7 peças','8 piezas':'8 peças','4–6 porciones':'4–6 porções',
  'rinde una gran cantidad, para una semana o más':'rende uma grande quantidade, para uma semana ou mais',
  '10–15 min':'10–15 min','15 min':'15 min','2 min':'2 min','aprox. 1 h':'aprox. 1 h',
  'picados':'picados','picado finamente':'finamente picado','picados finamente':'finamente picados',
  'rallado':'ralado','rallados':'ralados','rallada':'ralada',
  'cortado':'cortado','cortados':'cortados','en dados':'em cubos',
  'en dados, dorado':'em cubos, dourado','cortado finamente':'finamente cortado',
  'cortado en 4':'cortado em 4','cortado en 4 u 8':'cortado em 4 ou 8',
  'grande':'grande','grandes':'grandes','mediana':'média','mediano':'médio','de tamaño mediano':'de tamanho médio',
  'pequeña':'pequena','pequeño':'pequeno','machacado':'amassado','hervido':'cozido','dorado':'dourado',
  'seco':'seco','seca':'seca','fino':'fino','molido':'moído','molida':'moída','molidos':'moídos',
  '(opcional)':'(opcional)','(al gusto)':'(a gosto)',
  'para freír':'para fritar','para decorar':'para decorar','para servir':'para servir',
  'para la masa':'para a massa','por taza de arroz':'por xícara de arroz','por pollo':'por frango',
  'cada una':'cada','de cada tipo':'de cada tipo',
  'hirviendo':'fervente','fría':'fria','caliente':'quente','tibia':'morna','helada':'gelada',
  'deshuesado':'desossado','deshuesado, sin piel':'desossado, sem pele','con hueso':'com osso',
  'escurrido':'escorrido','ahumado':'defumado','de mástica':'de mastique','de cardamomo':'de cardamomo',
  'en bastón':'em bastão','en granos':'em grãos','hervido, seco':'cozido, seco',
  '(picado)':'(picado)','rojo, amarillo, verde':'vermelho, amarelo, verde','rase':'rasa','rases':'rasas',
  'en cuartos':'em quartos','en dados medianos':'em cubos médios',
  'en pequeños trozos':'em pedaços pequenos','en 8 trozos':'em 8 pedaços','remojado 30 min':'de molho por 30 min',
  'aprox. 1 h 15':'aprox. 1 h 15','½ taza + 2 cda.':'½ xícara + 2 col. sopa','¾ taza':'¾ xícara',
  '½ a 1 taza':'½ a 1 xícara','aprox. 1 taza':'aprox. 1 xícara','aprox. 2 tazas':'aprox. 2 xícaras',
  'aprox. 2¼ tazas':'aprox. 2¼ xícaras','¼ kg (3 tazas)':'¼ kg (3 xícaras)','½ kg (2 tazas)':'½ kg (2 xícaras)',
  '½ kg (~4 tazas)':'½ kg (~4 xícaras)','aprox. 550 g (~2¼ tazas)':'aprox. 550 g (~2¼ xícaras)',
  'aprox. 1 L':'aprox. 1 L','aprox. 1,25 L':'aprox. 1,25 L','½ grande':'½ grande','½ barra':'½ barra',
  '½ taza, machacado':'½ xícara, amassado','½ taza o plus':'½ xícara ou mais','unas cdta.':'algumas col. chá',
  '½ taza por litro de agua':'½ xícara por litro de água','¼ taza por litro de agua':'¼ xícara por litro de água',
  'aprox. 3 cda.':'aprox. 3 col. sopa','un chorrito':'um fio','un chorro (opcional)':'um fio (opcional)',
  'un poco de ralladura':'um pouco de raspas','abundante':'abundante','para engrasar':'para untar',
  'para engrasar la bandeja':'para untar a assadeira','según la cantidad':'conforme a quantidade',
  'según la cantidad preparada':'conforme a quantidade preparada','según la receta indicada':'conforme a receita indicada',
  'según el número de frascos':'conforme o número de frascos','al gusto (opcional)':'a gosto (opcional)',
  'al gusto (rallado)':'a gosto (ralado)','un poco, picado':'um pouco, picado','zumo de 1':'suco de 1',
  'zumo de 1 pieza':'suco de 1 peça','zumo de 2 limones':'suco de 2 limões',
  'suficiente para cubrir las habas':'suficiente para cobrir as favas',
  '¼ kg (o pimientos de colores)':'¼ kg (ou pimentões coloridos)',
  '½ cabeza de ajo (~1 cda. molida)':'½ cabeça de alho (~1 col. sopa moída)',
  'aprox. 20 trozos':'aprox. 20 pedaços','aprox. 20 galletas':'aprox. 20 biscoitos',
  'aprox. 24 piezas':'aprox. 24 peças','aprox. 30 piezas':'aprox. 30 peças','aprox. 50 piezas':'aprox. 50 peças',
  'aprox. 6 personas':'aprox. 6 pessoas','se conserva 1 semana':'conserva-se 1 semana',
  'se conserva de 1 a 2 meses':'conserva-se de 1 a 2 meses','se conserva mucho tiempo':'conserva-se por muito tempo',
  'suficiente para una cantidad de leche concentrada':'suficiente para uma quantidade de leite concentrado',
  '½ taza (75 g)':'½ xícara (75 g)',
  '':'',
};

// post-process: extra raw Arabic phrases seen in PT drafts but absent from the ES source map
const EXTRA = {
  'نصف كيلو':'½ kg','نص كيلو':'½ kg','0.5 كيلو مقطعة لمكعبات ومتحمرة':'500 g, em cubos, dourado',
  '1 حبة متوسطة':'1 peça média','1 حبة متوسطة الحجم':'1 peça de tamanho médio','1 حبة صغيرة':'1 peça pequena',
  '1 حبة مقطعة مكعبات':'1 peça em cubos','1 حبة من كل نوع':'1 de cada tipo','2 حبة كبيرة':'2 peças grandes',
  '2 حبة متوسطة':'2 peças médias','3 حبات مبشورة':'3 peças raladas','3 قرون':'3 pimentas',
  '1 بصلة متوسطة':'1 cebola média','1 بصلة صغيرة':'1 cebola pequena','1 بصلة مبشورة':'1 cebola ralada',
  'ربع كوب لكل كوب رز':'¼ xícara por xícara de arroz','ربع كيلو مبشور':'¼ kg ralado','1/4 كيلو مبشورة':'¼ kg ralada',
  'قطعة صغيرة':'pedaço pequeno','1 قطعة صغيرة':'1 pedaço pequeno','1 ملعقة كبيرة لكل فرخة':'1 col. sopa por frango',
  'قليل':'um pouco','حزمة صغيرة':'maço pequeno','حزمتان':'2 maços','2 حزمات من كل نوع':'2 maços de cada tipo',
  '1 ملعقة كبيرة مفروم':'1 col. sopa picado','1 ملعقة صغيرة مفروم':'1 col. chá picado','2 ملعقة كبيرة مفروم':'2 col. sopa picado',
  '2 فصوص مفروم':'2 dentes picados','1 مكعب كبير':'1 cubo grande','1 كوب (225 جرام)':'1 xícara (225 g)',
  '1 كوب (مغلي)':'1 xícara (fervida)','1 كوب + 1 ملعقة كبيرة':'1 xícara + 1 col. sopa','1 كوب مبشور':'1 xícara ralada',
  '1 وربع كوب':'1¼ xícara','1.5 كوب مفروم':'1½ xícara picada','4 بطاطس متوسطة الحجم':'4 batatas médias',
  '6 أكواب كبيرة':'6 xícaras grandes','ذرة':'milho','صغير':'pequeno','علاقتين كبار':'2 col. sopa',
  'كوب كبير':'xícara grande','كوب ونصف':'1½ xícara','كوبان':'2 xícaras','كيس واحد':'1 pacote',
  'نص ليمونة صغيرة':'½ limão pequeno','نص ليمونة كبيرة':'½ limão grande',
};

const NUMS_PT = { 'نص':'1/2','نصف':'1/2','ربع':'1/4','تلت':'1/3','ثلث':'1/3' };
const UNITS_PT = {
  'cda. rasa':'col. sopa (rasa)','cda.':'col. sopa','cdta.':'col. chá',
  'taza grande':'xícara grande','taza pequeña':'xícara pequena','taza de café':'xícara de café','tazas, hirviendo':'xícaras, fervente','tazas':'xícaras','taza':'xícara',
  'kg':'kg','g':'g','L':'L','ml':'ml','h':'h','min':'min','días':'dias','día':'dia','semana':'semana','meses':'meses',
  'personas':'pessoas','persona':'pessoa',
  'hoja de laurel':'folha de louro','hojas':'folhas','hoja':'folha','granos de mástica':'grãos de mastique','cardamomo':'cardamomo',
  'piezas':'peças','pieza':'peça','dientes':'dentes','diente':'dente','chile':'pimenta','pares':'pares','pizcas':'pitadas','pizca':'pitada',
  'trozos':'pedaços','trozo':'pedaço','sobres':'pacotes','sobre':'pacote','cubo de caldo':'cubo de caldo','cubo':'cubo','dados':'cubos',
  'latas':'latas','lata':'lata','pequeña lata':'lata pequena','frascos':'frascos','frasco':'frasco','manojos':'maços','manojo':'maço','puñado':'punhado',
  'ramitas':'raminhos','ramita':'raminho','palos':'paus','panes':'pães','pan':'pão','limones':'limões','limón':'limão',
  'cebollas':'cebolas','cebolla':'cebola','pollos':'frangos','pollo':'frango','huevos':'ovos','huevo':'ovo',
  'tartas':'tortas','tarta':'torta','sándwiches':'sanduíches','sándwich':'sanduíche','rollos':'rolos','rollo':'rolo',
  'tortitas':'panquecas','tortita':'panqueca','rebanadas':'fatias','rebanada':'fatia','cucharón':'concha','shot':'dose',
  'bolas':'bolas','bola':'bola','moldes':'formas','molde':'forma','bandejas':'assadeiras','bandeja':'assadeira','plato':'prato',
  'palitos':'palitos','palito':'palito','kibbeh':'quibe','barra':'barra','patatas':'batatas','naranjas':'laranjas',
  'cuencos':'tigelas','tazones':'tigelas','porciones':'porções','buñuelos':'bolinhos fritos','trenzas':'tranças','cupcakes':'cupcakes',
  'manakish':'manakish','rosas':'rosas','sambusaks':'sambusak','nudos':'nós','galletas':'biscoitos','cruasanes':'croissants',
  'cabeza':'cabeça','yema de huevo':'gema de ovo','clara de huevo':'clara de ovo','pimientos':'pimentões',
  'zanahorias':'cenouras','apio':'aipo',
};

const MODS_PT = {
  'picados':'picados','picado':'picado','picado finamente':'finamente picado','picados finamente':'finamente picados',
  'rallado':'ralado','rallados':'ralados','rallada':'ralada',
  'cortado':'cortado','cortados':'cortados','en dados':'em cubos','en dados pequeños':'em cubos pequenos',
  'en dados, dorado':'em cubos, dourado','cortado finamente':'finamente cortado',
  'cortado en 4':'cortado em 4','cortado en 4 u 8':'cortado em 4 ou 8',
  'grande':'grande','grandes':'grandes','mediana':'média','mediano':'médio','de tamaño mediano':'de tamanho médio',
  'pequeña':'pequena','pequeño':'pequeno','machacado':'amassado','hervido':'cozido','dorado':'dourado',
  'seco':'seco','seca':'seca','fino':'fino','molido':'moído','molida':'moída','molidos':'moídos',
  '(opcional)':'(opcional)','opcional':'opcional','al gusto':'a gosto','(al gusto)':'(a gosto)',
  'según la necesidad':'conforme necessário','según el método':'conforme o método','cantidad necesaria':'quantidade necessária',
  'por persona':'por pessoa','para freír':'para fritar','para decorar':'para decorar','para servir':'para servir',
  'para la masa':'para a massa','por taza de arroz':'por xícara de arroz','por pollo':'por frango',
  'cada una':'cada','de cada tipo':'de cada tipo',
  'hirviendo':'fervente','fría':'fria','caliente':'quente','tibia':'morna','helada':'gelada',
  'deshuesado':'desossado','deshuesado, sin piel':'desossado, sem pele','con hueso':'com osso',
  'escurrido':'escorrido','ahumado':'defumado','de mástica':'de mastique','de cardamomo':'de cardamomo',
  'en bastón':'em bastão','en granos':'em grãos','hervido, seco':'cozido, seco',
  '(picado)':'(picado)','rojo, amarillo, verde':'vermelho, amarelo, verde','rase':'rasa','rases':'rasas',
  'en rebanadas':'em fatias','en cuartos':'em quartos','en dados medianos':'em cubos médios',
  'en pequeños trozos':'em pedaços pequenos','en 8 trozos':'em 8 pedaços','remojado 30 min':'de molho por 30 min',
  '':'',
};

function convExact(v){
  if (WHOLE[v] !== undefined) return WHOLE[v];
  return v;
}
const out = { exact: {}, numbers: NUMS_PT, units: {}, mods: MODS_PT };
const leftover = [];
for (const [k,v] of Object.entries(src.exact)) {
  const nv = convExact(v);
  if (nv === v && /[a-zA-Záéíóúñü]/.test(v) && !/^\d/.test(v)) leftover.push([k,v]);
  out.exact[k] = nv;
}
for (const [k,v] of Object.entries(src.units)) out.units[k] = UNITS_PT[v] ?? v;
for (const [k,v] of Object.entries(EXTRA)) out.exact[k] = v;
await writeFile('scripts/translations/norm/pt.json', JSON.stringify(out,null,2)+'\n');
console.log('leftover exact values (untranslated):', leftover.length);
leftover.forEach(([k,v])=>console.log('  ',JSON.stringify(v),'<=',k));
const badU=Object.values(out.units).filter(v=>/[a-zA-Záéíóúñü]{2,}/.test(v) && !/kibbeh|manakish|sambusak/.test(v));
console.log('units left as-is:',badU.length); badU.slice(0,30).forEach(v=>console.log('  u:',v));

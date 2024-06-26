var RUSSIAN_REGEX = new RegExp(/[^А-Яа-яЁё]/gi);
var RUSSIAN_EASY_DICTIONARY = [["mind","ум","masculine"],
["brains","ум","masculine"],
["intellect","ум","masculine"],
["year","год","masculine"],
["house","дом","masculine"],
["home","дом","masculine"],
["hour","час","masculine"],
["time","час","masculine"],
["world","мир","masculine"],
["peace","мир","masculine"],
["appearance","вид","masculine"],
["look","вид","masculine"],
["view","вид","masculine"],
["row","ряд","masculine"],
["line","ряд","masculine"],
["floor","пол","masculine"],
["sex","пол","masculine"],
["god","бог","masculine"],
["son","сын","masculine"],
["forest","лес","masculine"],
["name","имя","neuter"],
["step","шаг","masculine"],
["nose","нос","masculine"],
["ear","ухо","neuter"],
["husband","муж","masculine"],
["dream","сон","masculine"],
["century","век","masculine"],
["age","век","masculine"],
["tooth","зуб","masculine"],
["move","ход","masculine"],
["spirit","дух","masculine"],
["hall","зал","masculine"],
["battle","бой","masculine"],
["fight","бой","masculine"],
["combat","бой","masculine"],
["neck","шея","feminine"],
["grandfather","дед","masculine"],
["old man","дед","masculine"],
["tea","чай","masculine"],
["family","род","masculine"],
["clan","род","masculine"],
["generation","род","masculine"],
["forehead","лоб","masculine"],
["type","тип","masculine"],
["model","тип","masculine"],
["court","суд","masculine"],
["law-court","суд","masculine"],
["side","бок","masculine"],
["flank","бок","masculine"],
["garden","сад","masculine"],
["yard","сад","masculine"],
["smog","дым","masculine"],
["mouth","рот","masculine"],
["noise","шум","masculine"],
["knife","нож","masculine"],
["bottom","дно","neuter"],
["ground","дно","neuter"],
["food","еда","feminine"],
["meal","еда","feminine"],
["USA","США","plural"],
["Goth","гот","masculine"],
["hand","рука","feminine"],
["arm","рука","feminine"],
["business","дело","neuter"],
["affair","дело","neuter"],
["matter","дело","neuter"],
["eye","глаз","masculine"],
["sight","глаз","masculine"],
["day","день","masculine"],
["friend","друг","masculine"],
["face","лицо","neuter"],
["person","лицо","neuter"],
["foot","нога","feminine"],
["leg","нога","feminine"],
["water","вода","feminine"],
["table","стол","masculine"],
["desk","стол","masculine"],
["board","стол","masculine"],
["strength","сила","feminine"],
["father","отец","masculine"],
["night","ночь","feminine"],
["wife","жена","feminine"],
["light","свет","masculine"],
["world","свет","masculine"],
["mother","мать","feminine"],
["window","окно","neuter"],
["windowsill","окно","neuter"],
["soul","душа","feminine"],
["spirit","душа","feminine"],
["morning","утро","neuter"],
["time","пора","feminine"],
["pore","пора","feminine"],
["body","тело","neuter"],
["mummy","мама","feminine"],
["mum","мама","feminine"],
["way","путь","masculine"],
["track","путь","masculine"],
["path","путь","masculine"],
["tongue","язык","masculine"],
["language","язык","masculine"],
["sky","небо","neuter"],
["brother","брат","masculine"],
["labour","труд","masculine"],
["work","труд","masculine"],
["snow","снег","masculine"],
["yard","двор","masculine"],
["court","двор","masculine"],
["corner","угол","masculine"],
["angle","угол","masculine"],
["lip","губа","feminine"],
["uncle","дядя","masculine"],
["sea","море","neuter"],
["mountain","гора","feminine"],
["hill","гора","feminine"],
["physician","врач","masculine"],
["doctor","врач","masculine"],
["border","край","masculine"],
["edge","край","masculine"],
["land","край","masculine"],
["country","край","masculine"],
["river","река","feminine"],
["measure","мера","feminine"],
["step","мера","feminine"],
["thing","вещь","feminine"],
["pain","боль","feminine"],
["pair","пара","feminine"],
["couple","пара","feminine"],
["speech","речь","feminine"],
["goal","цель","feminine"],
["object","цель","feminine"],
["target","цель","feminine"],
["plan","план","masculine"],
["track","след","masculine"],
["footprint","след","masculine"],
["faith","вера","feminine"],
["belief","вера","feminine"],
["blow","удар","masculine"],
["stroke","удар","masculine"],
["game","игра","feminine"],
["play","игра","feminine"],
["bread","хлеб","masculine"],
["enemy","враг","masculine"],
["bill","счет","masculine"],
["account","счет","masculine"],
["meter","метр","masculine"],
["metre","метр","masculine"],
["idea","идея","feminine"],
["sound","звук","masculine"],
["poet","поэт","masculine"],
["skin","кожа","feminine"],
["leaf","лист","masculine"],
["sheet","лист","masculine"],
["role","роль","feminine"],
["growth","рост","masculine"],
["increase","рост","masculine"],
["height","рост","masculine"],
["woman","баба","feminine"],
["wife","баба","feminine"],
["old woman","баба","feminine"],
["bank","банк","masculine"],
["experience","опыт","masculine"],
["daughter","дочь","feminine"],
["member","член","masculine"],
["limb","член","masculine"],
["box","ящик","masculine"],
["case","ящик","masculine"],
["floor","этаж","masculine"],
["storey","этаж","masculine"],
["union","союз","masculine"],
["alliance","союз","masculine"],
["conjunction","союз","masculine"],
["summer","лето","neuter"],
["colour","цвет","masculine"],
["color","цвет","masculine"],
["chair","стул","masculine"],
["shadow","тень","feminine"],
["field","поле","neuter"],
["price","цена","feminine"],
["brain","мозг","masculine"],
["lady","дама","feminine"],
["partner","дама","feminine"],
["queen","дама","feminine"],
["fact","факт","masculine"],
["fish","рыба","feminine"],
["wine","вино","neuter"],
["circle","круг","masculine"],
["dad","папа","masculine"],
["daddy","папа","masculine"],
["winter","зима","feminine"],
["cheek","щека","feminine"],
["bush","куст","masculine"],
["sign","знак","masculine"],
["theme","тема","feminine"],
["subject","тема","feminine"],
["topic","тема","feminine"],
["course","курс","masculine"],
["policy","курс","masculine"],
["rate of exchange","курс","masculine"],
["miracle","чудо","neuter"],
["wonder","чудо","neuter"],
["term","срок","masculine"],
["time","срок","masculine"],
["terror","ужас","masculine"],
["horror","ужас","masculine"],
["cry","крик","masculine"],
["shout","крик","masculine"],
["scream","крик","masculine"],
["aunt","тетя","feminine"],
["point","очко","neuter"],
["pip","очко","neuter"],
["tank","танк","masculine"],
["container","танк","masculine"],
["horse","конь","masculine"],
["key","ключ","masculine"],
["devil","чёрт","masculine"],
["fighter","боец","masculine"],
["private","боец","masculine"],
["dust","пыль","feminine"],
["spray","пыль","feminine"],
["staff","штаб","masculine"],
["headquaters","штаб","masculine"],
["hearing","слух","masculine"],
["rumour","слух","masculine"],
["hearsay","слух","masculine"],
["long way off","даль","feminine"],
["lunch","обед","masculine"],
["dinner","обед","masculine"],
["laughter","смех","masculine"],
["USSR","СССР","masculine"],
["Soviet Union","СССР","masculine"],
["misfortune","беда","feminine"],
["trouble","беда","feminine"],
["club","клуб","masculine"],
["tsar","царь","masculine"],
["czar","царь","masculine"],
["king","царь","masculine"],
["ruler","царь","masculine"],
["time","время","neuter"],
["life","жизнь","feminine"],
["word","слово","neuter"],
["place","место","neuter"],
["seat","место","neuter"],
["door","дверь","feminine"],
["earth","земля","feminine"],
["land","земля","feminine"],
["soil","земля","feminine"],
["end","конец","masculine"],
["distance","конец","masculine"],
["voice","голос","masculine"],
["town","город","masculine"],
["city","город","masculine"],
["war","война","feminine"],
["part","часть","feminine"],
["share","часть","feminine"],
["department","часть","feminine"],
["book","книга","feminine"],
["street","улица","feminine"],
["evening","вечер","masculine"],
["people","народ","masculine"],
["nation","народ","masculine"],
["shoulder","плечо","neuter"],
["upper arm","плечо","neuter"],
["finger","палец","masculine"],
["toe","палец","masculine"],
["thought","мысль","feminine"],
["idea","мысль","feminine"],
["wall","стена","feminine"],
["right","право","neuter"],
["month","месяц","masculine"],
["back","спина","feminine"],
["shape","образ","masculine"],
["form","образ","masculine"],
["image","образ","masculine"],
["school","школа","feminine"],
["blood","кровь","feminine"],
["bank","берег","masculine"],
["shore","берег","masculine"],
["coast","берег","masculine"],
["family","семья","feminine"],
["answer","ответ","masculine"],
["reply","ответ","masculine"],
["sense","смысл","masculine"],
["meaning","смысл","masculine"],
["purpose","смысл","masculine"],
["form","форма","feminine"],
["shape","форма","feminine"],
["uniform","форма","feminine"],
["breast","грудь","feminine"],
["chest","грудь","feminine"],
["fire","огонь","masculine"],
["army","армия","feminine"],
["guest","гость","masculine"],
["wind","ветер","masculine"],
["law","закон","masculine"],
["statue","закон","masculine"],
["line","черта","feminine"],
["boundary","черта","feminine"],
["trait","черта","feminine"],
["hair","волос","masculine"],
["number","номер","masculine"],
["size","номер","masculine"],
["room","номер","masculine"],
["issue","номер","masculine"],
["head","глава","feminine"],
["chief","глава","feminine"],
["fear","страх","masculine"],
["hero","герой","masculine"],
["tie","связь","feminine"],
["bond","связь","feminine"],
["connection","связь","feminine"],
["relation","связь","feminine"],
["class","класс","masculine"],
["aristocracy","знать","feminine"],
["nobility","знать","feminine"],
["the elite","знать","feminine"],
["center","центр","masculine"],
["number","число","neuter"],
["ruble","рубль","masculine"],
["muzhik","мужик","masculine"],
["man","мужик","masculine"],
["author","автор","masculine"],
["science","наука","feminine"],
["kitchen","кухня","feminine"],
["novel","роман","masculine"],
["romance","роман","masculine"],
["grass","трава","feminine"],
["tear","слеза","feminine"],
["smell","запах","masculine"],
["odour","запах","masculine"],
["scent","запах","masculine"],
["dot","точка","feminine"],
["point","точка","feminine"],
["crowd","толпа","feminine"],
["boot","сапог","masculine"],
["rain","дождь","masculine"],
["collar","ворот","masculine"],
["neighbour","сосед","masculine"],
["exit","выход","masculine"],
["advice","совет","masculine"],
["fool","дурак","masculine"],
["idiot","дурак","masculine"],
["train","поезд","masculine"],
["organ","орган","masculine"],
["body","орган","masculine"],
["map","карта","feminine"],
["glory","слава","feminine"],
["fame","слава","feminine"],
["roof","крыша","feminine"],
["occastion","повод","masculine"],
["reason","повод","masculine"],
["bridle","повод","masculine"],
["bird","птица","feminine"],
["vodka","водка","feminine"],
["stomach","живот","masculine"],
["belly","живот","masculine"],
["front","фронт","masculine"],
["area","район","masculine"],
["region","район","masculine"],
["bag","мешок","masculine"],
["sack","мешок","masculine"],
["factory","завод","masculine"],
["fist","кулак","masculine"],
["day","сутки","plural"],
["twenty-four hours","сутки","plural"],
["piece","кусок","masculine"],
["bit","кусок","masculine"],
["slice","кусок","masculine"],
["wave","волна","feminine"],
["pause","пауза","feminine"],
["hundred","сотня","feminine"],
["major","майор","masculine"],
["theater","театр","masculine"],
["play-house","театр","masculine"],
["the plays","театр","masculine"],
["tail","хвост","masculine"],
["end","хвост","masculine"],
["queue","хвост","masculine"],
["poetry","стихи","plural"],
["verses","стихи","plural"],
["carriage","вагон","masculine"],
["coach","вагон","masculine"],
["film","фильм","masculine"],
["movie","фильм","masculine"],
["cinema","фильм","masculine"],
["chimney","труба","feminine"],
["pipe","труба","feminine"],
["trumpet","труба","feminine"],
["horn","труба","feminine"],
["mass","масса","feminine"],
["large amount","масса","feminine"],
["lots","масса","feminine"],
["line","линия","feminine"],
["boat","лодка","feminine"],
["department","отдел","masculine"],
["section","отдел","masculine"],
["spring","весна","feminine"],
["springtime","весна","feminine"],
["success","успех","masculine"],
["stage","сцена","feminine"],
["scene","сцена","feminine"],
["ticket","билет","masculine"],
["fair","билет","masculine"],
["honour","честь","feminine"],
["regard","честь","feminine"],
["respect","честь","feminine"],
["west","запад","masculine"],
["the West","запад","masculine"],
["Jew","еврей","masculine"],
["Hebrew","еврей","masculine"],
["firm","фирма","feminine"],
["company","фирма","feminine"],
["phrase","фраза","feminine"],
["sentence","фраза","feminine"],
["lock","замок","masculine"],
["castle","замок","masculine"],
["market","рынок","masculine"],
["marketplace","рынок","masculine"],
["bone","кость","feminine"],
["joke","шутка","feminine"],
["trick","шутка","feminine"],
["prank","шутка","feminine"],
["wild animal","зверь","masculine"],
["beast","зверь","masculine"]];


var RUSSIAN_MEDIUM_DICTIONARY = [["head","голова","feminine"],
["mind","голова","feminine"],
["brains","голова","feminine"],
["work","работа","feminine"],
["job","работа","feminine"],
["car","машина","feminine"],
["machine","машина","feminine"],
["engine","машина","feminine"],
["case","случай","masculine"],
["occasion","случай","masculine"],
["incident","случай","masculine"],
["beginning","начало","neuter"],
["origin","начало","neuter"],
["source","начало","neuter"],
["question","вопрос","masculine"],
["matter","вопрос","masculine"],
["problem","вопрос","masculine"],
["money","деньги","plural"],
["minute","минута","feminine"],
["moment","минута","feminine"],
["truth","правда","feminine"],
["country","страна","feminine"],
["road","дорога","feminine"],
["way","дорога","feminine"],
["journey","дорога","feminine"],
["Moscow","Москва","feminine"],
["look","взгляд","masculine"],
["glance","взгляд","masculine"],
["view","взгляд","masculine"],
["Russia","Россия","feminine"],
["old man","старик","masculine"],
["heart","сердце","neuter"],
["death","смерть","feminine"],
["letter","письмо","neuter"],
["power","власть","feminine"],
["air","воздух","masculine"],
["love","любовь","feminine"],
["soldier","солдат","masculine"],
["master","хозяин","masculine"],
["boss","хозяин","masculine"],
["host","хозяин","masculine"],
["boy","парень","masculine"],
["fellow","парень","masculine"],
["guy","парень","masculine"],
["sun","солнце","neuter"],
["week","неделя","feminine"],
["guys","ребята","plural"],
["children","ребята","plural"],
["moment","момент","masculine"],
["instant","момент","masculine"],
["group","группа","feminine"],
["newspaper","газета","feminine"],
["help","помощь","feminine"],
["dog","собака","feminine"],
["tree","дерево","neuter"],
["black","чёрный","masculine"],
["pocket","карман","masculine"],
["stone","камень","masculine"],
["fate","судьба","feminine"],
["fortune","судьба","feminine"],
["destiny","судьба","feminine"],
["party","партия","feminine"],
["paper","бумага","feminine"],
["memory","память","feminine"],
["knee","колено","neuter"],
["tube","трубка","feminine"],
["roll","трубка","feminine"],
["pipe","трубка","feminine"],
["doctor","доктор","masculine"],
["palm","ладонь","feminine"],
["service","служба","feminine"],
["work","служба","feminine"],
["weapon","оружие","neuter"],
["star","звезда","feminine"],
["officer","офицер","masculine"],
["chair","кресло","neuter"],
["glass","стекло","neuter"],
["flower","цветок","masculine"],
["smile","улыбка","feminine"],
["fight","борьба","feminine"],
["struggle","борьба","feminine"],
["sister","сестра","feminine"],
["music","музыка","feminine"],
["horse","лошадь","feminine"],
["king","король","masculine"],
["example","пример","masculine"],
["camp","лагерь","masculine"],
["opinion","мнение","neuter"],
["island","остров","masculine"],
["article","статья","feminine"],
["silence","тишина","feminine"],
["stillness","тишина","feminine"],
["order","приказ","masculine"],
["glass","стакан","masculine"],
["clothing","одежда","feminine"],
["building","здание","neuter"],
["problem","задача","feminine"],
["task","задача","feminine"],
["army","войско","neuter"],
["forces","войско","neuter"],
["knowledge","знание","neuter"],
["dollar","доллар","masculine"],
["costume","костюм","masculine"],
["suit","костюм","masculine"],
["magazine","журнал","masculine"],
["journal","журнал","masculine"],
["periodical","журнал","masculine"],
["diary","журнал","masculine"],
["figure","фигура","feminine"],
["period","период","masculine"],
["age","период","masculine"],
["composition","состав","masculine"],
["structure","состав","masculine"],
["staff","состав","masculine"],
["train","состав","masculine"],
["method","способ","masculine"],
["way","способ","masculine"],
["mode","способ","masculine"],
["sight","зрение","neuter"],
["eyesight","зрение","neuter"],
["vision","зрение","neuter"],
["master","мастер","masculine"],
["expert","мастер","masculine"],
["mistake","ошибка","feminine"],
["error","ошибка","feminine"],
["height","высота","feminine"],
["cell","камера","feminine"],
["chamber","камера","feminine"],
["camera","камера","feminine"],
["victory","победа","feminine"],
["homeland","родина","feminine"],
["native land","родина","feminine"],
["home","родина","feminine"],
["size","размер","masculine"],
["dimensions","размер","masculine"],
["rate","размер","masculine"],
["degree","размер","masculine"],
["inhabitant","житель","masculine"],
["resident","житель","masculine"],
["dweller","житель","masculine"],
["man","человек","masculine"],
["person","человек","masculine"],
["side","сторона","feminine"],
["party","сторона","feminine"],
["child","ребёнок","masculine"],
["kid","ребёнок","masculine"],
["infant","ребёнок","masculine"],
["woman","женщина","feminine"],
["comrade","товарищ","masculine"],
["friend","товарищ","masculine"],
["room","комната","feminine"],
["history","история","feminine"],
["story","история","feminine"],
["event","история","feminine"],
["boy","мальчик","masculine"],
["girl","девушка","feminine"],
["miss","девушка","feminine"],
["system","система","feminine"],
["man","мужчина","masculine"],
["male","мужчина","masculine"],
["captain","капитан","masculine"],
["master","капитан","masculine"],
["feeling","чувство","neuter"],
["general","генерал","masculine"],
["order","порядок","masculine"],
["line","очередь","feminine"],
["queue","очередь","feminine"],
["turn","очередь","feminine"],
["cause","причина","feminine"],
["reason","причина","feminine"],
["motive","причина","feminine"],
["girl","девочка","feminine"],
["little girl","девочка","feminine"],
["village","деревня","feminine"],
["country","деревня","feminine"],
["happiness","счастье","neuter"],
["luck","счастье","neuter"],
["bottle","бутылка","feminine"],
["condition","условие","neuter"],
["term","условие","neuter"],
["process","процесс","masculine"],
["picture","картина","feminine"],
["painting","картина","feminine"],
["future","будущее","neuter"],
["telephone","телефон","masculine"],
["corridor","коридор","masculine"],
["passage","коридор","masculine"],
["meeting","встреча","feminine"],
["reception","встреча","feminine"],
["study","кабинет","masculine"],
["room","кабинет","masculine"],
["office suite","кабинет","masculine"],
["aircraft","самолет","masculine"],
["aeroplane","самолет","masculine"],
["story","рассказ","masculine"],
["decision","решение","neuter"],
["conclusion","решение","neuter"],
["bride","молодая","feminine"],
["current","течение","neuter"],
["interest","интерес","masculine"],
["shop","магазин","masculine"],
["store","магазин","masculine"],
["gratitude","спасибо","neuter"],
["thanks","спасибо","neuter"],
["illness","болезнь","feminine"],
["sickness","болезнь","feminine"],
["disease","болезнь","feminine"],
["event","событие","neuter"],
["hope","надежда","feminine"],
["nature","природа","feminine"],
["surname","фамилия","feminine"],
["level","уровень","masculine"],
["second","секунда","feminine"],
["rule","правило","neuter"],
["ten","десяток","masculine"],
["dozens","десяток","masculine"],
["wish","желание","neuter"],
["border","граница","feminine"],
["freedom","свобода","feminine"],
["square","площадь","feminine"],
["area","площадь","feminine"],
["gladness","радость","feminine"],
["joy","радость","feminine"],
["age","возраст","masculine"],
["oblast","область","feminine"],
["province","область","feminine"],
["field","область","feminine"],
["mirrow","зеркало","neuter"],
["grandmother","бабушка","feminine"],
["teacher","учитель","masculine"],
["instructor","учитель","masculine"],
["ship","корабль","masculine"],
["bed","кровать","feminine"],
["childhood","детство","neuter"],
["darkness","темнота","feminine"],
["station","станция","feminine"],
["team","команда","feminine"],
["command","команда","feminine"],
["treatment","лечение","neuter"],
["cure","лечение","neuter"],
["militia","милиция","feminine"],
["old woman","старуха","feminine"],
["automatic machine","автомат","masculine"],
["machine gun","автомат","masculine"],
["robot","автомат","masculine"],
["depth","глубина","feminine"],
["intensity","глубина","feminine"],
["student","студент","masculine"],
["object","предмет","masculine"],
["item","предмет","masculine"],
["engineer","инженер","masculine"],
["degree","степень","feminine"],
["extent","степень","feminine"],
["minister","министр","masculine"],
["principle","принцип","masculine"],
["God","Господь","masculine"],
["the Lord","Господь","masculine"],
["capital","столица","feminine"],
["attempt","попытка","feminine"],
["endeavour","попытка","feminine"],
["America","Америка","feminine"],
["United States","Америка","feminine"]];

var RUSSIAN_HARD_DICTIONARY = [["talk","разговор","masculine"],
["conversation","разговор","masculine"],
["flat","квартира","feminine"],
["apartment","квартира","feminine"],
["attention","внимание","neuter"],
["movement","движение","neuter"],
["society","общество","neuter"],
["writer","писатель","masculine"],
["action","действие","neuter"],
["effect","действие","neuter"],
["commander","командир","masculine"],
["commanding officer","командир","masculine"],
["problem","проблема","feminine"],
["issue","проблема","feminine"],
["means","средство","neuter"],
["remedy","средство","neuter"],
["gentleman","господин","masculine"],
["director","директор","masculine"],
["manager","директор","masculine"],
["document","документ","masculine"],
["development","развитие","neuter"],
["company","компания","feminine"],
["institute","институт","masculine"],
["half","половина","feminine"],
["quality","качество","neuter"],
["consciousness","сознание","neuter"],
["parent","родитель","masculine"],
["character","характер","masculine"],
["disposition","характер","masculine"],
["temper","характер","masculine"],
["situation","ситуация","feminine"],
["name","название","neuter"],
["title","название","neuter"],
["kilometre","километр","masculine"],
["kilometer","километр","masculine"],
["staircase","лестница","feminine"],
["painter","художник","masculine"],
["artist","художник","masculine"],
["operation","операция","feminine"],
["procedure","операция","feminine"],
["surgery","операция","feminine"],
["sensation","ощущение","neuter"],
["feeling","ощущение","neuter"],
["material","материал","masculine"],
["fabric","материал","masculine"],
["culture","культура","feminine"],
["organism","организм","masculine"],
["meaning","значение","neuter"],
["significance","значение","neuter"],
["sense","значение","neuter"],
["Germany","Германия","feminine"],
["being","существо","neuter"],
["creature","существо","neuter"],
["essence","существо","neuter"],
["personality","личность","feminine"],
["person","личность","feminine"],
["health","здоровье","neuter"],
["reader","читатель","masculine"],
["page","страница","feminine"],
["speed","скорость","feminine"],
["cigarette","сигарета","feminine"],
["relationship","отношение","neuter"],
["attitude","отношение","neuter"],
["chief","начальник","masculine"],
["head","начальник","masculine"],
["superior","начальник","masculine"],
["state","состояние","neuter"],
["condition","состояние","neuter"],
["fortune","состояние","neuter"],
["position","положение","neuter"],
["posture","положение","neuter"],
["condition","положение","neuter"],
["state","положение","neuter"],
["professor","профессор","masculine"],
["result","результат","masculine"],
["outcome","результат","masculine"],
["lieutenant","лейтенант","masculine"],
["president","президент","masculine"],
["revolution","революция","feminine"],
["colonel","полковник","masculine"],
["citizen","гражданин","masculine"],
["expression","выражение","neuter"],
["art","искусство","neuter"],
["program","программа","feminine"],
["population","население","neuter"],
["urchin","мальчишка","masculine"],
["boy","мальчишка","masculine"],
["colloborator","сотрудник","masculine"],
["employee","сотрудник","masculine"],
["official","сотрудник","masculine"],
["secretary","секретарь","masculine"],
["literature","литература","feminine"],
["quantity","количество","neuter"],
["information","информация","feminine"],
["operation","управление","neuter"],
["control","управление","neuter"],
["photography","фотография","feminine"],
["photo","фотография","feminine"],
["picture","фотография","feminine"],
["possibility","возможность","feminine"],
["opportunity","возможность","feminine"],
["chance","возможность","feminine"],
["State","государство","neuter"],
["disease","заболевание","neuter"],
["illness","заболевание","neuter"],
["majority","большинство","neuter"],
["impression","впечатление","neuter"],
["effect","впечатление","neuter"],
["organization","организация","feminine"],
["directon","направление","neuter"],
["trend","направление","neuter"],
["pleasure","удовольствие","neuter"],
["space","пространство","neuter"],
["area","пространство","neuter"],
["activity","деятельность","feminine"],
["work","деятельность","feminine"],
["occupation","деятельность","feminine"],
["chairman","председатель","masculine"],
["president","председатель","masculine"],
["humanity","человечество","neuter"],
["mankind","человечество","neuter"],
["government","правительство","neuter"],
["circumstance","обстоятельство","neuter"],
["adverb","обстоятельство","neuter"],
];
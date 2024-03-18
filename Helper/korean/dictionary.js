var DICTIONARY = [["dog","개",""],
["bird","새",""],
["cow","소",""],
["mouse","쥐",""],
["horse","말",""],
["car","차",""],
["boat","배",""],
["pear","배",""],
["stomach","배",""],
["house","집",""],
["street","길",""],
["room","방",""],
["clothes","옷",""],
["daughter","딸",""],
["the older brother of a male","형",""],
["king","왕",""],
["fan","팬",""],
["medicine","약",""],
["money","돈",""],
["won","원","Korean currency"],
["team","팀",""],
["poison","독",""],
["gun","총",""],
["ball","공",""],
["tea","차",""],
["water","물",""],
["chicken","닭",""],
["uncooked rice","쌀",""],
["rice","밥",""],
["meal","밥",""],
["seed","씨",""],
["knife","칼",""],
["cup","컵",""],
["bottle","병",""],
["dream","꿈",""],
["door","문",""],
["book","책",""],
["wall","벽",""],
["neck","목",""],
["eye","눈",""],
["mouth","입",""],
["nose","코",""],
["ear","귀",""],
["tongue","혀",""],
["back","등",""],
["foot","발",""],
["hand","손",""],
["arm","팔",""],
["blood","피",""],
["brain","뇌",""],
["sweat","땀",""],
["disease","병",""],
["illness","병",""],
["bone","뼈",""],
["body","몸",""],
["river","강",""],
["mountain","산",""],
["rain","비",""],
["snow","눈",""],
["eye","눈",""],
["moon","달",""],
["month","달",""],
["forest","숲",""],
["flower","꽃",""],
["star","별",""],
["fire","불",""],
["island","섬",""],
["fever","열",""],
["heat","열",""],
["stone","돌",""],
["pebble","돌",""],
["gold","금",""],
["silver","은",""],
["half","반",""],
["point","점",""],
["yes","네",""],
["I see","네",""],
["okay","네","formal"],
["spring","봄",""],
["zero","공",""],
["ball","공",""],
["2","둘",""],
["3","셋",""],
["4","넷",""],
["10","열",""],
["50","쉰",""],
["100","백",""],
["1000","천",""],
["10","만",""],
["000","만",""],
["100","억",""],
["000","억",""],
["000","억",""],
["year","년","counter"],
["month","달","counter"],
["minute","분",""],
["person","분","honorific"],
["night","밤",""],
["I","저",""],
["me","저","forma"],
["that","저",""],
["I","나",""],
["me","나","informal"],
["that","그",""],
["he","그",""],
["she","그",""],
["it","그",""],
["my","내","informal"],
["wing","날개",""],
["animal","동물",""],
["train","기차",""],
["truck","트럭",""],
["bus","버스",""],
["a commercial ship","선박",""],
["vessel","선박",""],
["oil","기름",""],
["gasoline","기름",""],
["engine","엔진",""],
["transportation","교통",""],
["traffic","교통",""],
["city","도시",""],
["road","도로",""],
["airport","공항",""],
["bridge","다리",""],
["leg","다리",""],
["hotel","호텔",""],
["restaurant","식당",""],
["farm","농장",""],
["school","학교",""],
["village","마을",""],
["town","마을",""],
["club","클럽",""],
["bar","술집",""],
["park","공원",""],
["camp","캠프",""],
["store","가게",""],
["theater","극장",""],
["hospital","병원",""],
["church","교회",""],
["market","시장",""],
["country","나라",""],
["building","건물",""],
["floor","바닥",""],
["space","공간",""],
["room","공간",""],
["bank","은행",""],
["location","위치",""],
["hat","모자",""],
["suit","양복",""],
["skirt","치마",""],
["pants","바지",""],
["shoes","신발",""],
["coat","코트",""],
["stain","얼룩",""],
["navy blue","곤색",""],
["brown","갈색",""],
["gray","회색",""],
["color","색깔",""],
["son","아들",""],
["mom","엄마",""],
["dad","아빠",""],
["baby","애기",""],
["man","남자",""],
["woman","여자",""],
["the older sister of a male","누나",""],
["the older brother of a female","오빠",""],
["the older sister of a female","언니",""],
["husband","남편",""],
["wife","아내",""],
["queen","여왕",""],
["adult","성인",""],
["human being","인간",""],
["friend","친구",""],
["player","선수",""],
["crowd","군중",""],
["person","사람",""],
["student","학생",""],
["doctor","의사",""],
["patient","환자",""],
["secretary","비서",""],
["police","경찰",""],
["army","군대",""],
["soldier","군인",""],
["author","저자",""],
["reporter","기자",""],
["actor","배우",""],
["job","직업",""],
["religion","종교",""],
["heaven","천국",""],
["hell","지옥",""],
["death","죽음",""],
["paper money","지폐","bill"],
["marriage","결혼",""],
["ethnicity","인종",""],
["sex","섹스",""],
["gender","성별",""],
["murder","살인",""],
["technology","기술",""],
["stamina","정력",""],
["energy","정력",""],
["war","전쟁",""],
["peace","평화",""],
["attack","공격",""],
["election","선거",""],
["magazine","잡지",""],
["newspaper","신문",""],
["race","경주",""],
["exercise","운동",""],
["workout","운동",""],
["game","게임",""],
["price","가격",""],
["drug","마약",""],
["signboard","간판",""],
["science","과학",""],
["band","밴드",""],
["song","노래",""],
["musical instrument","악기",""],
["music","음악",""],
["movie","영화",""],
["art","미술",""],
["coffee","커피",""],
["beer","맥주",""],
["juice","쥬스",""],
["milk","우유",""],
["egg","계란",""],
["cheese","치즈",""],
["soup","국물",""],
["broth","국물",""],
["apple","사과",""],
["lemon","레몬",""],
["fork","포크",""],
["plate","접시",""],
["morning","아침",""],
["breakfast","아침",""],
["lunch","점심",""],
["dinner","저녁",""],
["evening","저녁",""],
["sugar","설탕",""],
["salt","소금",""],
["food","음식",""],
["desk","책상",""],
["coffee table","탁자",""],
["dining table","식탁",""],
["chair","의자",""],
["bed","침대",""],
["window","창문",""],
["bedroom","침실",""],
["kitchen","부엌",""],
["pencil","연필",""],
["pen","볼팬",""],
["photo","사진",""],
["soap","비누",""],
["key","열쇠",""],
["letter","편지",""],
["note","메모",""],
["paper","종이",""],
["ceiling","천장",""],
["roof","지붕",""],
["garden","정원",""],
["yard","마당",""],
["needle","바늘",""],
["bag","가방",""],
["box","상자",""],
["gift","선물",""],
["present","선물",""],
["card","카드",""],
["ring","반지",""],
["tool","도구",""],
["clock","시계",""],
["watch","시계",""],
["lamp","램프",""],
["screen","화면",""],
["head","머리",""],
["face","얼굴",""],
["lips","입술",""],
["tooth","이빨",""],
["tears","눈물",""],
["waist","허리",""],
["lower back","허리",""],
["shoulder","어깨",""],
["heart","심장",""],
["knee","무릅",""],
["skin","피부",""],
["sea","바다",""],
["ocean","바다",""],
["world","세계",""],
["earth","지구",""],
["sky","하늘",""],
["plant","식물",""],
["wind","바람",""],
["soil","토양",""],
["valley","계곡",""],
["root","뿌리",""],
["lake","호수",""],
["grass","잔디",""],
["air","공기",""],
["sand","모래",""],
["beach","해변",""],
["wave","파도",""],
["ice","어름",""],
["hill","언덕",""],
["nature","자연",""],
["glass","유리",""],
["metal","금속",""],
["tree","나무",""],
["wood","나무",""],
["clay","찰흙",""],
["dust","먼지",""],
["dirt","먼지",""],
["copper","구리",""],
["ingredient","재료",""],
["material","재료",""],
["meter","미터",""],
["circle","서클",""],
["temperature","온도",""],
["date","날짜",""],
["weight","무게",""],
["map","지도",""],
["consonant","자음",""],
["vowel","모음",""],
["sound","소리",""],
["piece","조각",""],
["pain","아픔",""],
["wound","상처",""],
["hole","구멍",""],
["pattern","패턴",""],
["noun","명사",""],
["verb","동사",""],
["above","위에",""],
["under","아래",""],
["side of","옆면",""],
["back side","뒷면",""],
["inside","안에",""],
["outside","밖에",""],
["left side","왼쪽",""],
["straight","곧장",""],
["north","북쪽",""],
["south","남쪽",""],
["east","동쪽",""],
["west","서쪽",""],
["direction","방향",""],
["summer","여름",""],
["winter","겨울",""],
["autumn","가을",""],
["season","계절",""],
["1","하나",""],
["5","다섯",""],
["6","여섯",""],
["7","일곱",""],
["8","여덟",""],
["9","아홉",""],
["12","열둘",""],
["13","열셋",""],
["14","열넷",""],
["20","스물",""],
["30","서른",""],
["40","마흔",""],
["52","쉰둘",""],
["60","예순",""],
["80","여든",""],
["90","아흔",""],
["102","백둘",""],
["110","백십",""],
["1001","천일",""],
["100","십만",""],
["000","십만",""],
["1","백만",""],
["000","백만",""],
["000","백만",""],
["10","천만",""],
["000","천만",""],
["000","천만",""],
["1","십억",""],
["000","십억",""],
["000","십억",""],
["000","십억",""],
["second","둘째",""],
["number","번호",""],
["January","일월",""],
["February","이월",""],
["March","삼월",""],
["April","사월",""],
["May","오월",""],
["June","유월",""],
["July","칠월",""],
["August","팔월",""],
["September","구월",""],
["October","시월",""],
["hour","시간","duratio"],
["time","시간",""],
["to play","놀다",""],
["to walk","걷다",""],
["to run","뛰다",""],
["to fly","날다",""],
["to go","가다",""],
["to eat","먹다",""],
["to die","죽다",""],
["to laugh","웃다",""],
["smile","웃다",""],
["to cry","울다",""],
["to buy","사다",""],
["to sell","팔다",""],
["to shoot","쏘다",""],
["to listen","듣다",""],
["hear","듣다",""],
["to see","보다",""],
["to melt","녹다",""],
["to dig","파다",""],
["to sit","앉다",""],
["to stand","서다",""],
["to lie down","눕다",""],
["to sleep","자다",""],
["to wake up","깨다",""],
["to count","세다",""],
["to lose","지다",""],
["to mix","섞다",""],
["to wash","씻다",""],
["to open","열다",""],
["to close","닫다",""],
["to write","쓰다",""],
["to turn","돌다",""],
["to catch","잡다",""],
["to find","찾다",""],
["look for","찾다",""],
["to push","밀다",""],
["to cost","들다",""],
["carry","들다",""],
["to wear","입다",""],
["To beat","패다",""],
["to bash","패다",""],
["to be long","길다",""],
["to be short","짧다",""],
["to be wide","넓다",""],
["to be big","크다",""],
["to be small","작다",""],
["To be young","젊다",""],
["youthful","젊다",""],
["to be old","늙다","person"],
["to be good","좋다",""],
["to be wet","젖다",""],
["damp","젖다",""],
["blind person","맹인",""],
["to be thin","얇다",""],
["to be cheap","싸다",""],
["To put on or wear","끼다",""],
["to wear","끼다","a ring"],
["to be high","놉다",""],
["to be low","낮다",""],
["to be deep","깊다",""],
["to be shallow","얕다",""],
["to live","살다",""],
["to be bright","밝다",""],
["we","우리",""],
["our","우리",""],
["my","저의","formal"],
["you","당신","formal"],
["I","내가","as subject"],
["you","네가",""],
["cat","고양이",""],
["fish","물고기",""],
["airplane","비행기",""],
["bicycle","자정거",""],
["tire","타이어",""],
["train ticket","기차표",""],
["train station","기차역",""],
["courthouse","재판소","legal"],
["office","사무실",""],
["university","대학교",""],
["library","도서관",""],
["dress","드레스",""],
["t-shirt","티셔츠",""],
["pocket","주머니",""],
["red","빨간색",""],
["green","초록색",""],
["blue","파랑색",""],
["yellow","노랑색",""],
["pink","분홍색",""],
["black","검은색",""],
["white","하얀색",""],
["parents","부모님",""],
["grandmother","할머니",""],
["president","대통령",""],
["victim","피해자",""],
["teacher","선생님",""],
["lawyer","변호사",""],
["waiter","웨이터",""],
["priest","신부님",""],
["artist","예술가",""],
["manager","매니저",""],
["wedding","결혼식",""],
["prison","교도소",""],
["sports","스포츠",""],
["contract","계약서",""],
["god","하느님",""],
["beverage","음료수",""],
["cake","케이크",""],
["beef","소고기",""],
["banana","바나나",""],
["orange","오렌지",""],
["corn","옥수수",""],
["cooking oil","식용유",""],
["spoon","숟가락",""],
["bathroom","화장실",""],
["page","페이지",""],
["paint","페인트",""],
["swimming pool","수영장",""],
["lock","자물쇠",""],
["phone","전화기",""],
["cell phone","휴대폰",""],
["computer","컴퓨터",""],
["laptop","노트북",""],
["camera","카메라",""],
["radio","라디오",""],
["beard","턱수염",""],
["toe","발가락",""],
["finger","손가락",""],
["voice","목소리",""],
["leaf","나뭇잎",""],
["light","가벼운","weight"],
["No","아니요","formal"],
["image","이미지",""],
["adjective","형용사",""],
["right side","오른쪽",""],
["11","열하나",""],
["15","열다섯",""],
["16","열여섯",""],
["17","열일곱",""],
["18","열여덜",""],
["19","열아홉",""],
["21","스물한",""],
["22","스물두",""],
["32","서른둘",""],
["42","마흔둘",""],
["51","쉰하나",""],
["62","예순둘",""],
["82","여든둘",""],
["92","아흔둘",""],
["101","백하나",""],
["111","백십일",""],
["first","첫번째",""],
["third","세번째",""],
["fourth","네번째",""],
["November","십일월",""],
["December","십이월",""],
["Monday","월요일",""],
["Tuesday","화요일",""],
["Wednesday","수요일",""],
["Thursday","목요일",""],
["Friday","금요일",""],
["Saturday","토요일",""],
["Sunday","일요일",""],
["to work","일하다",""],
["to stop","멈추다",""],
["to follow","따르다",""],
["to speak","말하다",""],
["to drink","마시다",""],
["to kill","죽이다",""],
["to learn","배우다",""],
["to taste","맛보다",""],
["to touch","만지다",""],
["to burn","불타다",""],
["to cut","자르다","ha"],
["trees","자르다",""],
["papers...)","자르다",""],
["to fight","싸우다",""],
["to dance","춤추다",""],
["to win","이기다",""],
["to call","부르다",""],
["to grow up","자라다",""],
["to draw","그리다",""],
["to feed","먹이다",""],
["to throw","던지다",""],
["pull","당기다",""],
["to break","깨지다",""],
["to shake","흔들다",""],
["to be slow","느리다",""],
["to be fast","빠르다",""],
["to be hot","뜨겁다",""],
["to be cold","차겁다",""],
["to be new","새롭다",""],
["to be bad","나쁘다",""],
["to be sick","아프다",""],
["hurt","아프다",""],
["to be sad","슬프다",""],
["to be nice","착하다",""],
["kind","착하다",""],
["to be thick","두껍다",""],
["to be expensive","비싸다",""],
["to be dirty","더럽다",""],
["to be weak","약하다",""],
["to be heavy","무겁다",""],
["to be light","가볍다",""],
["to be dark","어둡다",""],
["Other party","상대방",""],
["counterpart","상대방",""],
["orange","오랜지색",""],
["grandfather","할아버지",""],
["little girl","여자아이",""],
["little boy","남자아이",""],
["pork","돼지고기",""],
["network","네트워크",""],
["television","텔레비전",""],
["hair","머리카락",""],
["plastic","플라스틱",""],
["centimeter","센티미터",""],
["kilometer","킬로미터",""],
["square","정사각형",""],
["edge","가장자리",""],
["31","서른하나",""],
["41","마흔하나",""],
["61","예순하나",""],
["81","여든하나",""],
["91","아흔하나",""],
["fifth","다섯번째",""],
["to drive","운전하다",""],
["to swim","수영하다",""],
["to think","생각하다",""],
["to pay","지불하다",""],
["to jump","점프하다",""],
["to kiss","뽀뽀하다",""],
["to explode","폭발하다",""],
["to love","사랑하다",""],
["to pass by","지나가다",""],
["to sing","노래하다",""],
["to marry","결혼하다",""],
["to pray","기도하다",""],
["to bend","구부리다",""],
["to cook","요리하다",""],
["To construct or erect","건설하다",""],
["to teach","가르치다",""],
["to clean","청소하다",""],
["to fall down","넘어지다",""],
["to break down","망가지다",""],
["to sign","서명하다","signature"],
["to be warm","따뜻하다",""],
["to be cool","선선하다",""],
["to be old","오래되다","for inanimate objects"],
["to be dry","건조하다",""],
["to be healthy","건강하다",""],
["to be noisy","시끄럽다",""],
["loud","시끄럽다",""],
["to be quiet","조용하다",""],
["to be happy","행복하다",""],
["to be beautiful","아름답다",""],
["to be ugly","못생기다",""],
["deaf person","귀머거리",""],
["to be poor","가난하다",""],
["to be wealthy","부유하다",""],
["to be smooth","평탄하다",""],
["flat","평탄하다",""],
["to be loose","헐렁하다",""],
["baggy","헐렁하다",""],
["to be hard","딱딱하다",""],
["to be soft","부드럽다",""],
["to be clean","깨끗하다",""],
["neighbour","옆집 사람",""],
["diamond","다이아몬드",""],
["to lift","들어올리다",""],
["to be tall","키가 크다","height"],
["to be short","키가 작다","short"],
["to be bent","구부러지다",""],
["to be strong","힘이 세다",""],
["to smell something","냄새를 맡다",""],
["to be popular","인기가 많다",""],
];
import { useState } from "react";

const D = [
  {
    key:"d1", title:"후쿠오카 도착 & 나카스 나이트", theme:"도착 → 저녁 → 나카스강 야타이",
    emoji:"✈️", color:"#D97B3B", date:"Day 1 · 3/5(목)",
    budget:"교통 ¥260 · 저녁 ¥1,500~3,000 · 야타이 ¥1,000~2,000",
    items:[
      {t:"15:55",a:"후쿠오카 공항 도착",icon:"✈️",type:"move",
        spot:{name:"후쿠오카 공항",jp:"福岡空港",pid:"ChIJrQFpQhaQQTURtx9OWEZ_5hY",lat:33.585,lng:130.449},
        notes:["국내선 수하물 10~15분 / 국제선 20~30분","IC카드(Sugoca) 공항역 자판기에서 구매"]},
      {t:"16:25",a:"공항 → 하카타역",icon:"🚇",type:"move",
        sub:"지하철 쿠코선 · 2정거장 · 5분 · ¥260",
        notes:["하카타역 치쿠시구치(筑紫口)로 나가기"]},
      {t:"16:40",a:"숙소 체크인",icon:"🏠",type:"stay",dur:"30분",
        spot:{name:"하카타역 도보4분 (Hoshino Rin)",jp:"에어비앤비",lat:33.5895,lng:130.4215},
        notes:["셀프 체크인 — 사전 메시지 확인","나카스까지 도보 이동, 편한 복장"]},
      {t:"17:15",a:"BOUL'ANGE 크로와상 아이스 🥐",icon:"🥐",type:"food",dur:"10분",
        spot:{name:"BOUL'ANGE 하카타역점",jp:"ブーランジェ 博多駅前店",pid:"ChIJu_ygu2uRQTURYO_jiqOjjr4",lat:33.5926,lng:130.4157,
          r:4.5,rc:986,h:"평일 07:30~21:00",tel:"092-432-1580",price:"¥500~"},
        sub:"숙소에서 도보 3분 — 체크인 후 바로!",
        menu:[{n:"🥇 크로와상 소프트 아이스",p:"¥480~",d:"바삭 크로와상 콘 + 밀키 소프트크림 — 필수!"}],
        notes:["테이크아웃 전용","저녁 전 가벼운 간식으로 딱"]},
      {t:"17:30",a:"우오덴 해물 저녁",icon:"🐟",type:"food",dur:"50분",
        spot:{name:"우오덴 니시나카스점",jp:"博多シーフード うお田",pid:"ChIJRWtUuzuRQTURz4Y11F-39kk",lat:33.5917,lng:130.4051,
          r:4.3,rc:2651,price:"¥1,500~3,000",h:"07:00~22:00 (무휴)",tel:"092-292-7444"},
        menu:[{n:"명란이쿠라계란말이덮밥",d:"인기 No.1"},{n:"해물 정식",p:"¥1,500~"},{n:"스시 세트",p:"¥2,000~"}],
        notes:["나카스 옆 → 야타이 연계 최적","예약 추천 · 카운터석은 워크인 가능"]},
      {t:"18:20",a:"→ 나카스 야타이 이동",icon:"🚶",type:"move",sub:"도보 3분"},
      {t:"18:30",a:"나카스 야타이 포장마차",icon:"🏮",type:"spot",dur:"60분",
        spot:{name:"나카스 야타이 거리",jp:"中洲屋台街",pid:"ChIJxSSDyVORQTURNCeKKwmq6Fk",lat:33.5899,lng:130.4089,h:"18:00~24:00경"},
        menu:[{n:"라멘",p:"¥800~1,000"},{n:"오뎅",p:"¥100~300/개"},{n:"야키토리",p:"¥150~300"},{n:"하이볼",p:"¥500~700"}],
        notes:["⚠️ 현금 필수!","18시 직후 = 대기 없이 착석","강바람 맞으며 하이볼 🍻"]},
      {t:"19:20",a:"강변 바 2차 (선택)",icon:"🥃",type:"food",
        notes:["컨디션 따라 야타이만으로 마무리 OK","내일 히타행 — 과음 주의"]},
      {t:"20:30",a:"숙소 복귀",icon:"🏠",type:"stay",
        notes:["도보 15~20분 / 택시 5분","편의점 들러 음료 구매","내일 07:30 하지메야 대비 일찍 취침"]}
    ]
  },
  {
    key:"d2", title:"다자이후 매화 + 짱구 + 야키니쿠", theme:"🌸 매화 → 명란우동 → 짱구 → 쇼와카페 → 고기",
    emoji:"🌸", color:"#C25B78", date:"Day 2 · 3/6(금)",
    budget:"아침 ¥1,000 · 교통 ¥1,800~ · 점심 ¥1,500 · 카페 ¥600 · 저녁 ¥4,400~6,000",
    items:[
      {t:"07:30",a:"탄야 우설 아침",icon:"🥩",type:"food",dur:"45분",
        spot:{name:"탄야 하카타",jp:"たんや HAKATA 博多1番街",pid:"ChIJBVmI6seRQTURy3iSW_Cdebc",lat:33.5904,lng:130.4200,
          r:4.2,rc:1624,price:"¥700~1,000",h:"07:00~22:00 (무휴)",tel:"092-415-1114"},
        menu:[{n:"🥇 우설 아침 정식",p:"¥700~",d:"우설5매+보리밥+스프+커피"},{n:"+명란 세트",p:"+¥180",d:"명란젓+토로로"},{n:"추천 조합",p:"약 ¥1,000"}],
        notes:["하카타역 B1F 직결","보리밥 리필+커피 무료","⚠️ 주말 9시 이후 대기 김"]},
      {t:"08:20",a:"하카타 → 다자이후",icon:"🚃",type:"move",dur:"45분",
        transport:[{n:"🥇 나나쿠마선+니시테츠",t:"35~45분",f:"¥580"},{n:"텐진경유",t:"~50분",f:"¥630"},{n:"직통버스 타비토",t:"33~40분",f:"¥610"}],
        notes:["📎 버스 탑승 상세: blog.naver.com/fls7488/224041240019"],
        ref:"https://m.blog.naver.com/fls7488/224041240019"},
      {t:"09:10",a:"산도 매화 & 먹거리",icon:"🌸",type:"spot",dur:"30분",
        spot:{name:"다자이후 참배길",jp:"太宰府天満宮 参道",lat:33.5200,lng:130.5325},
        menu:[{n:"우메가에모치",p:"¥130",d:"매화 찹쌀떡!"},{n:"쿠마켄고 스타벅스",d:"목조 포토스팟"},{n:"후쿠타로 멘베이",p:"¥500~",d:"기념품 #1"}],
        notes:["⚠️ 10시 이후 급격히 혼잡"]},
      {t:"09:40",a:"다자이후 텐만구 참배",icon:"⛩️",type:"spot",dur:"90분",
        spot:{name:"다자이후 텐만구",jp:"太宰府天満宮",pid:"ChIJzfvrKp-bQTURl65fp6vRJLg",lat:33.5214,lng:130.5348,
          r:4.4,rc:41559,h:"06:30~18:30",tel:"092-922-8225",price:"무료"},
        notes:["🌸 6,000그루 매화 만개!","도비우메(飛梅) 필수 포토","오미쿠지 한국어 버전 有"]},
      {t:"11:10",a:"우메가에모치 & 기념품",icon:"🍡",type:"food",dur:"30분",
        notes:["카사노야(かさの家) 인기","텐잔 딸기 대복 · 멘베이"]},
      {t:"11:40",a:"다자이후 → 하카타",icon:"🚃",type:"move",dur:"40분",sub:"전철 ¥580 · 버스 만석 주의"},
      {t:"12:20",a:"멘야이시이 명란 우동",icon:"🍜",type:"food",dur:"50분",
        spot:{name:"멘야 이시이",jp:"麺や いし井",pid:"ChIJk7WGznqRQTURZrOvQZADFKY",lat:33.5878,lng:130.4164,
          r:4.1,rc:438,h:"08:00~16:00",price:"¥1,000~2,000"},
        menu:[{n:"🥇 멘타이 카마타마 버터",p:"¥1,100~",d:"명란+계란+버터+시소"},{n:"→ 밥 투입 리조또",d:"꿀팁!"},{n:"와규 스키야키 우동",p:"¥1,500~"},{n:"카시와텐/에비텐",p:"¥300~"}],
        notes:["식권 자판기 · 숙소 도보 5분","⚠️ 주말 대기 30분+"]},
      {t:"13:10",a:"→ 쿠시다 신사",icon:"🚶",type:"move",sub:"도보 10분"},
      {t:"13:20",a:"쿠시다 신사",icon:"⛩️",type:"spot",dur:"30분",
        spot:{name:"쿠시다 신사",jp:"櫛田神社",pid:"ChIJV2pTquqRQTURpI1FhH5siaE",lat:33.5930,lng:130.4105,
          r:4.3,rc:13455,h:"09:00~17:00",tel:"092-291-2951",price:"무료"},
        notes:["757년 하카타 수호 신사","야마카사 가마 13m 전시","뒷문 → 카와바타 직결"]},
      {t:"13:50",a:"라쿠스이엔 말차 🍵",icon:"🍵",type:"food",dur:"30분",
        spot:{name:"라쿠스이엔",jp:"楽水園",pid:"ChIJ1SlL072RQTURRD306KuIuVE",lat:33.5869,lng:130.4135,
          r:4.0,rc:2047,h:"09:00~17:00",tel:"092-262-6665",price:"입장¥100 + 茶室¥1,100"},
        menu:[{n:"🍵 茶室의 한 잔",p:"¥1,100",d:"말차+오리지널 화과자·30분 체험"},{n:"정원 산책만",p:"¥100",d:"수금굴·폭포·잉어"},{n:"시간대",p:"",d:"10시/10:40/11:20/14시/14:40/15:20"}],
        notes:["메이지 시대 하카타 상인 별장터 일본정원","⚠️ 화요일 휴무 → 금요일 OK ✅","쿠시다 신사에서 도보 5분 · 캐널시티 바로 옆","2026년 리뉴얼 — 茶室 체험 ¥1,100 (예약 추천)","수금굴(水琴窟) 소리 힐링 · 하카타베이(博多塀)"]},
      {t:"14:20",a:"카와바타 상점가",icon:"🏘️",type:"spot",dur:"25분",
        spot:{name:"카와바타 상점가",jp:"川端商店街",pid:"ChIJiShWTeuRQTURqDhAzGV8sXw",lat:33.5935,lng:130.4083,r:4.0,rc:3788},
        notes:["130년 역사 아케이드","하카타 인형·야마카사 굿즈","남쪽 끝 = 캐널시티"]},
      {t:"14:45",a:"캐널시티 + OPA 짱구 🖍️",icon:"🛍️",type:"spot",dur:"90분",
        spot:{name:"캐널시티 하카타",jp:"キャナルシティ博多",pid:"ChIJYcOBiZWRQTUR0Rl0ehe67eA",lat:33.5896,lng:130.4109,
          r:4.2,rc:52567,h:"10:00~21:00",tel:"092-282-2525"},
        notes:["분수쇼 → OPA B1F 짱구 → 본관","🌊 분수쇼 30분마다","건담스토어·지브리스토어","라멘스타디움 5F"],
        opa:{name:"짱구 시네마퍼레이드",floor:"OPA B1F ラフェスタ",h:"10:00~21:00",
          desc:"2025.11 오픈! 규슈 최초. 영화 짱구 실물크기 피규어!",
          notes:["입장 무료 (굿즈 구매형)","¥3,500+ → 금색 핀즈 증정","타마유라 브라더스·짱구&브리프 피규어"],
          shops:["돈구리공화국(지브리)","점프숍","사쿠라마트(390엔)","캐릭터트래스테이션"]}},
      {t:"15:45",a:"→ 텐진",icon:"🚇",type:"move",sub:"지하철 1정거장 2분 ¥210"},
      {t:"16:00",a:"텐진 쇼핑",icon:"🛍️",type:"spot",dur:"60분",
        spot:{name:"텐진 지하상가",jp:"天神地下街",pid:"ChIJ970Xo46RQTURm6GUmUJcn6Y",lat:33.5900,lng:130.3995,
          r:4.1,rc:6792,h:"10:00~20:00",tel:"092-711-1903"},
        notes:["150m+ 지하몰","다이마루 디파치카 추천","드럭스토어 몰아서 쇼핑"]},
      {t:"17:00",a:"→ 하카타역",icon:"🚇",type:"move",sub:"쿠코선 5분 ¥260"},
      {t:"17:15",a:"5YEN 쇼와 카페",icon:"☕",type:"food",dur:"40분",
        spot:{name:"5YEN",jp:"喫茶五圓",pid:"ChIJc-7eQL-RQTURBcOm7ao8ILU",lat:33.5903,lng:130.4150,
          r:3.8,rc:312,h:"월~토 08:00~21:30",tel:"092-473-9430"},
        menu:[{n:"핸드드립",p:"¥500~600"},{n:"비프카레",p:"¥900 (커피포함)"},{n:"아이스커피",p:"¥500~600"}],
        notes:["⚠️ 일요·공휴일 휴무!","1979년 개업 · 비틀즈 BGM","현금 추천"]},
      {t:"18:00",a:"야키니쿠 🥩",icon:"🥩",type:"food",dur:"90분",
        candidates:[
          {name:"🔥 하나비 2호점",jp:"焼肉花火 2号店",pid:"ChIJI9va-YaRQTUR6tY6vRHVVAo",lat:33.5893,lng:130.4044,
            r:4.9,rc:171,price:"¥3,000~5,000",style:"한국식 야키니쿠",
            h:"16:30~22:30",tel:"092-753-5877",
            menu:["세트C(모듬) 추천","상로스 극강","냉면 마무리"],
            notes:["★4.9 압도적 평점!","한국어 가능 사장님","연중무휴","태블릿 주문"]},
          {name:"바쿠로",jp:"やきにくのバクロ",pid:"ChIJ_88FQb6RQTURqwmM_4dg7AI",lat:33.5892,lng:130.4122,
            r:4.4,rc:1045,price:"¥5,000~6,000",style:"단품 프리미엄",
            h:"17:00~22:00",tel:"092-710-7029",
            menu:["특선모듬 ¥4,800","프리미엄 500g ¥5,800","사과+A5 시그니처"],
            notes:["드라이에이징 와규","혼자→특선모듬","⭐ 예약 필수"]},
          {name:"재팬비프센터",jp:"ジャパンビーフセンター",lat:33.5980,lng:130.4103,
            r:4.2,rc:403,price:"¥4,378~4,928",style:"흑모화우 무제한 90분",
            h:"17:00~21:15",tel:"092-262-3489",
            menu:["스탠다드 ¥4,378","프리미엄 +¥550","야키스키(달걀) 인기"],
            notes:["가고시마 흑모화우 100%","무제한 퀄리티 놀라움","⭐ 예약 필수"]}],
        notes:["두 곳 다 예약 필수!"]}
    ]
  },
  {
    key:"d3", title:"히타 마메다거리 + 매화 & 히나인형", theme:"에도시대 거리 · 사케 · 장어 · 🌸매화 · 🎎히나인형 축제",
    emoji:"🏯", color:"#5E8B4E", date:"Day 3 · 3/7(토)",
    budget:"교통 ¥3,200(왕복권) · 식비 ¥3,000~5,000 · 히나관람 ¥500~1,000 · 간식 ¥1,000~ · 저녁(로바타) ¥3,000~5,000",
    items:[
      {t:"07:30",a:"하지메야 계란 산도",icon:"🥪",type:"food",dur:"20분",
        spot:{name:"하지메야 하카타로",jp:"初屋はかたろう 一品通り店",pid:"ChIJmwjO8uiRQTUR9tOpjwhQoUA",lat:33.5900,lng:130.4210,
          r:4.4,rc:74,h:"07:00~21:00 (무휴)",tel:"092-710-6303"},
        menu:[{n:"계란말이",p:"¥300~",d:"시그니처 테이크아웃"},{n:"계란 산도",p:"¥400~",d:"버스에서 먹기 좋음"}],
        notes:["하카타역 筑紫口 잇핀도리 내"]},
      {t:"07:55",a:"하카타 버스터미널",icon:"🚌",type:"move",
        spot:{name:"하카타 BT",jp:"博多バスターミナル",pid:"ChIJabfbu8eRQTURVSgaSgJdHZE",lat:33.5915,lng:130.4198,tel:"0120-489-939"},
        sub:"3F 'ひた号' · 편도 ¥1,860 / 왕복 ¥3,200",
        notes:["⚠️ 반드시 왕복권 구매! (편도×2=¥3,720 → 왕복=¥3,200, ¥520 절약)","📎 버스 탑승 상세: blog.naver.com/punytraveler/224150604494"],
        ref:"https://m.blog.naver.com/punytraveler/224150604494"},
      {t:"08:10",a:"고속버스 이동 (차 안에서 아침)",icon:"🚌",type:"move",dur:"95분"},
      {t:"09:50",a:"히타 BT 도착",icon:"📍",type:"move",
        spot:{name:"히타 버스터미널",jp:"日田バスターミナル",lat:33.3163,lng:130.9379},
        notes:["마메다거리까지 도보 15분","코인로커 있음"]},
      {t:"10:05",a:"마메다거리 산책",icon:"🏘️",type:"spot",dur:"40분",
        spot:{name:"마메다마치 상점가",jp:"豆田町商店街",pid:"ChIJUQpcrCFqQTURPnefu52aTYk",lat:33.3266,lng:130.9364,
          r:4.1,rc:1652,h:"09:00~17:00",tel:"0973-22-2036"},
        notes:["에도시대 상인 마을 보존 지구","'발견 안 된 교토' 분위기","3월 = 오히나마쓰리 기간! 곳곳에 히나인형 장식","사진 스팟 많음 — 골목 탐색!"]},
      {t:"10:45",a:"쿤초 양조장 시음",icon:"🍶",type:"spot",dur:"40분",
        spot:{name:"쿤초 양조장",jp:"薫長酒造",pid:"ChIJTwPIdSBqQTURcj21EwPdOQE",lat:33.3289,lng:130.9374,
          r:4.2,rc:1051,h:"09:00~16:30 (무휴)",tel:"0973-22-3121"},
        menu:[{n:"무료 사케 시음",p:"무료"},{n:"쿤초 소프트크림",p:"¥350",d:"사케 풍미!"}],
        notes:["기념품 소량 사케 추천"]},
      {t:"11:10",a:"아카시 히타 양갱 🍮",icon:"🍮",type:"food",dur:"15분",
        spot:{name:"아카시 히타 양갱 본점",jp:"赤司日田羊羹本舗",pid:"ChIJnWuzWSBqQTUR6xKpiLl3evs",lat:33.3276,lng:130.9361,
          r:4.4,rc:251,h:"09:00~16:00",tel:"0973-22-2240",price:"¥950~1,300"},
        menu:[{n:"🥇 유자 양갱",p:"¥1,150",d:"흰팥+히타산 유자! 11~3월 계절한정 ⭐"},{n:"백설 대납언",p:"¥1,150",d:"흰팥(白手亡)+대납언 팥 조합"},{n:"팥 코시 (원조)",p:"¥950",d:"1891년 원조 레시피. 시간 지나면 표면 결정화!"},{n:"소금 양갱",p:"¥1,050",d:"야마구치산 자연해염"},{n:"밤 양갱",p:"¥1,300",d:"가장 고급 라인"}],
        notes:["⭐ 1891년 창업 — 히타 대표 기념품 No.1","유자양갱은 3월까지만! 지금 가야 살 수 있음","매장 시식 가능 — 전 맛 다 맛보기","⚠️ 수요일 휴무 · 인기상품 오전 품절 주의","일본 전통 나무상자 포장 — 선물용 최고"]},
      {t:"11:25",a:"간장 아이스크림 & 히나고텐",icon:"🍦",type:"food",dur:"25분",
        spot:{name:"히타 간장 히나고텐",jp:"日田醤油 ひな御殿",pid:"ChIJ___DYSBqQTUR3bcd8TQyboY",lat:33.3283,lng:130.9359,
          r:4.5,rc:563,h:"09:30~16:30",tel:"080-4275-0898",price:"간장IC ¥350 / 입장 ¥300"},
        menu:[{n:"간장 아이스크림",p:"¥350",d:"달콤+짭조름! 리뷰에서 두번째 사러 갈 정도"},{n:"간장/된장 시식",p:"무료",d:"유자간장·사시미용·소바용 등 비교"},{n:"🎎 히나인형 박물관",p:"¥300",d:"일본 최대급 단 장식 상설 전시!"}],
        notes:["⭐ 간장아이스+히나인형 한 곳에서 해결!","마메다마치 한복판 위치 — 동선 최적","135년 전통 간장양조장 직영","영어 가능 스태프"]},
      {t:"11:50",a:"히타 마부시 센야 (장어)",icon:"🍱",type:"food",dur:"70분",
        spot:{name:"히타 마부시 센야",jp:"日田まぶし千屋",pid:"ChIJSbQsOSBqQTURMzhaXdiBprw",lat:33.3273,lng:130.9373,
          r:4.4,rc:2489,h:"평일11:00~16:00/주말~17:00",tel:"0973-22-3130",price:"¥2,500~4,000"},
        menu:[{n:"🥇 히타 마부시",p:"¥2,800~",d:"3가지 먹는법!"},{n:"① 그대로",d:"숯불향+히타산 쌀"},{n:"② 약미 추가",d:"파·와사비·김"},{n:"③ 다시 부어서",d:"오차즈케 마무리"}],
        notes:["⚠️ 평일 16시 마감!","11~12시 입장 강력 추천"]},
      {t:"13:00",a:"🌸🎎 매화 & 히나인형 산책",icon:"🎎",type:"spot",dur:"90분",
        spot:{name:"천령 히타 오히나마쓰리",jp:"天領日田おひなまつり",pid:"ChIJUQpcrCFqQTURPnefu52aTYk",lat:33.3266,lng:130.9364,
          h:"2/15~3/31 · 시설별 10:00~16:00",tel:"0973-22-2036",price:"시설별 ¥200~500"},
        menu:[{n:"🎎 쿠사노혼케 (草野本家)",p:"¥500",d:"국가중요문화재! 교호~메이지 178체 히나인형. 가장 화려!"},{n:"🎎 니혼간칸 (日本丸館)",p:"¥300",d:"2/15~3/31 특별 전시. 3층 건물 전체 히나인형"},{n:"🌸 거리 곳곳 매화",p:"무료",d:"마메다마치 가로수·정원의 홍매·백매 감상"},{n:"🏺 소가타야키 도자기 숍",p:"",d:"히타 전통공예 도자기. 기념품 추천"},{n:"☕ 마메다 롤 스이",p:"¥400~",d:"롤케이크·두유 푸딩 ★4.5"}],
        notes:["⭐ 3월 방문 = 오히나마쓰리 한창! 마메다마치 전체가 축제 분위기","에도시대 천령(幕府직할지) 히타의 호상들이 교토에서 구입한 명품 히나인형","오키아게히나 = 종이+천으로 만든 서민 인형, 히타 특유","거리 곳곳 상점 앞에도 히나인형 장식 — 산책만으로도 즐김","매화나무도 거리 곳곳에! 3월 초 홍매·백매 개화","공예품·기념품 쇼핑 + 히타 기지(나막신) 전문점"]},
      {t:"14:30",a:"→ 히타 BT",icon:"🚶",type:"move",sub:"도보 15분"},
      {t:"15:30",a:"히타 → 텐진 복귀",icon:"🚌",type:"move",dur:"85분",
        notes:["¥1,860 · 텐진BT 도착 약 17:00","텐진BT → 로바타 산코바시 도보 7분","시간표 재확인 hitabus.com"]},
      {t:"17:15",a:"로바타 산코바시 🍶🔥",icon:"🍶",type:"food",dur:"120분",
        spot:{name:"로바타 산코바시",jp:"炉端 三小橋",pid:"ChIJy9pSIpGRQTURYJ-hXl7dh2s",lat:33.5888,lng:130.4047,
          r:4.5,rc:640,h:"17:00~24:30",tel:"092-712-7373",price:"¥3,000~5,000/인"},
        sub:"💡 히타버스 텐진BT 하차 → 도보 7분! (하카타역에서 가면 19분)",
        menu:[{n:"🥇 가리비 숯불구이",p:"",d:"시그니처! 구운 후 육수로 치즈 리조또 ¥300"},{n:"사시미 모듬",p:"",d:"현해탄 직송 신선 회"},{n:"숯불 꼬치 세트",p:"",d:"카운터에서 눈앞 라이브 그릴"},{n:"사케·하이볼",p:"",d:"스태프 추천 사케 페어링"}],
        notes:["⚠️ 예약 필수!! 인기점 — 워크인 힘듦","카운터 석에서 눈앞 숯불 구이 라이브감","한국어 메뉴 있음","일요일도 영업 (연중무휴)"]},
      {t:"19:15",a:"숙소 복귀 or 2차",icon:"🏠",type:"stay",
        notes:["하루요시→숙소 택시 10분","나카스 야타이 2차도 가능"]}
    ]
  },
  {
    key:"d4", title:"사바타로 조식 & 오호리 & 귀국", theme:"🐟 고마사바 아침 → 안개정원 → 공항",
    emoji:"🐟", color:"#C8874A", date:"Day 4 · 3/8(일)",
    budget:"아침(사바타로) ¥2,450~3,200 · 불랑제 ¥500~ · 교통 ¥520 · 점심 ¥1,000~",
    items:[
      {t:"07:00",a:"기상 + 체크아웃 준비",icon:"🏠",type:"stay",dur:"30분"},
      {t:"07:30",a:"사바타로 아침 🐟",icon:"🐟",type:"food",dur:"60분",
        spot:{name:"사바타로",jp:"さばたろう",pid:"ChIJKaOQfZmRQTURC2cXhzokVJA",lat:33.5864,lng:130.3906,
          r:4.5,rc:520,h:"07:30/08:30/09:30 일제 시작",tel:"092-406-4388",price:"¥2,450~3,245"},
        sub:"숙소→아카사카 지하철 쿠코선 2정거장 ¥260",
        menu:[{n:"🥇 사바타로 조식 세트",p:"¥2,450~",d:"토가마 밥+숯불 소금구이 고등어+중박스 반찬"},{n:"+활 고마사바",p:"¥700",d:"생고등어 깨소스! 꼭 추가 ⭐"},{n:"자가제 명란+치리멘 다카나",p:"",d:"후쿠오카산 반찬 보물상자"},{n:"3잔째 오코게 오차즈케",p:"",d:"누룽지+호지차 마무리 필수!"}],
        notes:["⚠️ 완전 예약제! TableCheck으로 2개월 전부터","⚠️ 화요일 휴무","시간별 일제 시작 — 늦으면 입장 불가","한국 관광객 인기 폭발 — 일찍 예약","아카사카→오호리공원 도보 10분 동선 최적"]},
      {t:"08:45",a:"아카사카 → 오호리 공원",icon:"🚶",type:"move",sub:"도보 10분"},
      {t:"09:00",a:"오호리 공원 + 일본정원 🌿",icon:"🌿",type:"spot",dur:"100분",
        spot:{name:"오호리 공원",jp:"大濠公園",pid:"ChIJx6TbjMyTQTURmPdN7915780",lat:33.5862,lng:130.3765,
          r:4.5,rc:14230,h:"24시간",tel:"092-741-2004",price:"무료"},
        sub:"사바타로(아카사카)에서 도보 10분",
        notes:["호수 2km — 후쿠오카 센트럴파크","우키미도 정자 포토스팟","스완보트 ¥1,200/30분"],
        garden:{name:"오호리 일본정원",jp:"大濠公園日本庭園",pid:"ChIJAQBwwc2TQTURjx-IPrl8IzM",
          lat:33.5826,lng:130.3788,r:4.5,rc:1135,h:"09:00~17:00 (입장16:45)",tel:"092-741-8377",price:"¥250",
          closed:"월요일 휴무",
          highlights:["🌫️ 10분마다 미스트(안개) 분사! 정원 전체가 몽환적","12,000㎡ 회유식 정원 — 대지·축산·가레산스이·다실","삼단폭포(三段落ちの滝) 포토스팟","65세 이상 무료 · ¥250 초저렴"]}},
      {t:"10:40",a:"점심 & 하카타역 복귀",icon:"🍜",type:"food",
        notes:["오호리코엔역→하카타 7분 ¥260","라멘/우동 + 기념품 마무리"]},
      {t:"12:30",a:"BOUL'ANGE 크로와상 아이스 🥐",icon:"🥐",type:"food",dur:"15분",
        candidates:[
          {name:"BOUL'ANGE 하카타역점",jp:"ブーランジェ 博多駅前店",pid:"ChIJu_ygu2uRQTURYO_jiqOjjr4",lat:33.5926,lng:130.4157,
            r:4.5,rc:986,h:"일 08:00~20:00",tel:"092-432-1580",price:"¥500~800",
            why:"하카타역 도보 1분 — 짐 찾기 전 간식 동선 최적"},
          {name:"BOUL'ANGE 텐진 지하상가점",jp:"ブーランジェ 天神地下街店",pid:"ChIJxTvuaKyRQTURoqbdwx2EqYk",lat:33.5879,lng:130.4013,
            r:4.2,rc:170,h:"일 08:30~20:00",tel:"080-3024-9952",price:"¥500~800",
            why:"텐진역 지하상가 내 — 오호리에서 복귀 시 경유 가능"}
        ],
        sub:"하카타역점 or 텐진점 — 동선에 맞춰 선택!",
        menu:[{n:"🥇 크로와상 소프트 아이스",p:"¥480~",d:"바삭 크로와상 콘 + 밀키 소프트크림 — 필수!"},{n:"멘타이코 바게트",p:"¥350~",d:"후쿠오카 한정 명란 빵"},{n:"쿠인아만",p:"¥300~",d:"버터 캬라멜 바삭바삭"}],
        notes:["테이크아웃 전용 — 좌석 없음","크로와상 아이스 = 달지 않은 밀키 타입 🍦","두 지점 메뉴 동일"]},
      {t:"13:00",a:"짐 회수",icon:"🧳",type:"stay"},
      {t:"14:35",a:"하카타 → 공항 국제선",icon:"✈️",type:"move",dur:"25분",
        spot:{name:"후쿠오카 공항 국제선",jp:"福岡空港 国際線",pid:"ChIJrQFpQhaQQTURtx9OWEZ_5hY",lat:33.585,lng:130.449},
        transport:[{n:"🥇 지하철+셔틀",t:"25~30분",f:"¥260",d:"지하철→국내선→셔틀→국제선"},{n:"직행버스",t:"15~20분",f:"¥270"},{n:"택시",t:"~15분",f:"¥1,500~"}],
        notes:["⚠️ 지하철=국내선 직결, 국제선은 셔틀!","셔틀 5~8분 간격"]},
      {t:"15:00",a:"체크인 & 출국",icon:"✈️",type:"move",notes:["면세점: 카스텔라·명란 마지막 쇼핑"]},
      {t:"17:00",a:"후쿠오카 출발 ✈️",icon:"✈️",type:"move"}
    ]
  },
  {
    key:"extra", title:"시간되면 가고 싶은 곳", theme:"🍸 스탠드 바 · 여유 있을 때 들르기",
    emoji:"🍸", color:"#7B68AE", date:"기타",
    budget:"1인 ¥1,500~3,000",
    items:[
      {t:"",a:"stand GRETEL 🍷",icon:"🍷",type:"food",
        spot:{name:"스탠드 그레텔",jp:"stand GRETEL",pid:"ChIJ8UdUNmORQTURFkBFlhIpPvg",lat:33.5884,lng:130.4044,
          r:4.4,rc:56,h:"17:00~25:00 (화 ~24:00)",tel:"092-401-4567",price:"¥253~352/접시"},
        menu:[{n:"바스크 프로슈토",p:"¥253",d:"가성비 최고!"},{n:"숯불 와규 하트",p:"¥352",d:""},{n:"오일 절임 굴구이",p:"¥352",d:""},{n:"도미 간 사시미",p:"",d:"숨은 시그니처"},{n:"티 칵테일",p:"",d:"차 베이스 사워 독특!"}],
        notes:["인기 이자카야 '카도노 우구이스' 분점","와타나베도오리 · 로바타 산코바시 근처!","스탠딩바 — 혼술·0차·2차 최적","셀프 와인 코인 시스템","소량 접시 — 가볍게 안주+술"]},
      {t:"",a:"NEO MEGUSTA 🍶",icon:"🍶",type:"food",
        candidates:[
          {name:"이마이즈미점",jp:"NEO MEGUSTA IMAIZUMI",pid:"ChIJ-V8CXwCRQTURJMQ5l0q7NXY",lat:33.5866,lng:130.3991,
            r:4.6,rc:105,price:"",style:"일본술+오뎅 전문",
            h:"평일15:00~ / 주말12:00~ ~25:00",tel:"050-1022-4138",
            menu:["일본술 비교 세트 필수!","크리에이티브 오뎅 시그니처","심플 안주 — 술 페어링 완벽"],
            notes:["케고신사 교차로 뒤편","사케 입문자 추천","한국인 리뷰 多 — 2일 연속 방문 후기도"]},
          {name:"아카사카 본점",jp:"NeoMegusta fukuoka standing bar",pid:"ChIJVVVZ1ymSQTURqfTFVAPBWBc",lat:33.5888,lng:130.3902,
            r:4.2,rc:333,price:"",style:"낮술 가능 스탠딩바",
            h:"13:00~24:30 (매일)",tel:"092-406-9853",
            menu:["사케·맥주·하이볼","안주 소접시"],
            notes:["아카사카역 앞 — Day4 사바타로 근처!","13시부터 오픈 — 낮술 OK","영어 메뉴 · 금연","독특한 결제: 역 이름 배정 시스템"]}],
        notes:["일본술 전문 스탠딩바 — 후쿠오카 스탠딩바 문화 체험!","0차/2차 가볍게 한잔하기 최적"]},
      {t:"",a:"카루비테이 야키니쿠 🥩",icon:"🥩",type:"food",
        spot:{name:"카루비테이",jp:"カルビ亭福岡 黒毛和牛専門店",pid:"ChIJERfXCJuRQTURzO6x-HJOFxQ",lat:33.5837,lng:130.4030,
          r:4.9,rc:317,h:"17:00~21:00",tel:"",price:"¥3,000~5,000"},
        menu:[{n:"흑모화우 모듬",p:"",d:"가고시마산 와규 · 냉동 NO 생고기!"},{n:"부위별 단품",p:"",d:"부부가 직접 커팅"}],
        notes:["⭐ ★4.9 — 후쿠오카 야키니쿠 최고 평점급","부부 운영 소규모 — 예약 필수!","⚠️ 월요일 휴무","와타나베도오리 · 로바타/그레텔 근처"]},
      {t:"",a:"바카토아호 (돈설 야키니쿠) 🐷",icon:"🐷",type:"food",
        candidates:[
          {name:"하루요시점",jp:"バカとアホ 春吉",pid:"ChIJ9VGlpZeRQTURlTFdvaNz5cs",lat:33.5861,lng:130.4087,
            r:4.4,rc:226,price:"¥2,000~4,000",style:"심야 야키니쿠",
            h:"18:00~25:00 (화~토 ~27:00)",tel:"092-715-2917",
            menu:["돼지 혀(돈설)+파 필수!","숯불 와규 가성비◎","하이볼 라지 추천"],
            notes:["로바타/그레텔 동네 — 2차 최적","심야 3시까지! 늦은 술자리 OK"]},
          {name:"에키미나미점",jp:"バカとアホ 駅南店",pid:"ChIJ5Z_YL7GRQTURWnoYIxE4aOM",lat:33.5826,lng:130.4242,
            r:4.3,rc:308,price:"¥2,000~4,000",style:"하카타역 근처",
            h:"18:00~25:00 (금토 ~26:00)",tel:"092-476-5666",
            menu:["돼지 혀(돈설)+파 시그니처!","숯불 와규","테라스석 야외 그릴"],
            notes:["하카타역 남쪽 도보 5분","테라스 야외석 분위기 좋음","돈설 리뷰 가장 많은 지점"]},
          {name:"스미요시 본점",jp:"七輪焼肉 バカとアホ 住吉本店",pid:"ChIJS3GghLuRQTURDs-J8l16KLE",lat:33.5840,lng:130.4165,
            r:4.3,rc:322,price:"¥2,000~4,000",style:"원조 본점",
            h:"17:00~24:00 (금토 ~25:00)",tel:"092-471-0600",
            menu:["숯불 시치린 야키니쿠","A5 와규 가성비 최강","각종 부위 단품"],
            notes:["원조 본점 — 리모델링 완료","예약 필수 · 평일도 만석","Baca=소, Ajo=마늘 (스페인어)"]}],
        notes:["돈설(돼지혀)+파 조합이 시그니처!","3개 지점 모두 숯불(시치린) · 가성비 와규","연중무휴 — 요일 걱정 없음"]}
    ]
  }
];

const TC={move:{bg:"#eef2ff",bd:"#a8b8e8",tx:"#4a5e94"},food:{bg:"#fff7ee",bd:"#f0c890",tx:"#a06800"},spot:{bg:"#eefff3",bd:"#90d8a8",tx:"#1a7a3a"},stay:{bg:"#f5eeff",bd:"#c4a8e8",tx:"#6b3fa0"},free:{bg:"#fffde8",bd:"#e8d870",tx:"#7a6e00"}};

const gmapUrl=(spot)=>{
  const name=encodeURIComponent(spot.jp||spot.name);
  if(spot.lat) return `https://www.google.com/maps/search/${name}/@${spot.lat},${spot.lng},17z`;
  return null;
};

function SpotBadge({spot,color}){
  if(!spot) return null;
  const url=spot.lat||spot.pid?gmapUrl(spot):null;
  return(
    <div style={{marginTop:"4px",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px",fontSize:"10.5px"}}>
      <span style={{color:"#555",fontStyle:"italic"}}>{spot.jp||spot.name}</span>
      {spot.r&&<span style={{color:"#d4a017",fontWeight:600}}>★{spot.r}<span style={{color:"#bbb",fontWeight:400}}>({spot.rc?.toLocaleString()})</span></span>}
      {spot.price&&<span style={{color,fontWeight:600}}>{spot.price}</span>}
      {url&&<a href={url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
        style={{display:"inline-flex",alignItems:"center",gap:"2px",background:"#4285f4",color:"#fff",
          padding:"1px 6px",borderRadius:"4px",fontSize:"9.5px",fontWeight:600,textDecoration:"none"}}>
        📍지도
      </a>}
    </div>
  );
}

function Item({item,dc,isLast}){
  const[open,setOpen]=useState(false);
  const c=TC[item.type]||TC.free;
  const has=item.notes||item.menu||item.candidates||item.transport||item.opa||item.sub;
  return(
    <div style={{display:"flex",gap:"10px"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"32px",flexShrink:0}}>
        <div style={{width:"30px",height:"30px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",background:c.bg,border:`2px solid ${c.bd}`,zIndex:1}}>{item.icon}</div>
        {!isLast&&<div style={{width:"2px",flex:1,background:`${dc}18`,minHeight:"14px"}}/>}
      </div>
      <div onClick={()=>has&&setOpen(!open)} style={{flex:1,marginBottom:isLast?0:"2px",padding:"11px 13px",borderRadius:"12px",background:"#fff",cursor:has?"pointer":"default",border:`1.5px solid ${open?c.bd:"#eeece8"}`,transition:"all 0.15s",boxShadow:open?`0 3px 12px ${dc}10`:"0 1px 2px rgba(0,0,0,0.03)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"6px"}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"}}>
              <span style={{fontSize:"11px",color:"#777",fontFamily:"'SF Mono',monospace",fontWeight:700,letterSpacing:"0.3px"}}>{item.t}</span>
              {item.dur&&<span style={{fontSize:"9.5px",background:`${dc}10`,color:dc,padding:"1px 6px",borderRadius:"4px",fontWeight:600}}>{item.dur}</span>}
            </div>
            <div style={{fontSize:"14px",fontWeight:700,color:"#1a1a1a",marginTop:"2px",lineHeight:1.35}}>{item.a}</div>
            <SpotBadge spot={item.spot} color={c.tx}/>
            {item.sub&&!open&&<div style={{fontSize:"10.5px",color:"#999",marginTop:"3px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.sub}</div>}
          </div>
          {has&&<div style={{fontSize:"10px",color:"#ccc",transform:open?"rotate(180deg)":"",transition:"transform 0.15s",marginTop:"6px",flexShrink:0}}>▼</div>}
        </div>
        {open&&<div style={{marginTop:"10px",paddingTop:"10px",borderTop:`1px solid ${c.bd}30`,fontSize:"11.5px"}}>
          {item.sub&&<div style={{color:c.tx,marginBottom:"6px",fontWeight:600,fontSize:"11px"}}>🚏 {item.sub}</div>}
          {item.spot&&(item.spot.h||item.spot.tel)&&<div style={{color:"#777",marginBottom:"5px",fontSize:"10.5px",display:"flex",flexWrap:"wrap",gap:"8px"}}>
            {item.spot.h&&<span>🕐 {item.spot.h}</span>}
            {item.spot.tel&&<a href={`tel:${item.spot.tel}`} onClick={e=>e.stopPropagation()} style={{color:"#4285f4",textDecoration:"none",fontWeight:600}}>📞 {item.spot.tel}</a>}
          </div>}
          {item.transport&&<div style={{marginBottom:"6px"}}>
            {item.transport.map((tr,i)=><div key={i} style={{fontSize:"10.5px",color:"#444",padding:"5px 8px",marginBottom:"3px",borderRadius:"6px",background:"#f5f5ff",border:"1px solid #e0e0f8"}}>
              <b>{tr.n}</b> · {tr.t} · <span style={{color:c.tx,fontWeight:600}}>{tr.f}</span>{tr.d?<span style={{color:"#888"}}> — {tr.d}</span>:''}
            </div>)}
          </div>}
          {item.menu&&<div style={{marginBottom:"6px"}}>
            <div style={{fontSize:"9.5px",fontWeight:700,color:"#bbb",marginBottom:"3px",letterSpacing:"0.5px"}}>MENU</div>
            {item.menu.map((m,i)=><div key={i} style={{color:"#444",marginBottom:"4px",paddingLeft:"10px",position:"relative",lineHeight:1.4}}>
              <span style={{position:"absolute",left:0,color:dc,fontWeight:700}}>·</span>
              <b>{m.n}</b>{m.p&&<span style={{color:c.tx,marginLeft:"4px",fontWeight:600}}>{m.p}</span>}
              {m.d&&<div style={{fontSize:"10.5px",color:"#888"}}>{m.d}</div>}
            </div>)}
          </div>}
          {item.opa&&<div style={{marginTop:"6px",padding:"10px",borderRadius:"10px",background:"linear-gradient(135deg,#fffbe6,#fff5cc)",border:"1px solid #ffe58a"}}>
            <div style={{fontSize:"13px",fontWeight:800,color:"#b36b00"}}>🖍️ {item.opa.name}</div>
            <div style={{fontSize:"10px",color:"#8a6914",marginTop:"1px"}}>{item.opa.floor} · {item.opa.h}</div>
            <div style={{fontSize:"11px",color:"#555",marginTop:"4px",lineHeight:1.4}}>{item.opa.desc}</div>
            {item.opa.notes?.map((n,i)=><div key={i} style={{fontSize:"10.5px",color:"#8a6914",marginTop:"2px"}}>· {n}</div>)}
            <div style={{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"}}>
              {item.opa.shops.map((s,i)=><span key={i} style={{fontSize:"9.5px",background:"#fff3cc",padding:"2px 6px",borderRadius:"4px",color:"#8a6914",fontWeight:500}}>{s}</span>)}
            </div>
          </div>}
          {item.candidates&&<div style={{marginTop:"4px"}}>
            <div style={{fontSize:"9.5px",fontWeight:700,color:"#bbb",marginBottom:"5px"}}>후보 비교</div>
            {item.candidates.map((cd,i)=>{
              const mUrl=cd.lat||cd.pid?gmapUrl(cd):"";
              return(<div key={i} style={{padding:"10px",marginBottom:"6px",borderRadius:"10px",background:i===0?"#fff5f5":"#f3f3ff",border:`1.5px solid ${i===0?"#f0c0c0":"#c0c0f0"}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:"13px",fontWeight:700}}>{cd.name}</span>
                  <span style={{fontSize:"10.5px",color:"#d4a017",fontWeight:600}}>★{cd.r} ({cd.rc})</span>
                </div>
                <div style={{fontSize:"10.5px",color:"#666",marginTop:"1px"}}>{cd.style} · <b>{cd.price}</b> · {cd.h}</div>
                {cd.menu?.map((m,j)=><div key={j} style={{fontSize:"11px",color:"#444",marginTop:"2px",paddingLeft:"8px"}}>· {m}</div>)}
                {cd.notes?.map((n,j)=><div key={j} style={{fontSize:"10px",color:"#888",marginTop:"1px",paddingLeft:"8px"}}>{n}</div>)}
                <div style={{marginTop:"5px",display:"flex",gap:"8px",alignItems:"center",fontSize:"10.5px"}}>
                  <a href={`tel:${cd.tel}`} onClick={e=>e.stopPropagation()} style={{color:"#4285f4",textDecoration:"none",fontWeight:600}}>📞 {cd.tel}</a>
                  {mUrl&&<a href={mUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                    style={{background:"#4285f4",color:"#fff",padding:"2px 8px",borderRadius:"4px",textDecoration:"none",fontWeight:600,fontSize:"10px"}}>📍지도</a>}
                </div>
              </div>);
            })}
          </div>}
          {item.notes&&<div>{item.notes.map((n,i)=><div key={i} style={{color:"#555",marginBottom:"3px",paddingLeft:"10px",position:"relative",lineHeight:1.45}}>
            <span style={{position:"absolute",left:0,color:dc,fontWeight:700}}>·</span>{n}
          </div>)}</div>}
          {item.garden&&(()=>{const g=item.garden;const gUrl=gmapUrl(g);return(
            <div style={{marginTop:"8px",padding:"10px",borderRadius:"10px",background:"#f0f7ff",border:"1.5px solid #b8d4f0"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
                <span style={{fontSize:"12.5px",fontWeight:700,color:"#1a5276"}}>🌫️ {g.name}</span>
                <span style={{fontSize:"10px",color:"#d4a017",fontWeight:600}}>★{g.r} ({g.rc})</span>
              </div>
              <div style={{fontSize:"10px",color:"#555",marginBottom:"2px"}}>{g.jp} · <b>{g.price}</b> · {g.h}</div>
              {g.closed&&<div style={{fontSize:"10px",color:"#c0392b",fontWeight:600}}>⚠️ {g.closed}</div>}
              {g.highlights?.map((h,i)=><div key={i} style={{fontSize:"11px",color:"#444",marginTop:"3px",paddingLeft:"10px",position:"relative",lineHeight:1.4}}>
                <span style={{position:"absolute",left:0,color:"#3498db",fontWeight:700}}>·</span>{h}
              </div>)}
              <div style={{marginTop:"6px",display:"flex",gap:"8px",alignItems:"center",fontSize:"10.5px"}}>
                {g.tel&&<a href={`tel:${g.tel}`} onClick={e=>e.stopPropagation()} style={{color:"#4285f4",textDecoration:"none",fontWeight:600}}>📞 {g.tel}</a>}
                {gUrl&&<a href={gUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                  style={{background:"#4285f4",color:"#fff",padding:"2px 8px",borderRadius:"4px",textDecoration:"none",fontWeight:600,fontSize:"10px"}}>📍지도</a>}
              </div>
            </div>);})()}
          {item.ref&&<a href={item.ref} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
            style={{display:"inline-flex",alignItems:"center",gap:"4px",marginTop:"6px",padding:"5px 10px",borderRadius:"6px",background:"#e8f5e9",border:"1px solid #a5d6a7",color:"#2e7d32",fontSize:"10.5px",fontWeight:600,textDecoration:"none"}}>📎 참고 블로그 보기</a>}
        </div>}
      </div>
    </div>
  );
}

function Day({day,active,toggle}){
  return(
    <div style={{marginBottom:"14px"}}>
      <div onClick={toggle} style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",borderRadius:active?"14px 14px 0 0":"14px",cursor:"pointer",background:active?`linear-gradient(135deg,${day.color},${day.color}dd)`:"#fff",color:active?"#fff":"#333",border:`2px solid ${day.color}`,transition:"all 0.2s",boxShadow:active?`0 4px 16px ${day.color}25`:"0 1px 3px rgba(0,0,0,0.04)"}}>
        <span style={{fontSize:"24px"}}>{day.emoji}</span>
        <div style={{flex:1}}>
          <div style={{fontSize:"11px",fontWeight:700,opacity:0.75,letterSpacing:"1px"}}>{day.date}</div>
          <div style={{fontSize:"15px",fontWeight:800}}>{day.title}</div>
        </div>
        <div style={{fontSize:"12px",transform:active?"rotate(180deg)":"",transition:"transform 0.2s",opacity:0.5}}>▼</div>
      </div>
      {active&&<div style={{padding:"14px",background:"#faf9f7",borderRadius:"0 0 14px 14px",border:`2px solid ${day.color}`,borderTop:"none"}}>
        <div style={{fontSize:"11px",color:"#888",marginBottom:"6px",fontStyle:"italic"}}>{day.theme}</div>
        <div style={{fontSize:"10.5px",color:day.color,marginBottom:"12px",padding:"5px 10px",background:`${day.color}08`,borderRadius:"8px",border:`1px solid ${day.color}15`,fontWeight:500}}>💰 {day.budget}</div>
        {day.items.map((item,i)=><Item key={i} item={item} dc={day.color} isLast={i===day.items.length-1}/>)}
      </div>}
    </div>
  );
}

export default function App(){
  const[ad,setAd]=useState("d1");
  const[si,setSi]=useState(false);
  return(
    <div style={{maxWidth:"480px",margin:"0 auto",fontFamily:"'Noto Sans KR','Pretendard',-apple-system,BlinkMacSystemFont,sans-serif",background:"#f4f2ef",minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(145deg,#1a1a2e,#16213e)",padding:"28px 20px 18px",color:"#fff",borderRadius:"0 0 24px 24px",boxShadow:"0 4px 20px rgba(0,0,0,0.15)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"28px"}}>🇯🇵</span>
          <div>
            <div style={{fontSize:"22px",fontWeight:900,letterSpacing:"-0.5px"}}>후쿠오카 3박 4일</div>
            <div style={{fontSize:"11.5px",color:"#94a3b8",marginTop:"1px"}}>후쿠오카 · 히타 · 다자이후</div>
          </div>
        </div>
        <div style={{display:"flex",gap:"6px",marginTop:"14px"}}>
          {D.map(d=><button key={d.key} onClick={()=>setAd(d.key)} style={{flex:1,padding:"8px 4px",border:"none",borderRadius:"10px",background:ad===d.key?d.color:"rgba(255,255,255,0.07)",color:"#fff",fontSize:"11.5px",fontWeight:700,cursor:"pointer",transition:"all 0.15s",opacity:ad===d.key?1:0.4,transform:ad===d.key?"scale(1.02)":"scale(1)"}}>
            <div style={{fontSize:"16px"}}>{d.emoji}</div>
            <div style={{marginTop:"2px"}}>{d.date}</div>
          </button>)}
        </div>
      </div>
      <div onClick={()=>setSi(!si)} style={{margin:"12px 16px 0",padding:"10px 14px",borderRadius:"10px",background:"#fff",border:"1.5px solid #e8e4df",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"}}>
        <span style={{fontSize:"16px"}}>🏠</span>
        <div style={{flex:1}}>
          <div style={{fontSize:"12px",fontWeight:700,color:"#444"}}>숙소 · 하카타역 도보 4분</div>
          {si&&<div style={{fontSize:"11px",color:"#888",marginTop:"2px"}}>에어비앤비 Hoshino Rin · 치쿠시구치 방면 · 셀프 체크인</div>}
        </div>
        <span style={{fontSize:"10px",color:"#ccc"}}>{si?"▲":"▼"}</span>
      </div>
      <div style={{padding:"12px 16px"}}>
        {D.map(d=><Day key={d.key} day={d} active={ad===d.key} toggle={()=>setAd(ad===d.key?null:d.key)}/>)}
      </div>
      <div style={{textAlign:"center",padding:"14px 20px 28px",fontSize:"10.5px",color:"#b8b0a8"}}>
        2026.02.28 · 📍지도 버튼 → Google Maps · 📞 전화번호 탭 → 바로 전화<br/>우측 상단 공유 버튼 → URL 추출 후 북마크!
      </div>
    </div>
  );
}

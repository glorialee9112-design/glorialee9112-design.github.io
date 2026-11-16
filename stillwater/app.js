/* ============================================================
   Still Water · 익명 고민 상담소  (app.js)
   ------------------------------------------------------------
   ★ 연결 창구(CONTACT_URL) ★
   아래 한 줄만 바꾸면 연결 버튼이 이동하는 곳이 바뀝니다.
     · 지금 값          : 전도 전용 1:1 오픈채팅방 'https://open.kakao.com/o/sfzSIjXi'
   ▶ 오픈채팅방 주소가 바뀌면, 아래 CONTACT_URL 한 줄만 그 주소로
     교체하면 됩니다. (주소를 비워두면 '연결 준비 중'만 보이고, 복사 기능은 그대로 동작합니다.)
   (주소를 비워두면 '연결 준비 중' 안내만 보이고, 복사 기능은 그대로 동작합니다.)
   ============================================================ */

// ↓↓↓ 전도 전용 오픈채팅방 URL ↓↓↓
const CONTACT_URL = 'https://open.kakao.com/o/sfzSIjXi';

// 저장 키는 1차 시안과 그대로 맞춰 두었습니다. (이미 적어둔 기록이 사라지지 않도록)
const STORE_KEY = 'mahaneumkan.entries.v1';
const MAX_ENTRIES = 300;

/* ─────────────────────────────────────────────
   말씀 (개역개정)
   ───────────────────────────────────────────── */
const VERSES = {
  mt1128:  { ref: '마태복음 11:28',   text: '수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라' },
  isa4031: { ref: '이사야 40:31',     text: '오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다' },
  phil46:  { ref: '빌립보서 4:6',     text: '아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라' },
  pet57:   { ref: '베드로전서 5:7',   text: '너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라' },
  ps48:    { ref: '시편 4:8',         text: '내가 평안히 눕고 자기도 하리니 나를 안전히 살게 하시는 이는 오직 여호와이시니이다' },
  ps1399:  { ref: '시편 139:9-10',    text: '내가 새벽 날개를 치며 바다 끝에 가서 거할지라도 곧 거기서도 주의 손이 나를 인도하시며 주의 오른손이 나를 붙드시리이다' },
  isa432:  { ref: '이사야 43:2',      text: '네가 물 가운데로 지날 때에 내가 함께 할 것이라 강을 건널 때에 물이 너를 침몰하지 못할 것이며 네가 불 가운데로 지날 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니' },
  ps3418:  { ref: '시편 34:18',       text: '여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다' },
  ps1473:  { ref: '시편 147:3',       text: '상심한 자를 고치시며 그들의 상처를 싸매시는도다' },
  prov356: { ref: '잠언 3:5-6',       text: '너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라' },
  isa4319: { ref: '이사야 43:19',     text: '보라 내가 새 일을 행하리니 이제 나타낼 것이라 너희가 그것을 알지 못하겠느냐 반드시 내가 광야에 길을 사막에 강을 내리라' },
  jer2911: { ref: '예레미야 29:11',   text: '여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망의 끝을 주려 함이니라' },
  ps231:   { ref: '시편 23:1',        text: '여호와는 나의 목자시니 내게 부족함이 없으리로다' },
  thess518:{ ref: '데살로니가전서 5:18', text: '범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라' },
  col315:  { ref: '골로새서 3:15',    text: '그리스도의 평강이 너희 마음을 주장하게 하라 너희는 이와 같이 한 몸으로 부르심을 받았나니 또한 너희는 감사하는 자가 되라' },
  ps11824: { ref: '시편 118:24',      text: '이 날은 여호와께서 정하신 것이라 우리가 기뻐하고 즐거워하리라' }
};

/* ─────────────────────────────────────────────
   찬양 추천 (전곡 찬양 / 찬송가)
   ─────────────────────────────────────────────
   youtubeUrl 은 실제로 열리는 영상만 넣었습니다. (원곡자·공식 채널 또는
   조회수가 높은 찬양팀 영상) 곡을 추가할 때도 주소가 살아 있는지 먼저 확인하세요.
   `Still Water · 바이올린 찬양` / `Still Water · 자작곡` 은 이 공간을 만든 사람의
   유튜브 채널(@gloria8059) 영상입니다. 채널 이름만 표기하고 그 밖의 정보는 넣지 않습니다.
   ───────────────────────────────────────────── */
const SONGS = {
  /* 지침·번아웃 */
  t1: { title: '주 은혜임을', artist: '손경민', why: '내가 잘해서가 아니라 은혜로 여기 있다는 말이, 힘을 빼게 해요.', youtubeUrl: 'https://www.youtube.com/watch?v=7kuBu5Qa3PA' },
  t2: { title: '나의 한숨을 바꾸셨네', artist: '마커스워십', why: '한숨이 많았던 마음을 노래가 먼저 알아주는 것 같아요.', youtubeUrl: 'https://www.youtube.com/watch?v=H79FL5F4Mak' },
  t3: { title: '지금까지 지내온 것', artist: '찬송가 301장', why: '지나온 날을 천천히 돌아보며 듣기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=YHIpJDIjEOU' },
  t4: { title: '내 영혼이 은총 입어', artist: '찬송가 438장', why: '무거운 마음을 잠시 내려놓게 하는 오래된 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=jLuhZ5o_yUM' },
  t5: { title: '내게 강 같은 평화', artist: '마커스워십', why: '강물처럼 잔잔한 후렴이 마음을 천천히 식혀줘요.', youtubeUrl: 'https://www.youtube.com/watch?v=kh87d5UPggE' },
  t6: { title: '회복을 위한 기도', artist: 'Still Water · 바이올린 찬양', why: '기도의 문장 위에 잔잔한 연주가 흐르는 곡이라, 말로 다 못 한 마음도 맡겨볼 수 있어요.', youtubeUrl: 'https://www.youtube.com/watch?v=NSC-LZckGXI' },
  t7: { title: '하나님의 은혜', artist: 'Still Water · 바이올린 찬양', why: '오늘 하루도 내 힘이 아니라 은혜로 지나왔구나, 천천히 돌아보게 되는 연주예요.', youtubeUrl: 'https://www.youtube.com/watch?v=6y82Mp6sq4U' },

  /* 불안·걱정 */
  a1: { title: '은혜 아니면', artist: '손경민', why: '설명이 필요 없는 가사라, 생각을 잠시 멈추고 듣기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=nmafBfCphMA' },
  a2: { title: '나의 영혼이 잠잠히', artist: '송정미', why: '생각이 많아지는 밤에, 숨을 고르게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=9P10OV1EXkQ' },
  a3: { title: '아무것도 두려워 말라', artist: '마커스워십', why: '두려움이 클수록 천천히 들으면 좋은 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=S0IsVcwuyrc' },
  a4: { title: 'It Is Well With My Soul', artist: 'Horatio Spafford', why: '큰 상처를 지나온 사람이 쓴 노래라, 말없이 들을 수 있어요.', youtubeUrl: 'https://www.youtube.com/watch?v=Eg5O2y1UXw4' },
  a5: { title: '너 두려워 말라', artist: '팀룩워십', why: '불안한 마음을 시편 말씀으로 안아주는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=mfre6TzL2Y8' },
  a6: { title: '내 마음에 어려움이 있을때', artist: 'Still Water · 자작곡', why: '정리되지 않는 마음을 그대로 둔 채 들을 수 있는 짧은 자작곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=XdrUc35NMXM' },
  a7: { title: '나 가진 재물 없으나', artist: 'Still Water · 바이올린 찬양', why: '가진 것이 적어 보이는 날에도 곁에 계신 분을 노래한 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=G_x3lPdJZTc' },

  /* 외로움 */
  l1: { title: '주와 같이 길 가는 것', artist: '찬송가 430장', why: '혼자 걷는 길이 아니라는 말이 담긴 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=L3yTtn11FM0' },
  l2: { title: '주 사랑이 나를 숨쉬게 해', artist: '마커스워십', why: '혼자인 것 같은 저녁에 작게 틀어두기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=CkuqnIx11L8' },
  l3: { title: '주 나와 함께 하시니', artist: 'WELOVE', why: '시편 23편이 그대로 노래가 되어, 빈방에서도 곁에 누가 있는 것 같아요.', youtubeUrl: 'https://www.youtube.com/watch?v=5X4jDVpL0c4' },
  l4: { title: '우리 함께 기도해', artist: '마커스워십', why: '누군가와 함께 있다는 마음이 들게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=Hgai34-0f8o' },
  l5: { title: '내 주를 가까이 하게 함은', artist: '찬송가 338장', why: '조용히 곁에 있는 느낌을 주는 오래된 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=9FNMj1rPU2c' },
  l6: { title: '누군가 널 위해 기도하네', artist: 'Still Water · 바이올린 찬양', why: '혼자인 것 같은 밤에, 누군가 나를 위해 기도하고 있다는 말을 들려줘요.', youtubeUrl: 'https://www.youtube.com/watch?v=44Dp2QJqP8o' },

  /* 상처·서운함 */
  h1: { title: '나 같은 죄인 살리신', artist: '찬송가 305장', why: '가장 낮은 자리에서도 불릴 수 있는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=SfUoRQy-LH4' },
  h2: { title: '예수 사랑하심은', artist: '찬송가 563장', why: '상처 입은 마음을 가장 단순한 문장으로 안아주는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=3XQ8NlJOBr4' },
  h3: { title: '그 사랑', artist: '마커스워십', why: '받은 사랑을 다시 세어보게 되는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=5TroLBvlyp4' },
  h4: { title: '당신은 사랑받기 위해 태어난 사람', artist: 'Still Water · 바이올린 찬양', why: '그 말이 오늘은 당신에게도 그대로 들리기를 바라요.', youtubeUrl: 'https://www.youtube.com/watch?v=-byjBW7yVzA' },
  h5: { title: '그 사랑 얼마나', artist: '박지현', why: '서운한 마음이 조금씩 풀어지는, 다정한 가사의 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=lQHl6wXVQtY' },
  h6: { title: '신실하신 주님의 사랑', artist: 'Still Water · 바이올린 찬양', why: '서운한 마음이 남은 날에도 변하지 않는 사랑을 조용히 들려주는 연주예요.', youtubeUrl: 'https://www.youtube.com/watch?v=L8kdjCp5p7I' },

  /* 막막함 */
  k1: { title: '주님의 시간에 / 사랑해요 목소리 높여', artist: 'Still Water · 바이올린 찬양', why: '조급한 마음이 올라올 때, 때를 기다리는 마음을 연주로 들려줘요.', youtubeUrl: 'https://www.youtube.com/watch?v=QVf21Fj_WTo' },
  k2: { title: '광야를 지나며', artist: '마커스워십', why: '지금이 광야 같아도 지나가는 길이라고 말해주는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=OrU7QsoOvMw' },
  k3: { title: '모든 상황 속에서', artist: '마커스워십', why: '어떤 형편에서도 감사로 돌아서게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=Ipa_vptcy7o' },
  k4: { title: '선한 능력으로', artist: '마커스워십', why: '힘을 내라는 말 대신, 조용히 기대게 되는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=vG_E39ZYAjs' },
  k5: { title: '길을 만드시는 주', artist: '마커스워십', why: '막힌 자리에서도 길을 내시는 분을 노래한 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=W9JMKBH6HQU' },
  k6: { title: '주님 말씀하시면 / 나의 가는 길', artist: 'Still Water · 바이올린 찬양', why: '어디로 가야 할지 모를 때, 말씀 따라 한 걸음씩 가는 길을 그린 연주예요.', youtubeUrl: 'https://www.youtube.com/watch?v=aQdxcrB0wuY' },

  /* 감사·평안 */
  g1: { title: '오 신실하신 주', artist: 'Still Water · 바이올린 찬양', why: '아침마다 새로워지는 은혜를 노래한 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=9GCsbQc8i9M' },
  g2: { title: '감사 위에 감사', artist: '마커스워십', why: '감사한 마음이 더 크게 번지게 하는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=KWxH0LZMbT0' },
  g3: { title: '감사함으로', artist: '마커스워십', why: '평범한 하루도 감사로 바라보게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=ExeiRWu-4xc' },
  g4: { title: '날 구원하신 주 감사', artist: '마커스워십', why: '지나온 날을 돌아보며 감사하게 되는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=1hUfF_634_k' },
  g5: { title: '주 하나님 지으신 모든 세계', artist: '찬송가 79장', why: '창밖을 한 번 보게 되는, 넓은 마음의 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=IhJHSXc3iDg' },
  g6: { title: '선하신 주', artist: 'Still Water · 자작곡', why: '특별한 일이 없는 하루도 선하게 이끄시는 마음을 담은 자작곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=5PYig3vTjnI' }
};

/* 고민 상황(주제)마다 다른 찬양이 나오도록 감정별 주제 → 곡 묶음
   (키: '감정id/주제라벨', 값: 그 상황에 어울리는 곡 id 2~3개)
   여기에 없는 주제는 그 감정의 기본 곡 묶음(emotion.songs)에서 고릅니다. */
const TOPIC_SONGS = {
  'tired/회사':        ['t3', 't2'],
  'tired/공부':        ['t2', 't1', 't7'],
  'tired/돌봄':        ['t1', 't5', 't6'],
  'tired/가르치는 일': ['t2', 't4', 't7'],
  'tired/잠':          ['t5', 't4', 't6'],
  'tired/생활':        ['t3', 't1', 't7'],

  'anxious/기다림': ['a2', 'a1', 'a6'],
  'anxious/건강':   ['a4', 'a5', 'a6'],
  'anxious/생활':   ['a1', 'a3', 'a7'],
  'anxious/잠':     ['a2', 'a4', 'a6'],
  'anxious/결정':   ['a3', 'a1', 'a6'],
  'anxious/가족':   ['a5', 'a2', 'a7'],

  'lonely/관계': ['l4', 'l3', 'l6'],
  'lonely/혼자': ['l2', 'l3', 'l6'],
  'lonely/가족': ['l1', 'l5'],
  'lonely/이별': ['l2', 'l1', 'l6'],
  'lonely/신앙': ['l5', 'l4'],

  'hurt/말':        ['h2', 'h4', 'h6'],
  'hurt/가까운 사이': ['h3', 'h5', 'h6'],
  'hurt/믿음':      ['h1', 'h3'],
  'hurt/이별':      ['h5', 'h3', 'h6'],
  'hurt/어린 날':   ['h4', 'h2'],

  'stuck/진로': ['k1', 'k5', 'k6'],
  'stuck/공부': ['k2', 'k1', 'k6'],
  'stuck/일':   ['k3', 'k5', 'k6'],
  'stuck/신앙': ['k4', 'k1'],
  'stuck/결정': ['k1', 'k3', 'k6'],

  'grateful/감사': ['g2', 'g3', 'g6'],
  'grateful/사람': ['g4', 'g2', 'g6'],
  'grateful/신앙': ['g1', 'g5', 'g6'],
  'grateful/수고': ['g3', 'g4'],
  'grateful/쉼':   ['g1', 'g5', 'g6']
};

/* ─────────────────────────────────────────────
   오늘의 마음 (감정 6가지 + 키워드별 한마디)
   ───────────────────────────────────────────── */
const EMOTIONS = [
  {
    id: 'tired', label: '지침·번아웃', icon: 'leaf',
    mood: ['지치', '지침', '피곤', '번아웃', '무기력', '녹초', '쉬고싶', '힘들'],
    letters: [
      [
        '오늘 하루, 생각보다 많은 걸 견디며 여기까지 오셨어요.',
        '아무 일도 없었던 것처럼 보이는 날에도 마음속에서는 작은 전쟁이 있었을 거예요. 잘하고 있는지 자꾸 확인하게 되는 날, 아무것도 하기 싫어서 멍하니 앉아 있는 날이 있지요.',
        '그런 날은 멈춰도 괜찮아요. 쉬는 건 게을러지는 게 아니라, 다시 걸어가기 위해 몸을 돌보는 일이니까요.',
        '따뜻한 물 한 잔, 불 끄고 누워 있는 시간, 아무에게도 답하지 않는 저녁. 오늘은 그런 것들로 하루를 닫아보세요.',
        '여기까지 온 것만으로 충분히 애쓰셨어요.'
      ],
      [
        '지금 아무것도 하고 싶지 않은 마음이 드는 건, 당연한 일이에요. 오래 애쓰셨으니까요.',
        '사람들은 흔히 “조금만 더”라고 말하지만, 오늘 필요한 건 힘을 내는 일이 아니라 숨을 고르는 일일지도 몰라요.',
        '잘 자라지 않는 화분도 물을 아껴주면 다시 잎을 내요. 지금의 당신에게도 그런 시간이 필요해 보여요.',
        '오늘만큼은 아무것도 잘하지 않아도 괜찮습니다. 여기까지 버틴 것만으로 충분해요.'
      ]
    ],
    verses: ['mt1128', 'isa4031'],
    songs: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
    topics: [
      { keys: ['회사', '출근', '야근', '업무', '상사', '팀장', '회의', '직장', '일터'], label: '회사',
        line: '회사에서의 하루가 유난히 길고 무거우셨겠어요. 집에 돌아온 뒤에도 그 공기가 옷에 남아 있는 것 같지요.' },
      { keys: ['시험', '공부', '과제', '논문', '자격증', '학점', '수능'], label: '공부',
        line: '해야 할 일은 산처럼 쌓여 있는데 몸이 따라주지 않을 때, 그 답답함이 얼마나 클지 알 것 같아요.' },
      { keys: ['육아', '아이', '아이들', '애들', '엄마노릇'], label: '돌봄',
        line: '누군가를 돌보는 일은 하루도 쉬어갈 수 없어서, 그 무게가 더 크게 느껴지는 날이 있어요.' },
      { keys: ['레슨', '수업', '학생', '제자', '강사', '선생'], label: '가르치는 일',
        line: '사람을 가르치는 일은 마음까지 쓰게 되니까, 하루가 끝나면 말로 다 못 할 피로가 남지요.' },
      { keys: ['잠', '불면', '새벽', '잠을'], label: '잠', verse: 'ps48',
        line: '잠이 얕게 오는 밤에는 마음도 함께 깨어 있는 것 같아요. 오늘은 조금 일찍 불을 꺼보셔도 좋겠어요.' },
      { keys: ['월세', '생활비', '돈', '빚', '가계'], label: '생활',
        line: '생활의 걱정까지 겹치면 쉬는 것조차 마음 편치 않으실 거예요. 그 마음까지 알아주고 싶어요.' }
    ]
  },
  {
    id: 'anxious', label: '불안·걱정', icon: 'wave',
    mood: ['불안', '걱정', '초조', '긴장', '두렵', '무섭', '조마조마', '떨려'],
    letters: [
      [
        '걱정이 꼬리를 물고 이어지는 밤이 있지요. 아무리 애써도 생각이 멈추지 않을 때, 스스로를 나무라지 않으셔도 돼요.',
        '불안은 마음이 무언가를 소중히 여기고 있다는 신호이기도 해요. 그만큼 지키고 싶은 게 있다는 뜻이니까요.',
        '지금 당장 답을 찾지 않아도 괜찮아요. 오늘은 걱정을 잠시 옆자리에 앉혀두고, 물 한 모금 마시고, 어깨를 한 번 내려보세요.',
        '내일의 일은 내일의 당신이, 조금 더 편한 마음으로 마주할 수 있을 거예요.'
      ],
      [
        '마음이 자꾸 앞으로 달려가서, 아직 오지 않은 일을 미리 겪고 있지는 않으신가요.',
        '생각이 많다는 건 세심하고 성실하다는 뜻이에요. 다만 그 마음이 너무 오래 긴장하고 있으면 몸이 먼저 지쳐요.',
        '지금 이 순간 할 수 있는 일은 아주 작아도 괜찮아요. 숨을 천천히 세 번 쉬고, 오늘 해야 할 일 하나만 적어보는 것. 그거면 충분해요.',
        '당신이 걱정하는 일들이 생각만큼 크게 오지 않기를, 저도 함께 바라고 있을게요.'
      ]
    ],
    verses: ['phil46', 'pet57'],
    songs: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
    topics: [
      { keys: ['시험', '면접', '결과', '발표', '합격', '불합격', '입시'], label: '기다림',
        line: '결과를 기다리는 시간만큼 마음이 조여오는 때가 있지요. 그 시간을 견디는 것도 큰일이에요.' },
      { keys: ['건강', '병원', '검사', '아프', '수술', '진단'], label: '건강',
        line: '몸이 안 좋으면 생각이 더 깊어지고, 생각이 깊어지면 몸이 더 굳어요. 그 사이에서 애쓰셨겠어요.' },
      { keys: ['돈', '월세', '빚', '생활비', '수입', '적자'], label: '생활',
        line: '돈 걱정은 하루 종일 조용히 따라다니면서 마음을 갉아먹지요. 그 조용한 무게를 알아요.' },
      { keys: ['잠', '불면', '새벽', '밤에'], label: '잠', verse: 'ps48',
        line: '잠자리에 누우면 생각이 더 또렷해지는 밤, 그 시간이 유독 길게 느껴지지요.' },
      { keys: ['선택', '결정', '고민', '어떡', '어떻게'], label: '결정',
        line: '어떤 선택이 맞는지 알 수 없을 때, 그 불확실함이 제일 힘들어요.' },
      { keys: ['가족', '부모', '엄마', '아빠', '아이'], label: '가족',
        line: '가까운 사람일수록 걱정이 마음의 큰 자리를 차지하지요.' }
    ]
  },
  {
    id: 'lonely', label: '외로움', icon: 'star',
    mood: ['외롭', '외로', '쓸쓸', '허전', '고독', '혼자인'],
    letters: [
      [
        '오늘은 유난히 마음이 비어 보이는 하루였나 봐요.',
        '사람들 사이에 있어도 혼자인 것 같고, 집에 돌아오면 공기가 낯설게 느껴지는 날이 있어요. 그런 날은 억지로 채우지 않아도 괜찮아요.',
        '외로움은 누군가를 기다리는 마음이에요. 기다린다는 건, 아직 마음이 열려 있다는 뜻이기도 하지요.',
        '지금 이 글을 쓰고 있는 시간만큼은, 당신 곁에 누군가 조용히 앉아 있다고 생각해 주세요.'
      ],
      [
        '아무도 연락하지 않는 하루는 생각보다 조용하고, 그 조용함이 오래 마음에 남지요.',
        '사람은 원래 연결되어 있지 않으면 힘들어지는 존재래요. 그 마음이 약한 게 아니라, 사람이 사람을 필요로 하도록 만들어졌다는 뜻이에요.',
        '오늘 밤은 창문을 조금 열어두고, 좋아하는 곡 하나를 작게 틀어보세요. 세상이 아주 멀어지지는 않았다는 게 조금은 느껴질 거예요.',
        '당신이 여기 있다는 걸 누군가는 알고 있었으면 좋겠어요. 지금 이 글을 쓰는 저는 알고 있답니다.'
      ]
    ],
    verses: ['ps1399', 'isa432'],
    songs: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6'],
    topics: [
      { keys: ['친구', '연락', '카톡', '약속', '모임'], label: '관계',
        line: '연락이 오지 않는 시간이 유난히 길게 느껴진 날이었나 봐요. 기다리는 마음이 참 조용하지요.' },
      { keys: ['혼자', '자취', '이사', '빈집'], label: '혼자',
        line: '혼자 있는 공간의 소리가 낯설게 들리는 날도 있어요. 그 소리에 마음이 놓이면 좋겠어요.' },
      { keys: ['명절', '생일', '가족', '부모'], label: '가족',
        line: '다른 사람들의 온기가 유독 크게 보이는 날이 있어요. 그 마음이 부끄러운 건 아니에요.' },
      { keys: ['이별', '헤어', '전남친', '전여친', '떠나'], label: '이별',
        line: '떠나간 사람의 자리가 아직 그 자리에 남아 있는 것 같아요. 자리는 원래 그렇게 오래 비어 있어요.' },
      { keys: ['교회', '신앙', '기도', '하나님'], label: '신앙',
        line: '믿음이 흔들릴 때 겪는 외로움은 말로 꺼내기 더 어렵지요. 그 마음도 여기 적어두셔도 괜찮아요.' }
    ]
  },
  {
    id: 'hurt', label: '상처·서운함', icon: 'stitch',
    mood: ['상처', '서운', '속상', '억울', '섭섭', '배신', '화가나'],
    letters: [
      [
        '서운한 마음을 여기까지 들고 오셨네요. 그 마음을 꺼내놓는 일이 얼마나 어려운지 알아요.',
        '상처는 사소해 보이는 말에서 오래 남기도 해요. 괜찮은 척했던 시간만큼 마음이 더 아팠을 거예요.',
        '그 사람을 이해해야 한다는 부담은 잠시 내려두세요. 지금은 화가 나도 괜찮고, 아직 용서하고 싶지 않아도 괜찮아요.',
        '당신의 마음이 먼저 다정하게 돌봄을 받을 자격이 있어요.'
      ],
      [
        '받은 말이 마음에 오래 남아서, 오늘도 그 장면이 떠오르셨나 봐요.',
        '상처를 준 사람은 잊었을지 몰라도, 받은 사람은 오래 기억해요. 그게 당신이 무심해서가 아니라, 마음이 여린 사람이어서예요.',
        '그 마음을 지금 당장 정리하지 않아도 괜찮아요. 다만 그 말이 당신에 대한 진실은 아니라는 것만 기억해 주세요.',
        '당신은 그런 말을 받을 만한 사람이 아니에요.'
      ]
    ],
    verses: ['ps3418', 'ps1473'],
    songs: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    topics: [
      { keys: ['말', '상처', '무시', '욕', '비난', '지적', '모욕'], label: '말',
        line: '그 말을 듣고 한참이 지나서도 마음에 남아 있을 때가 있어요. 말은 원래 그렇게 오래 살아남아요.' },
      { keys: ['친구', '동료', '가족', '엄마', '아빠', '부모', '오빠', '언니'], label: '가까운 사이',
        line: '가까운 사이에서 받은 서운함은 더 오래 남지요. 가깝다는 건 그만큼 마음이 열려 있었다는 뜻이니까요.' },
      { keys: ['배신', '거짓', '실망', '약속'], label: '믿음',
        line: '믿었던 마음이 어긋나면 세상이 조금 달라 보이기도 해요. 그 자리에서 많이 흔들리셨겠어요.' },
      { keys: ['이별', '헤어', '떠나'], label: '이별',
        line: '헤어짐은 늘 상대보다 나에게 더 오래 남는 것 같아요.' },
      { keys: ['부모', '엄마', '아빠', '어릴'], label: '어린 날',
        line: '자라면서 받은 말들이 아직 마음 한쪽에 남아 있을 수 있어요. 지금의 당신이 그때의 당신을 안아줘도 좋아요.' }
    ]
  },
  {
    id: 'stuck', label: '막막함', icon: 'cloud',
    mood: ['막막', '답답', '갈피', '모르겠', '방향을'],
    letters: [
      [
        '앞이 잘 보이지 않는 시기가 있어요. 아무리 애써도 방향이 잡히지 않고, 하루가 그냥 지나가는 것처럼 느껴지는 때요.',
        '그럴 때 사람들은 뭔가를 더 해야 한다고 말하지만, 사실은 멈춰서 지도를 다시 펴는 시간이 필요할 때가 많아요.',
        '지금 당장 인생의 답을 찾지 못해도 괜찮아요. 오늘 할 수 있는 아주 작은 일 하나면 충분해요.',
        '길은 한 번에 보이지 않아도, 걸어가다 보면 조금씩 드러나요.'
      ],
      [
        '해야 할 건 아는데 손이 움직이지 않고, 시간만 흘러가는 날이 있지요. 그 답답함이 마음을 더 조이게 해요.',
        '멈춰 있는 것처럼 보여도 마음속에서는 계속 무언가를 고민하고 있었을 거예요. 그 시간이 헛되지는 않아요.',
        '오늘은 큰 결심 대신 아주 작은 하나만 정해보세요. 물 한 잔 마시기, 책상 위 정리하기처럼 손에 잡히는 것.',
        '당신의 속도로 가도 괜찮아요. 늦은 게 아니라, 아직 가는 중이에요.'
      ]
    ],
    verses: ['prov356', 'isa4319'],
    songs: ['k1', 'k2', 'k3', 'k4', 'k5', 'k6'],
    topics: [
      { keys: ['진로', '취업', '미래', '인생', '뭘해야', '무엇을해야', '방향'], label: '진로',
        line: '앞이 잘 보이지 않을 때는 한 걸음도 무겁게 느껴지지요. 지금은 서 있는 것만으로도 괜찮아요.' },
      { keys: ['시험', '공부', '자격증', '논문', '과제'], label: '공부',
        line: '해야 한다는 건 아는데 손이 움직이지 않는 시간이 있어요. 그건 게으름이 아니라 지친 마음의 신호예요.' },
      { keys: ['회사', '일', '사업', '직장', '이직', '퇴사'], label: '일',
        line: '하고 있는 일이 나에게 맞는지 자꾸 되묻게 되는 시기가 있어요. 그 질문은 오래 붙잡아둘수록 무거워져요.' },
      { keys: ['기도', '신앙', '교회', '하나님'], label: '신앙', verse: 'jer2911',
        line: '기도가 잘 안 되는 날, 그 침묵이 길게 느껴질 수 있어요. 침묵도 대화의 일부라고 말해주고 싶어요.' },
      { keys: ['선택', '결정', '고민', '어떡'], label: '결정',
        line: '어느 쪽을 골라도 후회할 것 같아서 멈춰 버릴 때가 있지요. 그 자리에서 이미 충분히 고민하셨어요.' }
    ]
  },
  {
    id: 'grateful', label: '감사·평안', icon: 'cup',
    mood: ['감사', '고맙', '평안', '행복', '감동'],
    letters: [
      [
        '오늘 마음에 감사가 남았다는 게 참 좋아요. 좋은 날은 크게 벌어지지 않아서, 지나고 나면 더 소중하게 기억되기도 해요.',
        '그 마음을 알아차린 것만으로도 오늘은 조금 달라요. 같은 하루도 눈이 머무는 곳에 따라 다르게 남으니까요.',
        '이 기분을 오래 두고 싶다면, 오늘 고마웠던 사람 하나를 떠올려 보세요. 그 사람에게도 오늘이 조금 따뜻해질 거예요.',
        '오늘의 평안이 내일도 이어지기를 바라요.'
      ],
      [
        '오늘은 마음에 여유가 있었던 하루였나 봐요. 그런 날은 기록해두면 나중에 힘이 되어요.',
        '평안은 큰일이 해결돼서 오기보다, 작은 것들이 그냥 괜찮게 느껴질 때 찾아오는 것 같아요.',
        '지금 이 마음을 그대로 담아두세요. 힘든 날에 이 글을 다시 꺼내보면, 그때의 당신이 지금의 당신을 조금 위로해줄 거예요.',
        '오늘 하루, 정말 고생 많으셨어요.'
      ]
    ],
    verses: ['ps231', 'thess518'],
    songs: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
    topics: [
      { keys: ['감사', '고마', '감동'], label: '감사',
        line: '감사한 마음이 오래 남는 날은 그 자체로 선물이에요.' },
      { keys: ['가족', '엄마', '아빠', '부모', '친구', '사람'], label: '사람',
        line: '곁에 있는 사람들 덕분에 하루가 견뎌진 날이었나 봐요.' },
      { keys: ['교회', '기도', '말씀', '예배', '찬양'], label: '신앙', verse: 'col315',
        line: '말씀이 다가온 날은 오래 기억에 남지요. 그 마음을 잊지 않게 여기 담아두세요.' },
      { keys: ['회사', '일', '수업', '레슨', '일했'], label: '수고',
        line: '수고한 만큼의 보람이 있었던 하루였으면 좋겠어요.' },
      { keys: ['평안', '조용', '쉼', '여유', '산책'], label: '쉼', verse: 'ps11824',
        line: '평안한 하루는 크게 벌어지지 않아서 더 소중하지요.' }
    ]
  }
];

/* 감정을 고르지 않았을 때의 담백한 기본 편지 */
const NEUTRAL = {
  id: 'any', label: '오늘의 마음', icon: 'leaf',
  letters: [
    [
      '오늘의 마음을 여기에 적어두셨네요. 그 자체로 이미 잘하고 계신 거예요.',
      '말로 다 정리되지 않는 마음도 있어요. 그런 마음은 억지로 이름을 붙이지 않아도 괜찮아요.',
      '오늘 하루, 당신이 견딘 것들을 저는 다 알 수 없지만, 여기까지 온 마음은 충분히 소중해요.',
      '조용히 읽고, 조용히 덮어두셔도 좋습니다.'
    ]
  ],
  verses: ['ps3418', 'mt1128'],
  songs: ['t1', 'l1', 't5'],
  topics: []
};

/* ─────────────────────────────────────────────
   English (EN) — 위 데이터의 영어판
   ─────────────────────────────────────────────
   한국어 데이터는 위에 그대로 두고, 영어는 id(감정·말씀·곡)와
   주제 라벨(예: '회사')로 짝지어 여기에 둡니다.
   편지·말씀·곡을 고칠 때는 두 곳을 함께 봐 주세요.
   ───────────────────────────────────────────── */
const EN = {
  verses: {
    mt1128:  { ref: 'Matthew 11:28',      text: 'Come to me, all you who are weary and burdened, and I will give you rest.' },
    isa4031: { ref: 'Isaiah 40:31',        text: 'Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
    phil46:  { ref: 'Philippians 4:6',     text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
    pet57:   { ref: '1 Peter 5:7',         text: 'Cast all your anxiety on him, because he cares for you.' },
    ps48:    { ref: 'Psalm 4:8',           text: 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.' },
    ps1399:  { ref: 'Psalm 139:9-10',      text: 'If I rise on the wings of the dawn, if I settle on the far side of the sea, even there your hand will guide me, your right hand will hold me fast.' },
    isa432:  { ref: 'Isaiah 43:2',         text: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.' },
    ps3418:  { ref: 'Psalm 34:18',         text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.' },
    ps1473:  { ref: 'Psalm 147:3',         text: 'He heals the brokenhearted and binds up their wounds.' },
    prov356: { ref: 'Proverbs 3:5-6',      text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
    isa4319: { ref: 'Isaiah 43:19',        text: 'See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.' },
    jer2911: { ref: 'Jeremiah 29:11',      text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
    ps231:   { ref: 'Psalm 23:1',          text: 'The Lord is my shepherd; I lack nothing.' },
    thess518:{ ref: '1 Thessalonians 5:18', text: 'Give thanks in all circumstances; for this is God\u2019s will for you in Christ Jesus.' },
    col315:  { ref: 'Colossians 3:15',     text: 'Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.' },
    ps11824: { ref: 'Psalm 118:24',        text: 'The Lord has done it this very day; let us rejoice today and be glad.' }
  },

  /* 곡 제목·아티스트·한 줄 소개 (유튜브 주소는 위 SONGS 그대로 씁니다) */
  songs: {
    t1: { title: 'Only by Grace', artist: 'Son Kyung-min', why: 'It says I am here not because I did well, but because of grace \u2014 and that lets me set my strength down for a moment.' },
    t2: { title: 'You Turned My Sighs to Song', artist: 'Markers Worship', why: 'The song seems to know a heart that has sighed a lot before I can explain it.' },
    t3: { title: 'All the Way He Has Kept Me', artist: 'Hymn 301', why: 'Good for looking back slowly on the days you have already come through.' },
    t4: { title: 'My Soul Has Found His Grace', artist: 'Hymn 438', why: 'An old hymn that lets a heavy heart be set down for a while.' },
    t5: { title: 'Peace Like a River', artist: 'Markers Worship', why: 'The calm refrain cools the heart slowly, like water.' },
    t6: { title: 'A Prayer for Healing', artist: 'Still Water \u00b7 Violin Praise', why: 'A quiet violin over a prayer, so you can hand over the feelings you cannot put into words.' },
    t7: { title: 'The Grace of God', artist: 'Still Water \u00b7 Violin Praise', why: 'It makes you look back slowly and see that today, too, was carried by grace rather than by your own strength.' },

    a1: { title: 'If Not for Grace', artist: 'Son Kyung-min', why: 'The words need no explanation, so it is good for letting your thoughts stop for a while.' },
    a2: { title: 'My Soul Waits in Quiet', artist: 'Song Jung-mi', why: 'For a night when your thoughts get loud, this one helps you find your breath.' },
    a3: { title: 'Do Not Be Afraid', artist: 'Markers Worship', why: 'The bigger the fear, the better it is to listen slowly.' },
    a4: { title: 'It Is Well With My Soul', artist: 'Horatio Spafford', why: 'Written by someone who passed through great loss, so you can listen without saying anything.' },
    a5: { title: 'Do Not Fear', artist: 'Team Luke Worship', why: 'It holds an anxious heart with the words of the Psalms.' },
    a6: { title: 'When Trouble Fills My Heart', artist: 'Still Water \u00b7 Original', why: 'A short original piece you can listen to while your heart stays unsettled.' },
    a7: { title: 'Though I Have Nothing to Bring', artist: 'Still Water \u00b7 Violin Praise', why: 'A hymn about the One who stays near on days when what you have looks small.' },

    l1: { title: 'Walking the Road With Jesus', artist: 'Hymn 430', why: 'A hymn that says the road you walk is not walked alone.' },
    l2: { title: 'Your Love Lets Me Breathe', artist: 'Markers Worship', why: 'Good to play quietly on an evening when you feel alone.' },
    l3: { title: 'You Are With Me', artist: 'WELOVE', why: 'Psalm 23 becomes the song itself, so even an empty room feels less empty.' },
    l4: { title: 'Let Us Pray Together', artist: 'Markers Worship', why: 'It gives the feeling that someone is beside you.' },
    l5: { title: 'Draw Me Nearer', artist: 'Hymn 338', why: 'An old hymn that feels like someone sitting quietly nearby.' },
    l6: { title: 'Someone Is Praying for You', artist: 'Still Water \u00b7 Violin Praise', why: 'On a night that feels lonely, it tells you that someone is praying for you.' },

    h1: { title: 'Amazing Grace', artist: 'Hymn 305', why: 'A song that can be sung from the lowest place.' },
    h2: { title: 'The Love of Jesus', artist: 'Hymn 563', why: 'It holds a wounded heart with the simplest words.' },
    h3: { title: 'That Love', artist: 'Markers Worship', why: 'A song that makes you count the love you have received again.' },
    h4: { title: 'You Were Born to Be Loved', artist: 'Still Water \u00b7 Violin Praise', why: 'I hope those words sound true for you today, too.' },
    h5: { title: 'How Deep That Love', artist: 'Park Ji-hyun', why: 'A gentle song whose warm words loosen a hurt a little at a time.' },
    h6: { title: 'The Faithful Love of the Lord', artist: 'Still Water \u00b7 Violin Praise', why: 'On a day when hurt remains, this plays a love that does not change.' },

    k1: { title: 'In the Lord\u2019s Time / I Love You, I Lift My Voice', artist: 'Still Water \u00b7 Violin Praise', why: 'When your heart gets impatient, the violin plays what it means to wait for the right time.' },
    k2: { title: 'Through the Wilderness', artist: 'Markers Worship', why: 'A song that says even if now feels like a wilderness, it is a road you are passing through.' },
    k3: { title: 'In Every Circumstance', artist: 'Markers Worship', why: 'It turns you toward gratitude whatever the situation looks like.' },
    k4: { title: 'By Your Good Power', artist: 'Markers Worship', why: 'Instead of telling you to try harder, it lets you lean quietly.' },
    k5: { title: 'The One Who Makes a Way', artist: 'Markers Worship', why: 'A song about the One who makes a road where there seems to be none.' },
    k6: { title: 'If You Say the Word / The Road I Take', artist: 'Still Water \u00b7 Violin Praise', why: 'When you do not know where to go, this plays a road walked one step at a time by the Word.' },

    g1: { title: 'Great Is Thy Faithfulness', artist: 'Still Water \u00b7 Violin Praise', why: 'A song about mercies that are new every morning.' },
    g2: { title: 'Thanks Upon Thanks', artist: 'Markers Worship', why: 'A song that lets gratitude spread a little wider.' },
    g3: { title: 'With Thanksgiving', artist: 'Markers Worship', why: 'It helps you look at an ordinary day with thanks.' },
    g4: { title: 'Thank You, Lord, Who Saved Me', artist: 'Markers Worship', why: 'A song that makes you look back and be thankful.' },
    g5: { title: 'How Great Thou Art', artist: 'Hymn 79', why: 'A hymn with a wide heart that makes you glance out the window.' },
    g6: { title: 'You Are Good', artist: 'Still Water \u00b7 Original', why: 'An original piece about being led kindly even on a day when nothing special happens.' }
  },

  emotions: {
    tired: {
      label: 'Tired \u00b7 Burnout',
      mood: ['tired', 'exhausted', 'exhausting', 'burnout', 'burned out', 'burnt out', 'drained', 'weary',
             'fatigue', 'no energy', 'worn out', 'overworked', 'can\u2019t focus', 'cannot focus'],
      letters: [
        [
          'You held on through more than anyone could see today.',
          'Even a day that looks ordinary can be a small war inside. Some days you keep checking whether you are doing enough; other days you sit still because you cannot start anything at all.',
          'It is okay to stop on a day like that. Rest is not laziness \u2014 it is how you take care of the body that has to carry you back.',
          'A warm drink, the lights off, an evening where you answer no one. Let today end with something like that.',
          'Getting this far was already enough effort.'
        ],
        [
          'Not wanting to do anything right now makes sense. You have been trying for a long time.',
          'People often say \u201cjust a little more,\u201d but what you need today may not be more strength \u2014 it may be a moment to breathe.',
          'A plant that is not growing still sends out new leaves when you give it a little water. You look like you need that kind of time.',
          'For today, you do not have to do anything well. Making it this far is enough.'
        ]
      ],
      topics: {
        '회사': { label: 'Work', keys: ['work', 'office', 'job', 'overtime', 'boss', 'manager', 'meeting', 'coworker', 'company'],
          line: 'A day at work can feel unusually long and heavy. Even after you get home, the air of that place seems to stay on your clothes.' },
        '공부': { label: 'Studies', keys: ['exam', 'exams', 'study', 'studying', 'assignment', 'essay', 'paper', 'thesis', 'grade', 'grades', 'gpa', 'finals', 'midterm', 'school'],
          line: 'When the work piles up like a mountain and your body will not follow, I know how suffocating that feels.' },
        '돌봄': { label: 'Caring for others', keys: ['child', 'children', 'kids', 'baby', 'parenting', 'caregiving', 'take care of'],
          line: 'Caring for someone does not allow a single day off, so the weight feels heavier on some days.' },
        '가르치는 일': { label: 'Teaching', keys: ['teaching', 'teach', 'students', 'class', 'lesson', 'lessons', 'tutoring', 'lecture'],
          line: 'Teaching people takes your heart as well, so by the end of the day a tiredness remains that words cannot carry.' },
        '잠': { label: 'Sleep', keys: ['sleep', 'insomnia', 'awake', 'sleepless', '3am', 'cannot sleep', 'can\u2019t sleep'], verse: 'ps48',
          line: 'On nights when sleep comes shallow, the mind seems to stay awake with you. Tonight, try turning off the light a little earlier.' },
        '생활': { label: 'Money and daily life', keys: ['money', 'rent', 'bills', 'debt', 'budget', 'expenses', 'cost of living'],
          line: 'When money worries pile on top, even resting does not feel restful. I want to acknowledge that too.' }
      }
    },
    anxious: {
      label: 'Anxious \u00b7 Worried',
      mood: ['anxious', 'anxiety', 'worried', 'worry', 'worrying', 'nervous', 'scared', 'afraid', 'panic',
             'stressed', 'stress', 'tense', 'fear', 'overthinking'],
      letters: [
        [
          'There are nights when worry follows worry and no amount of trying stops your thoughts. You do not have to scold yourself for that.',
          'Anxiety is also a sign that your heart is holding something precious. It means there is something you want to protect.',
          'You do not have to find the answer tonight. For now, set the worry down beside you, take a sip of water, and let your shoulders drop once.',
          'Tomorrow\u2019s things can meet tomorrow\u2019s you, with a slightly easier heart.'
        ],
        [
          'Does your mind keep running ahead, living through things that have not happened yet?',
          'Thinking a lot means you are careful and sincere. But when that mind stays tense for too long, the body gets tired first.',
          'What you can do in this moment can be very small. Breathe out slowly three times and write down just one thing for today. That is enough.',
          'I will be hoping with you that the things you fear do not come as large as they look from here.'
        ]
      ],
      topics: {
        '기다림': { label: 'Waiting for news', keys: ['waiting', 'results', 'result', 'interview', 'acceptance', 'admission', 'score'],
          line: 'There are times when waiting for an answer tightens your chest. Enduring that time is also a big thing.' },
        '건강': { label: 'Health', keys: ['health', 'hospital', 'doctor', 'test results', 'surgery', 'diagnosis', 'sick', 'ill'],
          line: 'When the body is unwell, thoughts grow deeper, and when thoughts grow deeper, the body stiffens more. You have been struggling in between.' },
        '생활': { label: 'Money and daily life', keys: ['money', 'rent', 'bills', 'debt', 'budget', 'income', 'expenses'],
          line: 'Money worry follows you quietly all day and wears the heart down. I know that quiet weight.' },
        '잠': { label: 'Sleep', keys: ['sleep', 'insomnia', 'awake', 'sleepless', 'at night', '3am'], verse: 'ps48',
          line: 'On nights when your thoughts get clearer as soon as you lie down, that time feels especially long.' },
        '결정': { label: 'A decision', keys: ['decision', 'decide', 'choice', 'choose', 'should i', 'what to do', 'dilemma'],
          line: 'When you cannot tell which choice is right, the uncertainty is the hardest part.' },
        '가족': { label: 'Family', keys: ['family', 'parents', 'mom', 'dad', 'mother', 'father'],
          line: 'The closer the person, the bigger the worry takes up in your heart.' }
      }
    },
    lonely: {
      label: 'Lonely',
      mood: ['lonely', 'loneliness', 'alone', 'isolated', 'homesick', 'miss home', 'miss my family', 'empty', 'left out', 'no friends'],
      letters: [
        [
          'Today must have been a day when your heart felt especially empty.',
          'There are days when you feel alone even among people, and the air at home feels unfamiliar. On those days you do not have to fill the space by force.',
          'Loneliness is a heart waiting for someone. Waiting also means your heart is still open.',
          'For the time it takes to write this, please imagine someone sitting quietly beside you.'
        ],
        [
          'A day when no one messages you is quieter than you expect, and that quiet stays in the heart for a long time.',
          'People are made to need connection; without it we ache. That does not mean you are weak \u2014 it means you were made to need people.',
          'Tonight, open the window a little and play one song you love, softly. You may feel that the world has not gone all that far away.',
          'I hope someone knows that you are here. The one writing this beside you knows.'
        ]
      ],
      topics: {
        '관계': { label: 'Friends', keys: ['friend', 'friends', 'no message', 'messages', 'group chat', 'hangout', 'meet up', 'text', 'texts', 'texted', 'texting', 'text back', 'reply', 'replied', 'nobody', 'no one'],
          line: 'The time without a message must have felt especially long today. A waiting heart is very quiet.' },
        '혼자': { label: 'Being alone', keys: ['alone', 'by myself', 'living alone', 'live alone', 'moved', 'empty room', 'apartment', 'dorm'],
          line: 'There are days when the sounds of a place you live alone feel unfamiliar. I hope those sounds become a comfort.' },
        '가족': { label: 'Family', keys: ['holiday', 'birthday', 'thanksgiving', 'christmas', 'new year', 'family'],
          line: 'There are days when other people\u2019s warmth seems much larger than your own. That feeling is not something to be ashamed of.' },
        '이별': { label: 'A breakup', keys: ['breakup', 'broke up', 'ex', 'my ex', 'left me', 'dumped', 'goodbye'],
          line: 'The place where someone used to be still seems to sit there, empty. Places do stay empty for a long time.' },
        '신앙': { label: 'Faith', keys: ['church', 'faith', 'prayer', 'pray', 'god', 'jesus'],
          line: 'Loneliness that comes when faith shakes is harder to speak out loud. You can leave that here too.' }
      }
    },
    hurt: {
      label: 'Hurt \u00b7 Wounded',
      mood: ['hurt', 'hurts', 'hurt me', 'wounded', 'betrayed', 'betrayal', 'unfair', 'resentful', 'upset', 'angry', 'offended', 'ignored', 'insulted'],
      letters: [
        [
          'You carried that hurt all the way here. I know how hard it is to take it out and show it.',
          'Wounds often stay longer when they come from words that seemed small. The time you spent pretending to be fine made it hurt more.',
          'Put down the pressure to understand that person for a while. It is okay to be angry now, and okay not to want to forgive yet.',
          'Your heart deserves to be cared for gently first.'
        ],
        [
          'The words stayed with you so long that the scene came back again today.',
          'The person who hurt you may have forgotten; the one who was hurt remembers. That is not because you are careless \u2014 it is because your heart is tender.',
          'You do not have to sort this out right now. Just remember that those words are not the truth about you.',
          'You are not someone who deserves to be spoken to that way.'
        ]
      ],
      topics: {
        '말': { label: 'Words that hurt', keys: ['words', 'said', 'insult', 'criticized', 'criticised', 'yelled', 'mocked', 'rude', 'comment'],
          line: 'Sometimes words stay with you long after you heard them. Words do live that long.' },
        '가까운 사이': { label: 'Close relationships', keys: ['friend', 'partner', 'family', 'mom', 'dad', 'sister', 'brother', 'roommate', 'boyfriend', 'girlfriend'],
          line: 'Hurt from someone close stays longer. Being close means your heart was open that much.' },
        '믿음': { label: 'Trust', keys: ['betrayed', 'betrayal', 'lied', 'lie', 'promise', 'let me down', 'trust'],
          line: 'When trust goes off course, the world can look a little different. You must have been shaken there.' },
        '이별': { label: 'A breakup', keys: ['breakup', 'broke up', 'left me', 'goodbye'],
          line: 'A parting always seems to stay longer with the one who was left than with the one who left.' },
        '어린 날': { label: 'Childhood', keys: ['childhood', 'when i was young', 'growing up', 'as a child', 'my parents said'],
          line: 'Words you heard while growing up can still sit in a corner of your heart. The you of now may hold the you of then.' }
      }
    },
    stuck: {
      label: 'Stuck \u00b7 Lost',
      mood: ['stuck', 'lost', 'confused', 'no direction', 'aimless', 'what should i do', 'nowhere to go',
             'don\u2019t know what to do', 'dont know what to do', 'cannot move forward', 'can\u2019t move forward'],
      letters: [
        [
          'There are seasons when you cannot see ahead. However hard you try, the direction does not come, and the days seem to pass without you.',
          'People say you should do something more at times like that, but often what you need is to stop and open the map again.',
          'It is okay not to find life\u2019s answer today. One very small thing you can do today is enough.',
          'The road does not appear all at once. It shows itself a little as you walk.'
        ],
        [
          'There are days when you know what to do but your hands will not move, and time just passes. That frustration tightens the heart.',
          'Even when you look still, something inside has been turning over and over. That time is not wasted.',
          'Today, instead of a big decision, choose one very small thing. A glass of water, clearing the desk \u2014 something your hands can hold.',
          'You can go at your own speed. You are not late; you are still on the way.'
        ]
      ],
      topics: {
        '진로': { label: 'Direction in life', keys: ['career', 'future', 'my life', 'major', 'job search', 'graduation', 'graduating', 'purpose'],
          line: 'When you cannot see ahead, even one step feels heavy. For now, standing still is okay.' },
        '공부': { label: 'Studies', keys: ['exam', 'study', 'studying', 'assignment', 'thesis', 'paper', 'grade'],
          line: 'There are times when you know you should but your hands will not move. That is not laziness \u2014 it is a sign of a tired heart.' },
        '일': { label: 'Work', keys: ['job', 'work', 'business', 'quit', 'change jobs', 'company', 'office'],
          line: 'There are seasons when you keep asking whether the work you do fits you. That question gets heavier the longer you hold it.' },
        '신앙': { label: 'Faith', keys: ['prayer', 'pray', 'faith', 'church', 'god', 'silent', 'silence'], verse: 'jer2911',
          line: 'On days when prayer does not come easily, the silence can feel long. Silence is part of the conversation too.' },
        '결정': { label: 'A decision', keys: ['decision', 'decide', 'choice', 'choose', 'regret', 'dilemma'],
          line: 'Sometimes you freeze because either choice feels like it will bring regret. You have already thought about it enough there.' }
      }
    },
    grateful: {
      label: 'Grateful \u00b7 Peaceful',
      mood: ['grateful', 'thankful', 'thanks', 'blessed', 'peaceful', 'peace', 'happy', 'joy', 'joyful', 'moved'],
      letters: [
        [
          'It is good that gratitude stayed with you today. Good days do not announce themselves, so they are often remembered more dearly later.',
          'Noticing that already makes today a little different. The same day stays differently depending on where your eyes rest.',
          'If you want to keep this feeling, think of one person you were thankful for today. Their day may grow a little warmer too.',
          'I hope today\u2019s peace carries into tomorrow.'
        ],
        [
          'Today must have had some room in it. Days like this are worth writing down; they become strength later.',
          'Peace seems to arrive not when something big is solved, but when small things simply feel okay.',
          'Keep this feeling as it is. On a hard day, if you open this letter again, the you of today will comfort the you of then a little.',
          'You worked hard today, truly.'
        ]
      ],
      topics: {
        '감사': { label: 'Gratitude', keys: ['grateful', 'thankful', 'thanks', 'thank you'],
          line: 'A day when gratitude stays long is a gift in itself.' },
        '사람': { label: 'People', keys: ['family', 'mom', 'dad', 'parents', 'friend', 'friends', 'people'],
          line: 'It must have been a day carried by the people beside you.' },
        '신앙': { label: 'Faith', keys: ['church', 'prayer', 'pray', 'worship', 'service', 'praise', 'god'], verse: 'col315',
          line: 'Days when the words come close stay in memory. Keep that here so you do not forget.' },
        '수고': { label: 'Hard work', keys: ['work', 'class', 'lesson', 'project', 'finished', 'presentation'],
          line: 'I hope the day held as much reward as the work you put in.' },
        '쉼': { label: 'Rest', keys: ['peace', 'peaceful', 'quiet', 'rest', 'walk', 'calm', 'sabbath'], verse: 'ps11824',
          line: 'A peaceful day does not announce itself, which makes it more precious.' }
      }
    }
  },

  neutral: {
    label: 'Today\u2019s heart',
    letters: [
      [
        'You wrote your heart down here today. That in itself is already something you are doing well.',
        'Some feelings do not settle into words. You do not have to give them a name.',
        'I cannot know everything you endured today, but the heart that came this far is precious.',
        'You may read it quietly and close it quietly.'
      ]
    ]
  }
};

/* 화면 문구 (한국어 · English). HTML의 data-i18n 속성과 app.js가 함께 씁니다. */
const STR = {
  brandSub:     ['익명 고민 상담소', 'Anonymous Counseling'],
  brandAria:    ['고민 쓰기로 이동', 'Go to write'],
  langAria:     ['언어 선택', 'Language'],
  lead:         ['말하기 힘든 고민도 괜찮아요. 아무에게도 못 한 이야기를 한 줄만 적어보세요.',
                 'Even the things that are hard to say out loud are welcome. Write just one line of what you could not tell anyone.'],
  moodTitle:    ['지금 마음', 'How I feel now'],
  moodHint:     ['가까운 것 하나만 골라도 좋아요', 'Pick the one that feels closest'],
  moodAria:     ['오늘의 마음 선택', 'Choose how you feel today'],
  writeTitle:   ['고민 적어보기', 'Write it down'],
  taPlaceholder:['오늘 어떤 고민이 있으신가요? 아무에게도 못 한 이야기도 괜찮아요.',
                 'What is on your mind today? Anything you could not tell anyone is okay.'],
  taAria:       ['오늘의 고민 적기', 'Write about today'],
  lockNote:     ['이 글은 이 기기에만 저장돼요', 'Saved only on this device'],
  clearBtn:     ['지우기', 'Clear'],
  saveBtn:      ['위로 편지 받아보기', 'Receive a comfort letter'],
  underNote:    ['담아두면, 이 고민에 맞춘 위로 편지와 말씀을 조용히 건네드릴게요.<br>이름도 연락처도 묻지 않아요.',
                 'Leave it here and we will quietly hand you a comfort letter and a verse for this worry.<br>We never ask for your name or contact.'],
  journalEyebrow: ['내 기록', 'My journal'],
  journalTitle: ['담아둔 고민들', 'Worries I left here'],
  journalEmpty: ['아직 담아둔 고민이 없어요.', 'Nothing saved here yet.'],
  emptyMsg:     ['오늘의 고민을 한 줄 적어보는 건<br>어떨까요?', 'Would you like to write<br>one line about today?'],
  emptyBtn:     ['고민 쓰러 가기', 'Write something'],
  journalFoot:  ['적으신 고민은 이 기기(브라우저)에만 저장돼요.<br>브라우저 기록을 지우면 함께 사라질 수 있어요.',
                 'What you write is saved only on this device (this browser).<br>Clearing your browser data may remove it with it.'],
  tabWrite:     ['고민 쓰기', 'Write'],
  tabJournal:   ['내 기록', 'Journal'],
  tabAria:      ['주요 화면', 'Main screens'],
  savedPill:    ['이 기기에 저장됨', 'Saved on this device'],
  backWrite:    ['고민 쓰기로', 'Back to writing'],
  backJournal:  ['내 기록으로', 'Back to journal'],

  cardToday:    ['오늘의 위로', 'Comfort for today'],
  cardThen:     ['그날의 위로', 'Comfort from that day'],
  cardTitle:    ['당신의 고민에<br>건네는 위로', 'A comfort letter<br>for your worry'],
  cardVerse:    ['오늘 곁에 두면 좋은 말씀', 'A verse to keep with you today'],
  cardSong:     ['함께 들으면 좋은 곡', 'A song to listen with'],
  cardListen:   ['유튜브에서 듣기', 'Listen on YouTube'],
  cardCopy:     ['문구 복사하기', 'Copy the letter'],
  cardSign:     ['— Still Water 드림', '— from Still Water'],
  songAria:     ['유튜브에서 {title} 듣기 (새 창)', 'Listen to {title} on YouTube (new window)'],

  connectLead:  ['혼자 안고 있기 버거운 고민이라면, 조금 나눠도 괜찮아요.',
                 'If this is too heavy to carry alone, it is okay to share a little of it.'],
  connectPrayerTitle: ['이 고민, 조용히 기도·답장 받아보기', 'Ask for quiet prayer and a reply'],
  connectPrayerDesc:  ['이름 밝히지 않아도 괜찮아요 · 함께 기도하고 짧게 답장드려요',
                       'No name needed · we will pray with you and reply briefly'],
  connectTalkTitle:   ['누군가와 조금 더 이야기 나누고 싶어요', 'I would like to talk with someone a little more'],
  connectTalkDesc:    ['익명으로 편하게 · 하고 싶은 이야기를 나눠요', 'Comfortably and anonymously · we talk about whatever you like'],
  privacy:      ['적으신 고민은 이 기기에만 저장돼요.', 'What you write is saved only on this device.'],

  safetyAria:   ['위기 상황 안내', 'Crisis support'],
  safetyTitle:  ['오늘 마음이 많이 무거워 보여서요', 'Your heart looks very heavy today'],
  safetyBody:   ['혼자 안고 있지 않으셔도 돼요. 이름을 밝히지 않아도, 지금 바로 이야기할 수 있는 곳이 있어요.',
                 'You do not have to hold this alone. You can talk to someone right now, without giving your name. These lines are free and available in Korea.'],
  safetyNote:   ['이곳은 위로를 건네는 공간이에요. 전문 상담을 대신하지는 않아요. 가까운 사람에게 지금 이 화면을 보여주셔도 좋습니다.',
                 'This is a place that offers comfort. It does not replace professional counselling. You may also show this screen to someone near you.'],
  safety109b:   ['자살예방 상담전화', 'Suicide Prevention Hotline'],
  safety109i:   ['24시간 · 무료 · 익명으로도 괜찮아요', '24 hours · free · anonymous is fine'],
  safety1577b:  ['정신건강 위기상담', 'Mental Health Crisis Counseling'],
  safety1577i:  ['1577-0199 · 24시간 · 무료', '24 hours · free · confidential'],
  safety119b:   ['지금 위험한 순간이라면', 'If you are in danger right now'],
  safety119i:   ['구급 · 구조 · 긴급 상담', 'Ambulance · rescue · emergency help'],
  safety112b:   ['경찰 긴급 신고', 'Police emergency'],
  safety112i:   ['몸이 위험하다고 느껴질 때', 'If you feel physically unsafe'],

  sheetPrayerTitle: ['이 고민, 조용히 함께 기도할까요', 'Shall we pray with you about this?'],
  sheetPrayerDesc:  ['혼자 버거운 고민, 익명으로 편하게 이야기 나눌 수 있어요. 적어두신 고민을 보내주시면 조용히 함께 기도하고 짧은 답장을 드릴게요. 이름을 밝히지 않으셔도 괜찮아요. 보내고 나서 마음이 바뀌어도 전혀 문제되지 않아요.',
                     'If this is too heavy to carry alone, you can talk about it anonymously and comfortably. Send what you wrote and we will pray with you quietly and reply briefly. You do not need to give your name. Changing your mind after sending is completely fine.'],
  sheetTalkTitle:   ['조금 더 이야기해도 괜찮아요', 'It is okay to talk a little more'],
  sheetTalkDesc:    ['혼자 버거운 고민이면, 익명으로 편하게 이야기 나눌 수 있어요. 하나님에 대해 궁금한 점이든, 그냥 오늘 있었던 일이든 좋아요. 편한 속도로 이야기해요. 질문이 정리되지 않아도, 그냥 안부만 남기셔도 괜찮습니다.',
                     'If it helps to say it out loud, you can talk with someone anonymously. Questions about God, or just what happened today \u2014 both are welcome. We go at your pace. Your questions do not need to be sorted out; even a simple hello is fine.'],
  sheetPrimary:     ['요약 복사하고 카톡 열기', 'Copy summary & open KakaoTalk'],
  sheetPreviewLabel:['이렇게 보내게 돼요', 'This is what will be sent'],
  sheetGuideTitle:  ['오픈카톡방이 열리면, 아래 중 <b>하나만</b> 골라 먼저 보내주셔도 좋아요',
                     'When the open chat opens, pick <b>just one</b> of these and send it first'],
  sheetGuide1:      ['그냥 들어주기', 'Just listen'],
  sheetGuide2:      ['기도 부탁', 'Pray for me'],
  sheetGuide3:      ['신앙이 궁금해요', 'Curious about faith'],
  sheetSecondary:   ['지금은 그냥 마음만 담아둘게요', 'For now I will just keep it in my heart'],
  sheetNote:        ['적으신 고민은 이 기기에만 저장돼요. 복사된 요약은 직접 붙여넣기 전까지 어디에도 전송되지 않아요.',
                     'What you wrote is saved only on this device. The copied summary is not sent anywhere until you paste it yourself.'],
  sheetHost:        ['카카오톡 오픈채팅방으로 이어져요. 창이 열리지 않으면 <a href="{url}" target="_blank" rel="noopener" data-kakao-direct>여기서 직접 열 수 있어요</a>.',
                     'This leads to a KakaoTalk open chat. If the window does not open, <a href="{url}" target="_blank" rel="noopener" data-kakao-direct>open it here</a>.'],
  sheetHostNone:    ['연결 창구 주소가 아직 설정되지 않았어요. 요약은 복사되니, 주소를 받으신 뒤 붙여넣어 주세요.',
                     'The connection address is not set yet. Your summary is copied \u2014 paste it once you have the address.'],
  sheetClose:       ['닫기', 'Close'],

  confirmTitle: ['이 기록을 지울까요', 'Delete this entry?'],
  confirmBody:  ['{date}에 담아둔 고민이 완전히 지워져요. 되돌릴 수 없어요.',
                 'The worry you saved on {date} will be erased completely. This cannot be undone.'],
  confirmCancel:['그대로 둘게요', 'Keep it'],
  confirmDelete:['지우기', 'Delete'],

  emptySave:    ['아직 아무것도 적지 않으셨어요. 한 줄이면 충분해요.', 'You have not written anything yet. One line is enough.'],
  storageBlocked: ['이 브라우저에는 저장이 막혀 있어요. 창을 닫으면 사라질 수 있어요.',
                   'This browser is blocking storage. Your entry may disappear if you close the window.'],
  copyDone:     ['편지 전체를 복사했어요. 어디든 붙여넣어 보세요.', 'The whole letter is copied. Paste it wherever you like.'],
  copyFail:     ['복사가 되지 않았어요. 길게 눌러 직접 선택해 주세요.', 'Copying did not work. Press and hold to select the text yourself.'],
  entryMissing: ['이 기록을 찾지 못했어요.', 'I could not find that entry.'],
  deleted:      ['기록을 지웠어요.', 'Entry deleted.'],
  connectCopiedWindow: ['고민 요약을 복사했어요. 열린 창에 붙여넣어 주세요.', 'Summary copied. Paste it into the window that opened.'],
  connectCopiedNoWindow: ['고민 요약을 복사했어요. 오픈채팅방을 열어 붙여넣어 주세요.', 'Summary copied. Open the chat and paste it in.'],
  connectCopyFail: ['복사가 되지 않았어요. 안내 창에서 직접 선택해 주세요.', 'Copying did not work. Select the text in the sheet yourself.'],
  clearConfirm: ['적으신 글을 지울까요?', 'Clear what you wrote?'],

  journalCount: ['지금까지 {n}번, 고민을 놓아두셨어요.', '{n} worries are resting here so far.'],
  journalNoWords: ['글로 남기지 않은 마음', 'A heart with no words'],
  journalOpenAria: ['{date} 고민 열어보기', 'Open the worry from {date}'],
  journalDeleteAria: ['이 기록 지우기', 'Delete this entry'],

  summaryHead:  ['[Still Water · 익명 고민 상담소]', '[Still Water · Anonymous Counseling]'],
  summaryWhat:  ['오늘 쓴 고민:', 'What I wrote today:'],
  summaryEmptyText: ['오늘은 따로 적지 않고, 마음만 담아두었어요.', 'I did not write anything today; I just left my heart here.'],
  summaryVerse: ['받은 말씀: {ref}', 'Verse I received: {ref}'],
  textVerse:    ['[오늘 곁에 두면 좋은 말씀]', '[A verse to keep with you today]'],
  textSong:     ['[함께 들으면 좋은 곡]', '[A song to listen with]']
};

const WEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEK_EN_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];
const MONTH_EN_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ui(key, lang) {
  const pair = STR[key];
  const l = (lang || state.lang) === 'en' ? 1 : 0;
  if (!pair) return key;
  return pair[l];
}
function fill(str, vars) {
  return String(str).replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] != null ? vars[k] : m));
}

/* ─────────────────────────────────────────────
   상태
   ───────────────────────────────────────────── */
const state = {
  lang: 'ko',
  cardOpts: {},
  emotion: null,
  text: '',
  entries: [],
  view: 'write',
  current: null,
  fromJournal: false,
  sheet: null,
  restoreFocus: null
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function mix(n) {
  return (n ^ (n >>> 13) ^ (n >>> 21)) >>> 0;
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* ─────────────────────────────────────────────
   저장소
   ───────────────────────────────────────────── */
let memoryStore = null;
function loadEntries() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) return [];
    return list.filter(e => e && e.id && Array.isArray(e.letter));
  } catch (err) {
    return memoryStore ? memoryStore.slice() : [];
  }
}
function saveEntries(list) {
  const trimmed = list.slice(0, MAX_ENTRIES);
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(trimmed));
    return true;
  } catch (err) {
    memoryStore = trimmed;
    return false;
  }
}

/* ─────────────────────────────────────────────
   날짜
   ───────────────────────────────────────────── */
const WEEK = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
function parts(d = new Date()) {
  return {
    y: d.getFullYear(),
    m: d.getMonth() + 1,
    d: d.getDate(),
    w: WEEK[d.getDay()],
    day: d.getDay(),
    h: d.getHours()
  };
}
function fullDate(d = new Date(), lang) {
  const p = parts(d);
  if ((lang || state.lang) === 'en') {
    return `${WEEK_EN[p.day]}, ${MONTH_EN[p.m - 1]} ${p.d}, ${p.y}`;
  }
  return `${p.y}년 ${p.m}월 ${p.d}일 ${p.w}`;
}
function shortDate(d = new Date(), lang) {
  const p = parts(d);
  if ((lang || state.lang) === 'en') {
    return `${MONTH_EN_SHORT[p.m - 1]} ${p.d}, ${WEEK_EN_SHORT[p.day]}`;
  }
  return `${p.m}월 ${p.d}일 ${p.w}`;
}

/* ─────────────────────────────────────────────
   위로 내용 만들기
   ───────────────────────────────────────────── */
function normalize(str) {
  return (str || '').replace(/\s+/g, '').toLowerCase();
}

/* 한국어는 띄어쓰기를 지우고 부분 문자열로, 영어는 단어 경계로 찾습니다.
   (예: 'exam'이 'example'에 걸리지 않도록) */
const ASCII_KEY = /^[a-z0-9'’\- ]+$/i;
function textHas(text, key) {
  if (!text || !key) return false;
  const raw = String(text);
  if (ASCII_KEY.test(key)) {
    const hay = ' ' + raw.toLowerCase().replace(/[’]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
    const needle = key.toLowerCase().replace(/\s+/g, ' ').trim();
    return hay.indexOf(' ' + needle + ' ') >= 0;
  }
  return normalize(raw).includes(normalize(key));
}

/* ─────────────────────────────────────────────
   안전장치: 위기 신호 감지
   자살·자해를 암시하는 표현이 보이면, 위로 카드 아래에
   109 상담전화·119·112 안내를 조용히 함께 보여줍니다.
   ───────────────────────────────────────────── */
const CRISIS_KEYS = [
  '자살', '자해', '극단적', '유서',
  '죽고싶', '죽어버리', '죽는게', '죽는것',
  '살기싫', '살고싶지', '사라지고싶', '사라져버리', '없어지고싶',
  '끝내고싶', '끝내버리', '더는못살', '더이상못살', '하루하루가죽',
  '목매', '목을매', '뛰어내', '투신', '손목을', '손목이', '칼로찌르', '칼로긋',
  '죽을것같', '죽을거같', '스스로를해치'
];

/* 영어 위기 표현 — 단어 경계로 찾아 'examples' 같은 오탐을 피합니다. */
const CRISIS_KEYS_EN = [
  'suicide', 'suicidal', 'kill myself', 'killing myself', 'killed myself',
  'end my life', 'ending my life', 'end it all', 'take my own life',
  'self harm', 'self-harm', 'selfharm', 'harm myself', 'harming myself',
  'hurt myself', 'hurting myself', 'cut myself', 'cutting myself',
  'want to die', 'wanna die', 'wish i was dead', 'wish i were dead',
  'better off dead', 'no reason to live', 'nothing to live for',
  'don\u2019t want to live', 'dont want to live', 'can\u2019t go on', 'cant go on', 'cannot go on',
  'jump off', 'hang myself', 'overdose'
];

function hasCrisisSignal(text) {
  if (!normalize(text)) return false;
  return CRISIS_KEYS.some(k => textHas(text, k)) || CRISIS_KEYS_EN.some(k => textHas(text, k));
}

function safetyMarkup(lang) {
  const l = lang === 'en' ? 'en' : 'ko';
  const line = (num, tel, title, desc) => `
      <a class="safety-line" href="tel:${tel}">
        <span class="sl-num">${num}</span>
        <span class="sl-text"><b>${title}</b><i>${desc}</i></span>
      </a>`;
  const lines = l === 'en'
    ? line('109', '109', ui('safety109b', l), ui('safety109i', l))
      + line('1577-0199', '15770199', ui('safety1577b', l), ui('safety1577i', l))
      + line('119', '119', ui('safety119b', l), ui('safety119i', l))
      + line('112', '112', ui('safety112b', l), ui('safety112i', l))
    : line('109', '109', ui('safety109b', l), ui('safety109i', l))
      + line('119', '119', ui('safety119b', l), ui('safety119i', l))
      + line('112', '112', ui('safety112b', l), ui('safety112i', l));
  return `
    <aside class="safety" aria-label="${escapeHtml(ui('safetyAria', l))}">
      <div class="safety-top">
        <span class="safety-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><use href="#i-heart"/></svg>
        </span>
        <div>
          <p class="safety-title">${escapeHtml(ui('safetyTitle', l))}</p>
          <p class="safety-body">${escapeHtml(ui('safetyBody', l))}</p>
        </div>
      </div>${lines}
      <p class="safety-note">${escapeHtml(ui('safetyNote', l))}</p>
    </aside>`;
}

/* 영어 데이터 헬퍼 ─ 감정/주제/말씀/곡을 언어에 맞게 꺼냅니다 */
function enEmotion(id) {
  return (EN.emotions && EN.emotions[id]) || null;
}
function emotionLabel(emo, lang) {
  if ((lang || state.lang) === 'en') {
    if (emo.id === NEUTRAL.id) return EN.neutral.label;
    const e = enEmotion(emo.id);
    if (e && e.label) return e.label;
  }
  return emo.label;
}
function emotionLetters(emo, lang) {
  if ((lang || state.lang) === 'en') {
    if (emo.id === NEUTRAL.id) return EN.neutral.letters;
    const e = enEmotion(emo.id);
    if (e && e.letters && e.letters.length) return e.letters;
  }
  return emo.letters;
}
function topicLabel(emo, topic, lang) {
  if ((lang || state.lang) === 'en') {
    const e = enEmotion(emo.id);
    const x = e && e.topics && e.topics[topic.label];
    if (x && x.label) return x.label;
  }
  return topic.label;
}
function topicLine(emo, topic, lang) {
  if ((lang || state.lang) === 'en') {
    const e = enEmotion(emo.id);
    const x = e && e.topics && e.topics[topic.label];
    if (x && x.line) return x.line;
  }
  return topic.line;
}
function verseFor(id, lang) {
  if ((lang || state.lang) === 'en' && EN.verses[id]) return { ...EN.verses[id] };
  return { ...VERSES[id] };
}
function songFor(id, lang) {
  const base = SONGS[id] || {};
  if ((lang || state.lang) === 'en' && EN.songs[id]) {
    return { id, title: EN.songs[id].title, artist: EN.songs[id].artist, why: EN.songs[id].why, youtubeUrl: base.youtubeUrl };
  }
  return { id, ...base };
}

function detectTopics(emo, text) {
  if (!normalize(text)) return [];
  const found = [];
  const en = enEmotion(emo.id);
  emo.topics.forEach(t => {
    if (found.length >= 2) return;
    let hit = t.keys.some(k => textHas(text, k));
    if (!hit && en && en.topics && en.topics[t.label]) {
      hit = en.topics[t.label].keys.some(k => textHas(text, k));
    }
    if (hit) found.push(t);
  });
  return found;
}

function guessEmotion(text) {
  if (!normalize(text)) return null;
  let best = null;
  let bestScore = 0;
  EMOTIONS.forEach(emo => {
    let score = 0;
    (emo.mood || []).forEach(k => { if (textHas(text, k)) score += 2; });
    const en = enEmotion(emo.id);
    ((en && en.mood) || []).forEach(k => { if (textHas(text, k)) score += 2; });
    emo.topics.forEach(t => {
      t.keys.forEach(k => { if (textHas(text, k)) score += 1; });
      const x = en && en.topics && en.topics[t.label];
      ((x && x.keys) || []).forEach(k => { if (textHas(text, k)) score += 1; });
    });
    if (score > bestScore) { bestScore = score; best = emo; }
  });
  return best;
}

function pickSong(emo, topics, seed, excludeId, lang) {
  const pinned = topics.map(t => TOPIC_SONGS[`${emo.id}/${t.label}`]).find(list => list && list.length);
  let pool = (pinned && pinned.length) ? pinned.slice() : emo.songs.slice();
  // 같은 감정이 이어질 때 바로 앞 곡이 또 나오지 않도록 (묶음에 여유가 있을 때만)
  if (excludeId && pool.length > 1) {
    const rest = pool.filter(id => id !== excludeId);
    if (rest.length) pool = rest;
  }
  const id = pool[mix(seed + 101) % pool.length] || emo.songs[0];
  return songFor(id, lang);
}

function compose(emotionId, text, opts = {}) {
  const lang = (opts.lang || state.lang) === 'en' ? 'en' : 'ko';
  let emo = EMOTIONS.find(e => e.id === emotionId) || null;
  if (!emo) emo = guessEmotion(text) || NEUTRAL;

  const seed = (hash(text || '') + hash(fullDate(new Date(), 'ko')) + hash(emo.id || '')) >>> 0;
  const letters = emotionLetters(emo, lang);
  const variant = mix(seed) % letters.length;
  const topics = detectTopics(emo, text);

  const base = letters[variant].slice();
  const letter = [];
  base.forEach((line, i) => {
    letter.push(line);
    if (i === 0 && topics.length) letter.push(topicLine(emo, topics[0], lang));
  });

  const verseId = (topics.find(t => t.verse) || {}).verse
    || emo.verses[mix(seed + 17) % emo.verses.length];
  const song = pickSong(emo, topics, seed, opts.excludeSong || null, lang);

  return {
    lang,
    emotionId: emo.id,
    emotionLabel: emotionLabel(emo, lang),
    letter,
    verse: verseFor(verseId, lang),
    song,
    topics: topics.map(t => topicLabel(emo, t, lang))
  };
}

/* ─────────────────────────────────────────────
   화면 전환
   ───────────────────────────────────────────── */
const views = { write: $('#view-write'), comfort: $('#view-comfort'), journal: $('#view-journal') };

function show(view) {
  state.view = view;
  Object.entries(views).forEach(([k, el]) => { el.hidden = k !== view; });
  $$('.tab').forEach(tab => {
    const name = tab.dataset.tab;
    const active = name === view || (view === 'comfort' && name === (state.fromJournal ? 'journal' : 'write'));
    tab.classList.toggle('is-active', active);
  });
  if (view !== 'comfort') window.scrollTo(0, 0);
}

/* ─────────────────────────────────────────────
   인사말
   ───────────────────────────────────────────── */
function paintHeader() {
  const now = new Date();
  const p = parts(now);
  const hour = p.h;
  const l = state.lang;
  $('#todayLine').textContent = fullDate(now, l);
  $('#topDate').textContent = shortDate(now, l);

  let greeting;
  if (l === 'en') {
    if (hour >= 5 && hour < 11) greeting = 'This morning, what is on<br>your <span class="mark">mind</span>?';
    else if (hour >= 11 && hour < 22) greeting = 'What <span class="mark">worry</span> are you<br>carrying today?';
    else greeting = 'Before you sleep, what is<br>on your <span class="mark">mind</span>?';
  } else if (hour >= 5 && hour < 11) greeting = '오늘 아침, 어떤 <span class="mark">고민</span>이<br>마음에 있으신가요?';
  else if (hour >= 11 && hour < 22) greeting = '오늘 어떤 <span class="mark">고민</span>을<br>안고 계신가요?';
  else greeting = '잠들기 전, 어떤 <span class="mark">고민</span>이<br>마음에 있으신가요?';
  $('#greeting').innerHTML = greeting;
}

/* ─────────────────────────────────────────────
   감정 버튼
   ───────────────────────────────────────────── */
function iconSvg(name, vb = 24) {
  return `<svg viewBox="0 0 ${vb} ${vb}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function renderMood() {
  const grid = $('#moodGrid');
  if (!grid) return;
  grid.innerHTML = EMOTIONS.map(e => `
    <button type="button" class="mood" data-emotion="${e.id}" aria-pressed="false">
      <span class="m-icon">${iconSvg(e.icon)}</span>
      <span>${escapeHtml(emotionLabel(e, state.lang))}</span>
    </button>`).join('');
  syncMood();
}

function onMoodClick(ev) {
  const btn = ev.target.closest('.mood');
  if (!btn) return;
  const id = btn.dataset.emotion;
  state.emotion = state.emotion === id ? null : id;
  syncMood();
  syncSaveBtn();
}
function syncMood() {
  $$('.mood').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.emotion === state.emotion)));
}

/* ─────────────────────────────────────────────
   저장 버튼 상태
   ───────────────────────────────────────────── */
function syncSaveBtn() {
  const btn = $('#saveBtn');
  const filled = state.text.trim().length > 0 || !!state.emotion;
  btn.disabled = !filled;
  btn.setAttribute('aria-disabled', String(!filled));
}

/* ─────────────────────────────────────────────
   익명 사용량 집계 (GA4 · G-VLVJEWR7X3)
   ─────────────────────────────────────────────
   버튼을 눌렀다는 사실만 셉니다. 고민 본문·이름·연락처 같은
   개인 정보는 어떤 경우에도 보내지 않습니다. */
function trackEvent(name, params) {
  try {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  } catch (err) { /* 집계 실패가 화면을 막지 않게 */ }
}
function trackLetterCreated(entry) {
  trackEvent('stillwater_letter_created', { emotion: (entry && entry.emotionLabel) || '선택 없음' });
}
function trackSongClick(entry) {
  trackEvent('stillwater_song_click', {
    emotion: (entry && entry.emotionLabel) || '선택 없음',
    song: (entry && entry.song && entry.song.id) || 'unknown'
  });
}
function trackKakaoOpen(type) {
  trackEvent('stillwater_kakao_open', { type: type === 'talk' ? 'talk' : 'prayer' });
}

/* ─────────────────────────────────────────────
   저장 → 위로 카드
   ───────────────────────────────────────────── */
function onSave() {
  const text = state.text.trim();
  if (!text && !state.emotion) {
    const btn = $('#saveBtn');
    btn.classList.remove('nudge');
    void btn.offsetWidth;
    btn.classList.add('nudge');
    toast(ui('emptySave'));
    $('#diaryText').focus();
    return;
  }

  const built = compose(state.emotion, text, {
    lang: state.lang,
    excludeSong: state.entries[0] && state.entries[0].song ? state.entries[0].song.id : null
  });
  const entry = {
    id: `e${Date.now()}${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    lang: built.lang,
    emotionId: built.emotionId,
    emotionLabel: built.emotionLabel,
    text,
    letter: built.letter,
    verse: built.verse,
    song: built.song,
    topics: built.topics,
    crisis: hasCrisisSignal(text)
  };

  state.entries.unshift(entry);
  const ok = saveEntries(state.entries);
  if (!ok) toast(ui('storageBlocked'));

  state.text = '';
  state.emotion = null;
  const ta = $('#diaryText');
  ta.value = '';
  ta.style.height = '';
  updateCharCount();
  syncMood();
  syncSaveBtn();

  state.fromJournal = false;
  renderComfort(entry, { fresh: true });
  show('comfort');
  window.scrollTo(0, 0);
  renderJournal();
  trackLetterCreated(entry);
}

/* ─────────────────────────────────────────────
   찬양 링크
   ───────────────────────────────────────────── */
function songUrl(song, lang) {
  if (song && typeof song.youtubeUrl === 'string' && /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/.test(song.youtubeUrl)) {
    return song.youtubeUrl;
  }
  // 예전에 저장해둔 기록(곡 주소가 없던 시절)은 유튜브 검색으로 이어줍니다.
  const tail = (lang || state.lang) === 'en' ? 'worship' : '찬양';
  const q = encodeURIComponent(`${(song && song.title) || ''} ${(song && song.artist) || ''} ${tail}`.trim());
  return `https://www.youtube.com/results?search_query=${q}`;
}

function comfortMarkup(entry, opts = {}) {
  const l = entry.lang === 'en' ? 'en' : 'ko';
  const dateStr = fullDate(new Date(entry.createdAt), l);
  const topics = (entry.topics || []).map(t => `<span class="tag tag-ghost">#${escapeHtml(t)}</span>`).join('');
  const letterHtml = entry.letter.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  const written = entry.text
    ? `<p class="letter-quote">“${escapeHtml(entry.text.length > 90 ? entry.text.slice(0, 90) + '…' : entry.text)}”</p>`
    : '';

  return `
    <article class="comfort-card">
      <div class="card-tape" aria-hidden="true"></div>
      <header class="card-head">
        <p class="card-eyebrow">${opts.fresh ? ui('cardToday', l) : ui('cardThen', l)}</p>
        <p class="card-date">${dateStr}</p>
        <h2 class="card-title">${ui('cardTitle', l)}</h2>
        <div class="card-tags">
          <span class="tag">${escapeHtml(entry.emotionLabel)}</span>
          ${topics}
        </div>
      </header>

      <div class="rule-dashed" aria-hidden="true"></div>

      ${written}

      <div class="letter">
        ${letterHtml}
        <p class="letter-sign">${escapeHtml(ui('cardSign', l))}</p>
      </div>

      <section class="verse">
        <p class="mini-label">${escapeHtml(ui('cardVerse', l))}</p>
        <blockquote>${escapeHtml(entry.verse.text)}</blockquote>
        <cite>${escapeHtml(entry.verse.ref)}</cite>
      </section>

      <a class="song" href="${escapeHtml(songUrl(entry.song, l))}" target="_blank" rel="noopener noreferrer"
         data-song-id="${escapeHtml(entry.song.id)}"
         aria-label="${escapeHtml(fill(ui('songAria', l), { title: entry.song.title }))}">
        <span class="song-icon" aria-hidden="true">♪</span>
        <span class="song-body">
          <span class="mini-label">${escapeHtml(ui('cardSong', l))}</span>
          <span class="song-title">${escapeHtml(entry.song.title)}<span>${escapeHtml(entry.song.artist)}</span></span>
          <span class="song-why">${escapeHtml(entry.song.why)}</span>
          <span class="song-listen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.4v13.2L19 12z"/></svg>${escapeHtml(ui('cardListen', l))}</span>
        </span>
      </a>

      <button class="copy-btn" type="button" data-action="copy">
        ${iconSvg('copy')} ${escapeHtml(ui('cardCopy', l))}
      </button>

      <div class="card-sprig" aria-hidden="true">${iconSvg('sprig', 48)}</div>
    </article>

    ${entry.crisis ? safetyMarkup(l) : ''}

    <div class="connect">
      <p class="connect-lead">${escapeHtml(ui('connectLead', l))}</p>
      <button class="connect-btn" type="button" data-connect="prayer">
        <span class="ci" aria-hidden="true">💌</span>
        <span><b>${escapeHtml(ui('connectPrayerTitle', l))}</b><i>${escapeHtml(ui('connectPrayerDesc', l))}</i></span>
      </button>
      <button class="connect-btn talk" type="button" data-connect="talk">
        <span class="ci" aria-hidden="true">🌱</span>
        <span><b>${escapeHtml(ui('connectTalkTitle', l))}</b><i>${escapeHtml(ui('connectTalkDesc', l))}</i></span>
      </button>
      <p class="privacy">${iconSvg('lock')} ${escapeHtml(ui('privacy', l))}</p>
    </div>`;
}

function renderComfort(entry, opts = {}) {
  state.current = entry;
  state.cardOpts = opts;
  const l = entry.lang === 'en' ? 'en' : 'ko';
  $('#comfortBody').innerHTML = comfortMarkup(entry, opts);
  $('#savedPill').hidden = !opts.fresh;
  $('#savedPill').textContent = ui('savedPill', l);
  $('#comfortBackLabel').textContent = state.fromJournal ? ui('backJournal', l) : ui('backWrite', l);
}

/* ─────────────────────────────────────────────
   복사
   ───────────────────────────────────────────── */
function entryToText(entry) {
  const l = entry.lang === 'en' ? 'en' : 'ko';
  const dateStr = fullDate(new Date(entry.createdAt), l);
  const lines = [
    ui('summaryHead', l),
    `${dateStr}`,
    `${entry.emotionLabel}`,
    '',
    ...entry.letter,
    '',
    ui('cardSign', l),
    '',
    ui('textVerse', l),
    entry.verse.text,
    `(${entry.verse.ref})`,
    '',
    ui('textSong', l),
    `${entry.song.title} — ${entry.song.artist}`,
    entry.song.why,
    songUrl(entry.song, l)
  ];
  return lines.join('\n');
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) { /* 아래 fallback */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.fontSize = '16px';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (err) {
    return false;
  }
}

async function copyEntry(entry) {
  const ok = await copyText(entryToText(entry));
  const l = entry.lang === 'en' ? 'en' : 'ko';
  toast(ok ? ui('copyDone', l) : ui('copyFail', l));
}

/* ─────────────────────────────────────────────
   내 기록
   ───────────────────────────────────────────── */
function renderJournal() {
  const list = $('#journalList');
  const empty = $('#journalEmpty');
  const foot = $('#journalFoot');
  const lead = $('#journalLead');
  const l = state.lang;

  if (!state.entries.length) {
    list.innerHTML = '';
    empty.hidden = false;
    foot.hidden = true;
    lead.textContent = ui('journalEmpty', l);
    return;
  }
  empty.hidden = true;
  foot.hidden = false;
  let countText = fill(ui('journalCount', l), { n: state.entries.length });
  if (l === 'en' && state.entries.length === 1) countText = 'One worry is resting here so far.';
  lead.textContent = countText;

  list.innerHTML = state.entries.map(e => {
    const d = new Date(e.createdAt);
    const mood = e.emotionLabel || ui('journalNoWords', l);
    const body = e.text
      ? escapeHtml(e.text)
      : `<span style="color:var(--muted)">${escapeHtml(ui('journalNoWords', l))}</span>`;
    return `
      <div class="journal-item" role="button" tabindex="0" data-id="${e.id}" aria-label="${escapeHtml(fill(ui('journalOpenAria', l), { date: fullDate(d, l) }))}">
        <div class="ji-top">
          <span class="ji-date">${escapeHtml(shortDate(d, l))}</span>
          <span class="ji-mood">${escapeHtml(mood)}</span>
        </div>
        <p class="ji-text">${body}</p>
        <p class="ji-verse">${escapeHtml(e.verse.ref)}</p>
        <button class="ji-del" type="button" data-del="${e.id}" aria-label="${escapeHtml(ui('journalDeleteAria', l))}">${iconSvg('trash')}</button>
      </div>`;
  }).join('');

  if (!list.dataset.wired) {
    list.dataset.wired = '1';
    list.addEventListener('click', ev => {
      const del = ev.target.closest('[data-del]');
      if (del) {
        ev.stopPropagation();
        openConfirm(del.dataset.del);
        return;
      }
      const item = ev.target.closest('.journal-item');
      if (item) openEntry(item.dataset.id);
    });
    list.addEventListener('keydown', ev => {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      if (ev.target.closest('[data-del]')) return;
      const item = ev.target.closest('.journal-item');
      if (item) { ev.preventDefault(); openEntry(item.dataset.id); }
    });
  }
}

function openEntry(id) {
  const entry = state.entries.find(e => e.id === id);
  if (!entry) {
    toast(ui('entryMissing'));
    renderJournal();
    return;
  }
  state.fromJournal = true;
  renderComfort(entry, { fresh: false });
  show('comfort');
  window.scrollTo(0, 0);
}

function deleteEntry(id) {
  state.entries = state.entries.filter(e => e.id !== id);
  saveEntries(state.entries);
  renderJournal();
  closeSheet();
  toast(ui('deleted'));
}

/* ─────────────────────────────────────────────
   연결 시트
   ───────────────────────────────────────────── */
function summaryOf(entry) {
  const l = entry.lang === 'en' ? 'en' : 'ko';
  const dateStr = fullDate(new Date(entry.createdAt), l);
  let body = entry.text.replace(/\s+/g, ' ').trim();
  if (!body) body = ui('summaryEmptyText', l);
  if (body.length > 220) body = body.slice(0, 220) + '…';
  return [
    ui('summaryHead', l),
    `${dateStr} · ${entry.emotionLabel}`,
    '',
    ui('summaryWhat', l),
    `"${body}"`,
    '',
    fill(ui('summaryVerse', l), { ref: entry.verse.ref })
  ].join('\n');
}

function sheetConf(type, lang) {
  if (type === 'talk') {
    return { emoji: '🌱', cls: 'talk', title: ui('sheetTalkTitle', lang), desc: ui('sheetTalkDesc', lang), primary: ui('sheetPrimary', lang) };
  }
  return { emoji: '💌', cls: '', title: ui('sheetPrayerTitle', lang), desc: ui('sheetPrayerDesc', lang), primary: ui('sheetPrimary', lang) };
}

function openSheet(type, entry) {
  state.sheet = { type, entry };
  state.restoreFocus = document.activeElement;
  const conf = sheetConf(type, state.lang);
  if (!conf) return;
  const l = state.lang;

  const host = CONTACT_URL
    ? `<p class="sheet-note">${fill(ui('sheetHost', l), { url: CONTACT_URL })}</p>`
    : `<p class="sheet-note">${ui('sheetHostNone', l)}</p>`;

  $('#sheetBody').innerHTML = `
    <button class="sheet-close" type="button" data-sheet-close aria-label="${escapeHtml(ui('sheetClose', l))}">✕</button>
    <div class="sheet-emoji ${conf.cls}" aria-hidden="true">${conf.emoji}</div>
    <h3 id="sheetTitle">${escapeHtml(conf.title)}</h3>
    <p class="sheet-desc">${escapeHtml(conf.desc)}</p>
    <p class="sheet-preview-label">${escapeHtml(ui('sheetPreviewLabel', l))}</p>
    <div class="sheet-preview">${escapeHtml(summaryOf(entry))}</div>
    <div class="sheet-guide">
      <p class="sheet-guide-title">${ui('sheetGuideTitle', l)}</p>
      <ul class="sheet-guide-list">
        <li><span class="num" aria-hidden="true">①</span>${escapeHtml(ui('sheetGuide1', l))}</li>
        <li><span class="num" aria-hidden="true">②</span>${escapeHtml(ui('sheetGuide2', l))}</li>
        <li><span class="num" aria-hidden="true">③</span>${escapeHtml(ui('sheetGuide3', l))}</li>
      </ul>
    </div>
    <div class="sheet-actions">
      <button class="sheet-primary" type="button" data-send="${type}">${escapeHtml(conf.primary)}</button>
      <button class="sheet-secondary" type="button" data-sheet-close>${escapeHtml(ui('sheetSecondary', l))}</button>
    </div>
    <p class="sheet-note">${escapeHtml(ui('sheetNote', l))}</p>
    ${host}
  `;
  $('#sheetBackdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#sheet').scrollTop = 0;
  setTimeout(() => {
    const first = $('#sheetBody .sheet-primary');
    if (first) first.focus({ preventScroll: true });
  }, 120);
}

function closeSheet() {
  $('#sheetBackdrop').hidden = true;
  document.body.style.overflow = '';
  state.sheet = null;
  if (state.restoreFocus && state.restoreFocus.focus) {
    try { state.restoreFocus.focus({ preventScroll: true }); } catch (err) {}
  }
  state.restoreFocus = null;
}

async function sendSummary(type) {
  const entry = state.sheet && state.sheet.entry;
  if (!entry) return;
  // 버튼을 눌렀다는 사실은 복사·이동 결과와 상관없이 한 번 셉니다.
  trackKakaoOpen(type);
  const summary = summaryOf(entry);

  // 새 창을 먼저 열어 팝업 차단에 걸리지 않게 합니다.
  let win = null;
  if (CONTACT_URL) {
    try {
      win = window.open(CONTACT_URL, '_blank');
      if (win) win.opener = null;
    } catch (err) { win = null; }
  }

  const ok = await copyText(summary);
  closeSheet();

  if (ok && win) toast(ui('connectCopiedWindow'));
  else if (ok && !win) toast(ui('connectCopiedNoWindow'));
  else if (!ok) toast(ui('connectCopyFail'));
}

/* ─────────────────────────────────────────────
   삭제 확인
   ───────────────────────────────────────────── */
function openConfirm(id) {
  state.restoreFocus = document.activeElement;
  const entry = state.entries.find(e => e.id === id);
  state.sheet = { type: 'confirm', entry };
  const l = state.lang;
  const when = entry ? fullDate(new Date(entry.createdAt), l) : '';
  $('#sheetBody').innerHTML = `
    <button class="sheet-close" type="button" data-sheet-close aria-label="${escapeHtml(ui('sheetClose', l))}">✕</button>
    <h3 id="sheetTitle" style="margin-top:6px">${escapeHtml(ui('confirmTitle', l))}</h3>
    <p class="confirm-text">${escapeHtml(fill(ui('confirmBody', l), { date: when }))}</p>
    <div class="confirm-row">
      <button class="ghost-btn" type="button" data-sheet-close>${escapeHtml(ui('confirmCancel', l))}</button>
      <button class="danger-btn" type="button" data-confirm-del="${id}">${escapeHtml(ui('confirmDelete', l))}</button>
    </div>
  `;
  $('#sheetBackdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const b = $('#sheetBody .ghost-btn');
    if (b) b.focus({ preventScroll: true });
  }, 120);
}

/* ─────────────────────────────────────────────
   토스트
   ───────────────────────────────────────────── */
let toastTimer = null;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
}

/* ─────────────────────────────────────────────
   유틸
   ───────────────────────────────────────────── */
function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─────────────────────────────────────────────
   이벤트 연결
   ───────────────────────────────────────────── */
function updateCharCount() {
  const el = $('#charCount');
  if (!el) return;
  const ta = $('#diaryText');
  const n = ((ta && ta.value) || '').trim().length;
  if (state.lang === 'en') el.textContent = n === 1 ? '1 character' : `${n} characters`;
  else el.textContent = `${n}자`;
}

function wire() {
  const ta = $('#diaryText');
  ta.addEventListener('input', () => {
    state.text = ta.value;
    updateCharCount();
    syncSaveBtn();
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight + 2, 460) + 'px';
  });
  ta.addEventListener('keydown', ev => {
    if ((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter') { ev.preventDefault(); onSave(); }
  });

  $('#saveBtn').addEventListener('click', onSave);

  $('#clearBtn').addEventListener('click', () => {
    if (!ta.value && !state.emotion) return;
    if (ta.value && !confirm(ui('clearConfirm'))) return;
    ta.value = '';
    state.text = '';
    state.emotion = null;
    updateCharCount();
    ta.style.height = '';
    syncMood();
    syncSaveBtn();
    ta.focus();
  });

  const moodGrid = $('#moodGrid');
  if (moodGrid) moodGrid.addEventListener('click', onMoodClick);

  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang === 'en' ? 'en' : 'ko';
      if (next === state.lang) return;
      saveLang(next);
      applyLang(next);
    });
  });

  $('#comfortBack').addEventListener('click', () => {
    if (state.fromJournal) { renderJournal(); show('journal'); }
    else { show('write'); }
  });

  $$('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab === 'journal') renderJournal();
      show(tab);
      syncSaveBtn();
    });
  });

  $('#comfortBody').addEventListener('click', ev => {
    const entry = state.current;
    if (!entry) return;
    if (ev.target.closest('[data-action="copy"]')) { copyEntry(entry); return; }
    if (ev.target.closest('.song')) trackSongClick(entry);
    const connectBtn = ev.target.closest('[data-connect]');
    if (connectBtn) openSheet(connectBtn.dataset.connect, entry);
  });

  $('#sheetBackdrop').addEventListener('click', ev => {
    if (ev.target.id === 'sheetBackdrop') closeSheet();
    const closeBtn = ev.target.closest('[data-sheet-close]');
    if (closeBtn) { closeSheet(); return; }
    if (ev.target.closest('[data-kakao-direct]')) trackKakaoOpen(state.sheet && state.sheet.type);
    const send = ev.target.closest('[data-send]');
    if (send) { sendSummary(send.dataset.send); return; }
    const del = ev.target.closest('[data-confirm-del]');
    if (del) { deleteEntry(del.dataset.confirmDel); }
  });

  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && !$('#sheetBackdrop').hidden) closeSheet();
    if (ev.key === 'Tab' && !$('#sheetBackdrop').hidden) {
      const focusables = $$('#sheet button, #sheet a[href]');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });

  window.addEventListener('resize', () => {
    const t = $('#diaryText');
    if (t && t.value) { t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight + 2, 460) + 'px'; }
  });
}

/* ─────────────────────────────────────────────
   언어 전환 (한국어 · English)
   ─────────────────────────────────────────────
   1) 저장된 선택(localStorage) → 2) 주소의 ?lang=en / ?lang=ko → 3) 기본 한국어.
   화면 문구·감정 이름·날짜가 함께 바뀝니다. 이미 담아둔 편지는 그때의 언어로 남습니다. */
const LANG_KEY = 'stillwater.lang.v1';

function readLang() {
  let search = '';
  try { search = (window.location && window.location.search) || ''; } catch (err) { search = ''; }
  const m = /[?&]lang=(ko|en)(?:&|$)/.exec(search);
  if (m) { saveLang(m[1]); return m[1]; }
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'ko') return saved;
  } catch (err) { /* 저장소를 못 쓰면 기본 한국어 */ }
  return 'ko';
}

function saveLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang === 'en' ? 'en' : 'ko'); } catch (err) { }
}

function applyLang(lang) {
  state.lang = lang === 'en' ? 'en' : 'ko';
  const l = state.lang;
  document.documentElement.lang = l;
  document.title = l === 'en' ? 'Still Water · Anonymous Counseling' : 'Still Water · 익명 고민 상담소';

  $$('.lang-btn').forEach(b => {
    const on = b.dataset.lang === l;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  $$('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n, l); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = ui(el.dataset.i18nHtml, l); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = ui(el.dataset.i18nPlaceholder, l); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', ui(el.dataset.i18nAria, l)); });

  paintHeader();
  renderMood();
  renderJournal();
  updateCharCount();
  syncSaveBtn();
  if (state.current && state.view === 'comfort') renderComfort(state.current, state.cardOpts || {});
  if (!$('#sheetBackdrop').hidden) closeSheet();
}

/* ─────────────────────────────────────────────
   시작
   ───────────────────────────────────────────── */
function init() {
  state.entries = loadEntries();
  state.lang = readLang();
  wire();
  applyLang(state.lang);
  syncSaveBtn();
  show('write');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

/* ============================================================
   Restore · 익명 고민 상담소  (app.js)
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
   ───────────────────────────────────────────── */
const SONGS = {
  /* 지침·번아웃 */
  t1: { title: '주 은혜임을', artist: '손경민', why: '내가 잘해서가 아니라 은혜로 여기 있다는 말이, 힘을 빼게 해요.', youtubeUrl: 'https://www.youtube.com/watch?v=7kuBu5Qa3PA' },
  t2: { title: '나의 한숨을 바꾸셨네', artist: '마커스워십', why: '한숨이 많았던 마음을 노래가 먼저 알아주는 것 같아요.', youtubeUrl: 'https://www.youtube.com/watch?v=H79FL5F4Mak' },
  t3: { title: '지금까지 지내온 것', artist: '찬송가 301장', why: '지나온 날을 천천히 돌아보며 듣기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=YHIpJDIjEOU' },
  t4: { title: '내 영혼이 은총 입어', artist: '찬송가 438장', why: '무거운 마음을 잠시 내려놓게 하는 오래된 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=jLuhZ5o_yUM' },
  t5: { title: '내게 강 같은 평화', artist: '마커스워십', why: '강물처럼 잔잔한 후렴이 마음을 천천히 식혀줘요.', youtubeUrl: 'https://www.youtube.com/watch?v=kh87d5UPggE' },

  /* 불안·걱정 */
  a1: { title: '은혜 아니면', artist: '손경민', why: '설명이 필요 없는 가사라, 생각을 잠시 멈추고 듣기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=nmafBfCphMA' },
  a2: { title: '나의 영혼이 잠잠히', artist: '송정미', why: '생각이 많아지는 밤에, 숨을 고르게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=9P10OV1EXkQ' },
  a3: { title: '아무것도 두려워 말라', artist: '마커스워십', why: '두려움이 클수록 천천히 들으면 좋은 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=S0IsVcwuyrc' },
  a4: { title: 'It Is Well With My Soul', artist: 'Horatio Spafford', why: '큰 상처를 지나온 사람이 쓴 노래라, 말없이 들을 수 있어요.', youtubeUrl: 'https://www.youtube.com/watch?v=Eg5O2y1UXw4' },
  a5: { title: '너 두려워 말라', artist: '팀룩워십', why: '불안한 마음을 시편 말씀으로 안아주는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=mfre6TzL2Y8' },

  /* 외로움 */
  l1: { title: '주와 같이 길 가는 것', artist: '찬송가 430장', why: '혼자 걷는 길이 아니라는 말이 담긴 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=L3yTtn11FM0' },
  l2: { title: '주 사랑이 나를 숨쉬게 해', artist: '마커스워십', why: '혼자인 것 같은 저녁에 작게 틀어두기 좋아요.', youtubeUrl: 'https://www.youtube.com/watch?v=CkuqnIx11L8' },
  l3: { title: '주 나와 함께 하시니', artist: 'WELOVE', why: '시편 23편이 그대로 노래가 되어, 빈방에서도 곁에 누가 있는 것 같아요.', youtubeUrl: 'https://www.youtube.com/watch?v=5X4jDVpL0c4' },
  l4: { title: '우리 함께 기도해', artist: '마커스워십', why: '누군가와 함께 있다는 마음이 들게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=Hgai34-0f8o' },
  l5: { title: '내 주를 가까이 하게 함은', artist: '찬송가 338장', why: '조용히 곁에 있는 느낌을 주는 오래된 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=9FNMj1rPU2c' },

  /* 상처·서운함 */
  h1: { title: '나 같은 죄인 살리신', artist: '찬송가 305장', why: '가장 낮은 자리에서도 불릴 수 있는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=SfUoRQy-LH4' },
  h2: { title: '예수 사랑하심은', artist: '찬송가 563장', why: '상처 입은 마음을 가장 단순한 문장으로 안아주는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=3XQ8NlJOBr4' },
  h3: { title: '그 사랑', artist: '마커스워십', why: '받은 사랑을 다시 세어보게 되는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=5TroLBvlyp4' },
  h4: { title: '당신은 사랑받기 위해 태어난 사람', artist: '러브', why: '그 말이 오늘은 당신에게도 그대로 들리기를 바라요.', youtubeUrl: 'https://www.youtube.com/watch?v=v7QWV8sv66M' },
  h5: { title: '그 사랑 얼마나', artist: '박지현', why: '서운한 마음이 조금씩 풀어지는, 다정한 가사의 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=lQHl6wXVQtY' },

  /* 막막함 */
  k1: { title: '주님의 시간에', artist: '마커스워십', why: '조급한 마음을 잠시 내려놓게 하는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=PJ_CLfu3GjI' },
  k2: { title: '광야를 지나며', artist: '마커스워십', why: '지금이 광야 같아도 지나가는 길이라고 말해주는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=OrU7QsoOvMw' },
  k3: { title: '모든 상황 속에서', artist: '마커스워십', why: '어떤 형편에서도 감사로 돌아서게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=Ipa_vptcy7o' },
  k4: { title: '선한 능력으로', artist: '마커스워십', why: '힘을 내라는 말 대신, 조용히 기대게 되는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=vG_E39ZYAjs' },
  k5: { title: '길을 만드시는 주', artist: '마커스워십', why: '막힌 자리에서도 길을 내시는 분을 노래한 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=W9JMKBH6HQU' },

  /* 감사·평안 */
  g1: { title: '오 신실하신 주', artist: '찬송가 393장', why: '아침마다 새로워지는 은혜를 노래한 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=IkaGz2r8xi8' },
  g2: { title: '감사 위에 감사', artist: '마커스워십', why: '감사한 마음이 더 크게 번지게 하는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=KWxH0LZMbT0' },
  g3: { title: '감사함으로', artist: '마커스워십', why: '평범한 하루도 감사로 바라보게 하는 곡이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=ExeiRWu-4xc' },
  g4: { title: '날 구원하신 주 감사', artist: '마커스워십', why: '지나온 날을 돌아보며 감사하게 되는 노래예요.', youtubeUrl: 'https://www.youtube.com/watch?v=1hUfF_634_k' },
  g5: { title: '주 하나님 지으신 모든 세계', artist: '찬송가 79장', why: '창밖을 한 번 보게 되는, 넓은 마음의 찬송이에요.', youtubeUrl: 'https://www.youtube.com/watch?v=IhJHSXc3iDg' }
};

/* 고민 상황(주제)마다 다른 찬양이 나오도록 감정별 주제 → 곡 묶음
   (키: '감정id/주제라벨', 값: 그 상황에 어울리는 곡 id 2~3개)
   여기에 없는 주제는 그 감정의 기본 곡 묶음(emotion.songs)에서 고릅니다. */
const TOPIC_SONGS = {
  'tired/회사':        ['t3', 't2'],
  'tired/공부':        ['t2', 't1'],
  'tired/돌봄':        ['t1', 't5'],
  'tired/가르치는 일': ['t2', 't4'],
  'tired/잠':          ['t5', 't4'],
  'tired/생활':        ['t3', 't1'],

  'anxious/기다림': ['a2', 'a1'],
  'anxious/건강':   ['a4', 'a5'],
  'anxious/생활':   ['a1', 'a3'],
  'anxious/잠':     ['a2', 'a4'],
  'anxious/결정':   ['a3', 'a1'],
  'anxious/가족':   ['a5', 'a2'],

  'lonely/관계': ['l4', 'l3'],
  'lonely/혼자': ['l2', 'l3'],
  'lonely/가족': ['l1', 'l5'],
  'lonely/이별': ['l2', 'l1'],
  'lonely/신앙': ['l5', 'l4'],

  'hurt/말':        ['h2', 'h4'],
  'hurt/가까운 사이': ['h3', 'h5'],
  'hurt/믿음':      ['h1', 'h3'],
  'hurt/이별':      ['h5', 'h3'],
  'hurt/어린 날':   ['h4', 'h2'],

  'stuck/진로': ['k1', 'k5'],
  'stuck/공부': ['k2', 'k1'],
  'stuck/일':   ['k3', 'k5'],
  'stuck/신앙': ['k4', 'k1'],
  'stuck/결정': ['k1', 'k3'],

  'grateful/감사': ['g2', 'g3'],
  'grateful/사람': ['g4', 'g2'],
  'grateful/신앙': ['g1', 'g5'],
  'grateful/수고': ['g3', 'g4'],
  'grateful/쉼':   ['g1', 'g5']
};

/* ─────────────────────────────────────────────
   오늘의 마음 (감정 6가지 + 키워드별 한마디)
   ───────────────────────────────────────────── */
const EMOTIONS = [
  {
    id: 'tired', label: '지침·번아웃', icon: 'leaf',
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
    songs: ['t1', 't2', 't3', 't4', 't5'],
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
    songs: ['a1', 'a2', 'a3', 'a4', 'a5'],
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
    songs: ['l1', 'l2', 'l3', 'l4', 'l5'],
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
    songs: ['h1', 'h2', 'h3', 'h4', 'h5'],
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
    songs: ['k1', 'k2', 'k3', 'k4', 'k5'],
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
    songs: ['g1', 'g2', 'g3', 'g4', 'g5'],
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
   상태
   ───────────────────────────────────────────── */
const state = {
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
    h: d.getHours()
  };
}
function fullDate(d = new Date()) {
  const p = parts(d);
  return `${p.y}년 ${p.m}월 ${p.d}일 ${p.w}`;
}
function shortDate(d = new Date()) {
  const p = parts(d);
  return `${p.m}월 ${p.d}일 ${p.w}`;
}

/* ─────────────────────────────────────────────
   위로 내용 만들기
   ───────────────────────────────────────────── */
function normalize(str) {
  return (str || '').replace(/\s+/g, '').toLowerCase();
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

function hasCrisisSignal(text) {
  const flat = normalize(text);
  if (!flat) return false;
  return CRISIS_KEYS.some(k => flat.includes(normalize(k)));
}

function safetyMarkup() {
  return `
    <aside class="safety" aria-label="위기 상황 안내">
      <div class="safety-top">
        <span class="safety-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><use href="#i-heart"/></svg>
        </span>
        <div>
          <p class="safety-title">오늘 마음이 많이 무거워 보여서요</p>
          <p class="safety-body">혼자 안고 있지 않으셔도 돼요. 이름을 밝히지 않아도, 지금 바로 이야기할 수 있는 곳이 있어요.</p>
        </div>
      </div>
      <a class="safety-line" href="tel:109">
        <span class="sl-num">109</span>
        <span class="sl-text"><b>자살예방 상담전화</b><i>24시간 · 무료 · 익명으로도 괜찮아요</i></span>
      </a>
      <a class="safety-line" href="tel:119">
        <span class="sl-num">119</span>
        <span class="sl-text"><b>지금 위험한 순간이라면</b><i>구급 · 구조 · 긴급 상담</i></span>
      </a>
      <a class="safety-line" href="tel:112">
        <span class="sl-num">112</span>
        <span class="sl-text"><b>경찰 긴급 신고</b><i>몸이 위험하다고 느껴질 때</i></span>
      </a>
      <p class="safety-note">이곳은 위로를 건네는 공간이에요. 전문 상담을 대신하지는 않아요. 가까운 사람에게 지금 이 화면을 보여주셔도 좋습니다.</p>
    </aside>`;
}

function detectTopics(emo, text) {
  const flat = normalize(text);
  if (!flat) return [];
  const found = [];
  emo.topics.forEach(t => {
    if (found.length >= 2) return;
    const hit = t.keys.some(k => flat.includes(normalize(k)));
    if (hit) found.push(t);
  });
  return found;
}

function guessEmotion(text) {
  const flat = normalize(text);
  if (!flat) return null;
  let best = null;
  let bestScore = 0;
  EMOTIONS.forEach(emo => {
    let score = 0;
    emo.topics.forEach(t => {
      t.keys.forEach(k => { if (flat.includes(normalize(k))) score += 1; });
    });
    if (score > bestScore) { bestScore = score; best = emo; }
  });
  return best;
}

function pickSong(emo, topics, seed, excludeId) {
  const pinned = topics.map(t => TOPIC_SONGS[`${emo.id}/${t.label}`]).find(list => list && list.length);
  let pool = (pinned && pinned.length) ? pinned.slice() : emo.songs.slice();
  // 같은 감정이 이어질 때 바로 앞 곡이 또 나오지 않도록 (묶음에 여유가 있을 때만)
  if (excludeId && pool.length > 1) {
    const rest = pool.filter(id => id !== excludeId);
    if (rest.length) pool = rest;
  }
  const id = pool[mix(seed + 101) % pool.length] || emo.songs[0];
  return { id, ...SONGS[id] };
}

function compose(emotionId, text, opts = {}) {
  let emo = EMOTIONS.find(e => e.id === emotionId) || null;
  if (!emo) emo = guessEmotion(text) || NEUTRAL;

  const seed = (hash(text || '') + hash(fullDate()) + hash(emo.id || '')) >>> 0;
  const variant = mix(seed) % emo.letters.length;
  const topics = detectTopics(emo, text);

  const base = emo.letters[variant].slice();
  const letter = [];
  base.forEach((line, i) => {
    letter.push(line);
    if (i === 0 && topics.length) letter.push(topics[0].line);
  });

  const verseId = (topics.find(t => t.verse) || {}).verse
    || emo.verses[mix(seed + 17) % emo.verses.length];
  const song = pickSong(emo, topics, seed, opts.excludeSong || null);

  return {
    emotionId: emo.id,
    emotionLabel: emo.label,
    letter,
    verse: { ...VERSES[verseId] },
    song,
    topics: topics.map(t => t.label)
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
  $('#todayLine').textContent = fullDate(now);
  $('#topDate').textContent = shortDate(now);

  let greeting;
  if (hour >= 5 && hour < 11) greeting = '오늘 아침, 어떤 <span class="mark">고민</span>이<br>마음에 있으신가요?';
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
  grid.innerHTML = EMOTIONS.map(e => `
    <button type="button" class="mood" data-emotion="${e.id}" aria-pressed="false">
      <span class="m-icon">${iconSvg(e.icon)}</span>
      <span>${e.label}</span>
    </button>`).join('');
  grid.addEventListener('click', ev => {
    const btn = ev.target.closest('.mood');
    if (!btn) return;
    const id = btn.dataset.emotion;
    state.emotion = state.emotion === id ? null : id;
    syncMood();
    syncSaveBtn();
  });
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
   저장 → 위로 카드
   ───────────────────────────────────────────── */
function onSave() {
  const text = state.text.trim();
  if (!text && !state.emotion) {
    const btn = $('#saveBtn');
    btn.classList.remove('nudge');
    void btn.offsetWidth;
    btn.classList.add('nudge');
    toast('아직 아무것도 적지 않으셨어요. 한 줄이면 충분해요.');
    $('#diaryText').focus();
    return;
  }

  const built = compose(state.emotion, text, {
    excludeSong: state.entries[0] && state.entries[0].song ? state.entries[0].song.id : null
  });
  const entry = {
    id: `e${Date.now()}${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
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
  if (!ok) toast('이 브라우저에는 저장이 막혀 있어요. 창을 닫으면 사라질 수 있어요.');

  state.text = '';
  state.emotion = null;
  const ta = $('#diaryText');
  ta.value = '';
  ta.style.height = '';
  $('#charCount').textContent = '0자';
  syncMood();
  syncSaveBtn();

  state.fromJournal = false;
  renderComfort(entry, { fresh: true });
  show('comfort');
  window.scrollTo(0, 0);
  renderJournal();
}

/* ─────────────────────────────────────────────
   찬양 링크
   ───────────────────────────────────────────── */
function songUrl(song) {
  if (song && typeof song.youtubeUrl === 'string' && /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/.test(song.youtubeUrl)) {
    return song.youtubeUrl;
  }
  // 예전에 저장해둔 기록(곡 주소가 없던 시절)은 유튜브 검색으로 이어줍니다.
  const q = encodeURIComponent(`${(song && song.title) || ''} ${(song && song.artist) || ''} 찬양`.trim());
  return `https://www.youtube.com/results?search_query=${q}`;
}

function comfortMarkup(entry, opts = {}) {
  const dateStr = fullDate(new Date(entry.createdAt));
  const topics = (entry.topics || []).map(t => `<span class="tag tag-ghost">#${escapeHtml(t)}</span>`).join('');
  const letterHtml = entry.letter.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  const written = entry.text
    ? `<p class="letter-quote">“${escapeHtml(entry.text.length > 90 ? entry.text.slice(0, 90) + '…' : entry.text)}”</p>`
    : '';

  return `
    <article class="comfort-card">
      <div class="card-tape" aria-hidden="true"></div>
      <header class="card-head">
        <p class="card-eyebrow">${opts.fresh ? '오늘의 위로' : '그날의 위로'}</p>
        <p class="card-date">${dateStr}</p>
        <h2 class="card-title">당신의 고민에<br>건네는 위로</h2>
        <div class="card-tags">
          <span class="tag">${escapeHtml(entry.emotionLabel)}</span>
          ${topics}
        </div>
      </header>

      <div class="rule-dashed" aria-hidden="true"></div>

      ${written}

      <div class="letter">
        ${letterHtml}
        <p class="letter-sign">— Restore 드림</p>
      </div>

      <section class="verse">
        <p class="mini-label">오늘 곁에 두면 좋은 말씀</p>
        <blockquote>${escapeHtml(entry.verse.text)}</blockquote>
        <cite>${escapeHtml(entry.verse.ref)}</cite>
      </section>

      <a class="song" href="${escapeHtml(songUrl(entry.song))}" target="_blank" rel="noopener noreferrer"
         aria-label="유튜브에서 ${escapeHtml(entry.song.title)} 듣기 (새 창)">
        <span class="song-icon" aria-hidden="true">♪</span>
        <span class="song-body">
          <span class="mini-label">함께 들으면 좋은 곡</span>
          <span class="song-title">${escapeHtml(entry.song.title)}<span>${escapeHtml(entry.song.artist)}</span></span>
          <span class="song-why">${escapeHtml(entry.song.why)}</span>
          <span class="song-listen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.4v13.2L19 12z"/></svg>유튜브에서 듣기</span>
        </span>
      </a>

      <button class="copy-btn" type="button" data-action="copy">
        ${iconSvg('copy')} 문구 복사하기
      </button>

      <div class="card-sprig" aria-hidden="true">${iconSvg('sprig', 48)}</div>
    </article>

    ${entry.crisis ? safetyMarkup() : ''}

    <div class="connect">
      <p class="connect-lead">혼자 안고 있기 버거운 고민이라면, 조금 나눠도 괜찮아요.</p>
      <button class="connect-btn" type="button" data-connect="prayer">
        <span class="ci" aria-hidden="true">💌</span>
        <span><b>이 고민, 조용히 기도·답장 받아보기</b><i>이름 밝히지 않아도 괜찮아요 · 함께 기도하고 짧게 답장드려요</i></span>
      </button>
      <button class="connect-btn talk" type="button" data-connect="talk">
        <span class="ci" aria-hidden="true">🌱</span>
        <span><b>누군가와 조금 더 이야기 나누고 싶어요</b><i>익명으로 편하게 · 하고 싶은 이야기를 나눠요</i></span>
      </button>
      <p class="privacy">${iconSvg('lock')} 적으신 고민은 이 기기에만 저장돼요.</p>
    </div>`;
}

function renderComfort(entry, opts = {}) {
  state.current = entry;
  $('#comfortBody').innerHTML = comfortMarkup(entry, opts);
  $('#savedPill').hidden = !opts.fresh;
  $('#comfortBackLabel').textContent = state.fromJournal ? '내 기록으로' : '고민 쓰기로';
}

/* ─────────────────────────────────────────────
   복사
   ───────────────────────────────────────────── */
function entryToText(entry) {
  const dateStr = fullDate(new Date(entry.createdAt));
  const lines = [
    `Restore · 익명 고민 상담소`,
    `${dateStr}`,
    `${entry.emotionLabel}`,
    '',
    ...entry.letter,
    '',
    '— Restore 드림',
    '',
    `[오늘 곁에 두면 좋은 말씀]`,
    entry.verse.text,
    `(${entry.verse.ref})`,
    '',
    `[함께 들으면 좋은 곡]`,
    `${entry.song.title} — ${entry.song.artist}`,
    entry.song.why,
    songUrl(entry.song)
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
  toast(ok ? '편지 전체를 복사했어요. 어디든 붙여넣어 보세요.' : '복사가 되지 않았어요. 길게 눌러 직접 선택해 주세요.');
}

/* ─────────────────────────────────────────────
   내 기록
   ───────────────────────────────────────────── */
function renderJournal() {
  const list = $('#journalList');
  const empty = $('#journalEmpty');
  const foot = $('#journalFoot');
  const lead = $('#journalLead');

  if (!state.entries.length) {
    list.innerHTML = '';
    empty.hidden = false;
    foot.hidden = true;
    lead.textContent = '아직 담아둔 고민이 없어요.';
    return;
  }
  empty.hidden = true;
  foot.hidden = false;
  lead.textContent = `지금까지 ${state.entries.length}번, 고민을 놓아두셨어요.`;

  list.innerHTML = state.entries.map(e => {
    const d = new Date(e.createdAt);
    const mood = e.emotionLabel || '오늘의 마음';
    const body = e.text
      ? escapeHtml(e.text)
      : '<span style="color:var(--muted)">글로 남기지 않은 마음</span>';
    return `
      <div class="journal-item" role="button" tabindex="0" data-id="${e.id}" aria-label="${escapeHtml(fullDate(d))} 고민 열어보기">
        <div class="ji-top">
          <span class="ji-date">${parts(d).m}월 ${parts(d).d}일 ${parts(d).w}</span>
          <span class="ji-mood">${escapeHtml(mood)}</span>
        </div>
        <p class="ji-text">${body}</p>
        <p class="ji-verse">${escapeHtml(e.verse.ref)}</p>
        <button class="ji-del" type="button" data-del="${e.id}" aria-label="이 기록 지우기">${iconSvg('trash')}</button>
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
    toast('이 기록을 찾지 못했어요.');
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
  toast('기록을 지웠어요.');
}

/* ─────────────────────────────────────────────
   연결 시트
   ───────────────────────────────────────────── */
function summaryOf(entry) {
  const dateStr = fullDate(new Date(entry.createdAt));
  let body = entry.text.replace(/\s+/g, ' ').trim();
  if (!body) body = '오늘은 따로 적지 않고, 마음만 담아두었어요.';
  if (body.length > 220) body = body.slice(0, 220) + '…';
  return [
    '[Restore · 익명 고민 상담소]',
    `${dateStr} · ${entry.emotionLabel}`,
    '',
    '오늘 쓴 고민:',
    `"${body}"`,
    '',
    `받은 말씀: ${entry.verse.ref}`
  ].join('\n');
}

const SHEETS = {
  prayer: {
    emoji: '💌',
    cls: '',
    title: '이 고민, 조용히 함께 기도할까요',
    desc: '혼자 버거운 고민, 익명으로 편하게 이야기 나눌 수 있어요. 적어두신 고민을 보내주시면 조용히 함께 기도하고 짧은 답장을 드릴게요. 이름을 밝히지 않으셔도 괜찮아요. 보내고 나서 마음이 바뀌어도 전혀 문제되지 않아요.',
    primary: '요약 복사하고 카톡 열기'
  },
  talk: {
    emoji: '🌱',
    cls: 'talk',
    title: '조금 더 이야기해도 괜찮아요',
    desc: '혼자 버거운 고민이면, 익명으로 편하게 이야기 나눌 수 있어요. 하나님에 대해 궁금한 점이든, 그냥 오늘 있었던 일이든 좋아요. 편한 속도로 이야기해요. 질문이 정리되지 않아도, 그냥 안부만 남기셔도 괜찮습니다.',
    primary: '요약 복사하고 카톡 열기'
  }
};

function openSheet(type, entry) {
  state.sheet = { type, entry };
  state.restoreFocus = document.activeElement;
  const conf = SHEETS[type];
  if (!conf) return;

  const host = CONTACT_URL
    ? `<p class="sheet-note">카카오톡 오픈채팅방으로 이어져요. 창이 열리지 않으면 <a href="${CONTACT_URL}" target="_blank" rel="noopener">여기서 직접 열 수 있어요</a>.</p>`
    : `<p class="sheet-note">연결 창구 주소가 아직 설정되지 않았어요. 요약은 복사되니, 주소를 받으신 뒤 붙여넣어 주세요.</p>`;

  $('#sheetBody').innerHTML = `
    <button class="sheet-close" type="button" data-sheet-close aria-label="닫기">✕</button>
    <div class="sheet-emoji ${conf.cls}" aria-hidden="true">${conf.emoji}</div>
    <h3 id="sheetTitle">${conf.title}</h3>
    <p class="sheet-desc">${conf.desc}</p>
    <p class="sheet-preview-label">이렇게 보내게 돼요</p>
    <div class="sheet-preview">${escapeHtml(summaryOf(entry))}</div>
    <div class="sheet-actions">
      <button class="sheet-primary" type="button" data-send="${type}">${conf.primary}</button>
      <button class="sheet-secondary" type="button" data-sheet-close>지금은 그냥 마음만 담아둘게요</button>
    </div>
    <p class="sheet-note">적으신 고민은 이 기기에만 저장돼요. 복사된 요약은 직접 붙여넣기 전까지 어디에도 전송되지 않아요.</p>
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

  if (ok && win) toast('고민 요약을 복사했어요. 열린 창에 붙여넣어 주세요.');
  else if (ok && !win) toast('고민 요약을 복사했어요. 오픈채팅방을 열어 붙여넣어 주세요.');
  else if (!ok) toast('복사가 되지 않았어요. 안내 창에서 직접 선택해 주세요.');
}

/* ─────────────────────────────────────────────
   삭제 확인
   ───────────────────────────────────────────── */
function openConfirm(id) {
  state.restoreFocus = document.activeElement;
  const entry = state.entries.find(e => e.id === id);
  state.sheet = { type: 'confirm', entry };
  $('#sheetBody').innerHTML = `
    <button class="sheet-close" type="button" data-sheet-close aria-label="닫기">✕</button>
    <h3 id="sheetTitle" style="margin-top:6px">이 기록을 지울까요</h3>
    <p class="confirm-text">${entry ? escapeHtml(fullDate(new Date(entry.createdAt))) : ''}에 담아둔 고민이 완전히 지워져요. 되돌릴 수 없어요.</p>
    <div class="confirm-row">
      <button class="ghost-btn" type="button" data-sheet-close>그대로 둘게요</button>
      <button class="danger-btn" type="button" data-confirm-del="${id}">지우기</button>
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
function wire() {
  const ta = $('#diaryText');
  ta.addEventListener('input', () => {
    state.text = ta.value;
    $('#charCount').textContent = `${ta.value.trim().length}자`;
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
    if (ta.value && !confirm('적으신 글을 지울까요?')) return;
    ta.value = '';
    state.text = '';
    state.emotion = null;
    $('#charCount').textContent = '0자';
    ta.style.height = '';
    syncMood();
    syncSaveBtn();
    ta.focus();
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
    const connectBtn = ev.target.closest('[data-connect]');
    if (connectBtn) openSheet(connectBtn.dataset.connect, entry);
  });

  $('#sheetBackdrop').addEventListener('click', ev => {
    if (ev.target.id === 'sheetBackdrop') closeSheet();
    const closeBtn = ev.target.closest('[data-sheet-close]');
    if (closeBtn) { closeSheet(); return; }
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
   시작
   ───────────────────────────────────────────── */
function init() {
  paintHeader();
  renderMood();
  wire();
  state.entries = loadEntries();
  renderJournal();
  syncSaveBtn();
  show('write');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

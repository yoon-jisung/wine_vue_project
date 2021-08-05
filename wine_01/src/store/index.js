import { createStore } from 'vuex';

export default createStore({
  state: {
    score: {
      ligth: 0,
      bold: 0,
      high: 0,
      low: 0,
      unique: 0,
      Harmony: 0,
    },

    quizTransition: false,
    quizIndex: 0,
    quiz: [
      {
        q: '만족스러운 디너 후, 오너쉐프가 서비스 디저트 취향을 물어본다',
        a: [
          {
            text: '레몬 소르베와 제철 과일',
            score: 1,
            target: 'ligth',
          },
          {
            text: '다크 초콜릿을 올린 크로플',
            score: 1,
            target: 'bold',
          },
        ],
      },
      {
        q: '샐러드 드레싱 취향은?',
        a: [
          {
            text: '드레싱 별로.. 올리브 오일, 소금, 후추만!',
            score: 1,
            target: 'ligth',
          },
          {
            text: '어떤 샐러드? 샐러드에 따라 다양한 드레싱 뿌려볼래',
            score: 1,
            target: 'bold',
          },
        ],
      },
      {
        q: '집에 와인이 없다… 위스키밖에 없다… ',
        a: [
          {
            text: 'On the Rock 위스키는 온더락이지!',
            score: 1,
            target: 'ligth',
          },
          {
            text: 'Straight 위스키는 스트레이트지!',
            score: 1,
            target: 'bold',
          },
        ],
      },

      {
        q: 'WOW 불로소득, 출처도! 제세공과금도 없는! 1,000만원 득템',
        a: [
          {
            text: '눈 여겨둔 명품 FLEX, 같이 내 집으로 가자.',
            score: 1,
            target: 'high',
          },
          {
            text: '이것 저것도 다양하게 알뜰살뜰 다양한 아이템 GET',
            score: 1,
            target: 'low',
          },
        ],
      },
      {
        q: '갑자기 예정에 없던 사고 싶은 물건이 생겼다. 금액이 좀 큰데…',
        a: [
          {
            text: '쇼핑의 적기는 사고싶을 때, 내눈에 보일 때다. 일단 사고본다.',
            score: 1,
            target: 'high',
          },
          {
            text: '이번달 소비 계획에 맞게 다음달에 사도록 하자',
            score: 1,
            target: 'low',
          },
        ],
      },
      {
        q: '내가 가보고 싶은 쇼핑몰은?',
        a: [
          {
            text: '규모는 작지만 리미티드 에디션 위주의 쇼핑몰',
            score: 1,
            target: 'high',
          },
          {
            text: '이세상에 존재하는 모든 종류이 물건이 있는 쇼핑몰',
            score: 1,
            target: 'low',
          },
        ],
      },
      {
        q: '내가 꿈꾸는 휴가는?',
        a: [
          {
            text: '사막 글램핑, 지중해 크루즈, 프라이빗 해변 인피니티풀',
            score: 1,
            target: 'high',
          },
          {
            text: '유럽 10개국 투어, 동남아 어디까지 가봤니? ',
            score: 1,
            target: 'low',
          },
        ],
      },

      {
        q: '코시국 종료! 당신의 술자리 취향은?',
        a: [
          {
            text: '요즘 핫플이 어디더라… ',
            score: 1,
            target: 'unique',
          },
          {
            text: '인원 제한으로 만나지 못했던 친구들과 홈파티',
            score: 1,
            target: 'Harmony',
          },
        ],
      },
      {
        q: '평소 좋아하는 쉐프의 레스토랑 가오픈 기간이다',
        a: [
          {
            text: '예약이 더 힘들기 전에 어서 가본다',
            score: 1,
            target: 'unique',
          },
          {
            text: '음식, 서비스, 스태프의 안정화가 된 후 방문해도 늦지 않다.',
            score: 1,
            target: 'Harmony',
          },
        ],
      },
      {
        q: '음악 플레이리스트 취향은?',
        a: [
          {
            text: 'New Release MIX / Trending MIX',
            score: 1,
            target: 'unique',
          },
          {
            text: 'My MIX / TOP 100 SONGS',
            score: 1,
            target: 'Harmony',
          },
        ],
      },
    ],
    result: {
      title: '좋은 취향은 타고난 와인 미식가',
      subTitle: [
        'Good taste for fine sense',
        'sophisticated style',
        'for better taste, For best Taste',
      ],
      description: [
        '기본적으로 취향이 좋다는 이야기를 많이 들어요. 그거 아시죠? 아무리 공부하고 노력해도 가질 수 없는게 센스와 취향이라는거😘',
        '어떤 모임에서건 앞에 본격적으로는 나서지는 않지만 나서야 할 때는 뒷심있는 존재감으로 결정타를 날릴 줄 아는 사람이예요. 숨겨진 실세랄까요.',
        '새로운 와인에 대한 거부감은 없어요. 일단 시도해 본 뒤 나의 취향에 맞는지 결정하고 선택하는 편이죠. 이건 와인뿐 아니라 라이프스타일 전반에도 적용되는 성향이예요. 그리고 주변 사람들은 세련되고 좋은 취향을 지녔다 생각해요.',
        '섬세하고 디테일한 플레이버를 선호하는 당신은 누군가의 추천, 수상 경력보다는 본인의 와인 경험을 바탕으로 와인 포트폴리오 구성하는 것을 선호해요.',
      ],
      metchWine: {
        red: {
          name: '피보누아',
          keyword: '#1865최상급 #KWC2020베스트칠레 #풀바디',
          tastingNotes: `바이올렛 빛깔의 체리 레드 컬러를 지녔다. 더블 배럴 에이징을 통해 얻어진 허니왁스＊ 플로럴 노트를 동반하는 잘 익은 레드프룻츠의 
            플레이버와 함께 흑후추 등의 스파이시한 향신료＊ 커피＊ 모카 등 촘촘한 아로마 레이어링이 매력적이다. 풀바디로 입 안을 꽉 채우며 스무스한 탄닌과 
            오랫동안 이어지는 롱 피니쉬가 주는 기분좋은 마무리 등 구조감이 매우 훌륭하다.`,
          sellingPoint: '1865 최상급 레인지、 2020 KWC 베스트 칠레 와인!',
        },
        white: {
          name: '소프트 오크터치 아로마',
          keyword: '#샤블리그랑크뤼 #프레쉬 #풍부한풍미',
          tastingNotes: `복숭아류의 프레쉬한 과일향과 자스민＊ 바이올렛의 꽃향기와 시트러스향이 코를 자극한다. 
          석회질의 이회토 특징에서 오는 풍부한 미네랄과 풀바디함을 느낄 수 있다. 약간의 오크 풍미가 끊임없이 입안에 머문다. `,
          sellingPoint: '제 8의 샤블리 그랑 크뤼、 무똔 ',
        },
        Champagne: {
          name: '블랑드블랑 샴페인',
          keyword: '#숨겨진보석 #샴페인 #섬세한버블',
          tastingNotes: `섬세하고 부드러운 버블이 입안을 가득 채운다. 시트러스 계열의 과실향과 파인애플＊ 망고의 과일향이 느껴진다. 
          입 안에서는 풍부한 산도와 리(Lees) 숙성에서 오는 토스트와 구운 빵 향이 조화를 이룬다. `,
          sellingPoint: '크랑크뤼 샴페인',
        },
      },
    },
  },
  mutations: {
    ADD_INDEX(state) {
      state.quizIndex += 1;
      state.quizTransition = false;
    },
    SET_SCORE(state, { target, score }) {
      state.score[target] += score;
    },
    DONE_TRANSITION() {
      state.quizTransition = true;
    },
    RESET(state) {
      Object.keys(state.score).forEach((v) => {
        state.score[v] = 0;
      });
      state.quizIndex = 0;
      state.quizTransition = true;
    },
  },
  actions: {},
  modules: {},
});

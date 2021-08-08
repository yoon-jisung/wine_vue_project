import { createStore } from 'vuex';

export default createStore({
  state: {
    score: {
      ligth: 0,
      heavy: 0,
      high: 0,
      low: 0,
      unique: 0,
      harmony: 0,
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
            target: 'heavy',
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
            target: 'heavy',
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
            target: 'heavy',
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
            target: 'harmony',
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
            target: 'harmony',
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
            target: 'harmony',
          },
        ],
      },
      {
        q: '열린 결말의 영화',
        a: [
          {
            text: '디렉터스 컷이 언제 나오려나…',
            score: 1,
            target: 'unique',
          },
          {
            text: '이후의 상황은 나의 상상대로…',
            score: 1,
            target: 'harmony',
          },
        ],
      },
      {
        q: '와인숍에 들른나..',
        a: [
          {
            text: '와인을 마시는 건 나, 내 취향대로 선택하는 편이다',
            score: 1,
            target: 'unique',
          },
          {
            text: '스태프의 추천과 수상 경력 등을 살펴본다',
            score: 1,
            target: 'harmony',
          },
        ],
      },
      {
        q: '친구의 고민 상담',
        a: [
          {
            text: '대체 이유가 뭔데? 감정에 기대기보다는 해결책을 제시',
            score: 1,
            target: 'unique',
          },
          {
            text: '내가 해결해 줄 수 없는 일. 위로가 먼저',
            score: 1,
            target: 'harmony',
          },
        ],
      },
    ],
    result: {
      type1: {
        c: ['ligth', 'high', 'unique'],
        color: '',
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
            name: '산 페드로, 1865 셀렉티드 콜렉션 피스코 배럴 에이지드',
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
          champagne: {
            name: '블랑드블랑 샴페인',
            keyword: '#숨겨진보석 #샴페인 #섬세한버블',
            tastingNotes: `섬세하고 부드러운 버블이 입안을 가득 채운다. 시트러스 계열의 과실향과 파인애플＊ 망고의 과일향이 느껴진다. 
          입 안에서는 풍부한 산도와 리(Lees) 숙성에서 오는 토스트와 구운 빵 향이 조화를 이룬다. `,
            sellingPoint: '크랑크뤼 샴페인',
          },
        },
      },
      type2: {
        c: ['ligth', 'high', 'harmony'],
        color: '',
        title: '밸런스와 플레이버 모두 내꺼, 와인 완벽주의자',
        subTitle: [
          'the balance between flavor & taste ',
          'have a good wine sense of balance',
        ],
        description: [
          "'조화'라는 단어가 사람으로 태어난다면 당신❤ 라이프스타일, 인간 관계, 사회 활동 뭐든 조화로운 라이프스타일을 지향해요.",
          '어디 하나 모나지 않고 풍요로운 성격으로 주변에 사람이 끊이지 않아요.',
          '부담스럽지 않게 낯선 사람과 잘 어울리고 대화도 잘 이끌어내죠. 리더쉽이 있는 사람이예요.',
          '언제나 타고난 존재감으로 모임의 중심을 차지하죠. 매사에 이상을 제시하며 사람들에게 비전을 제시하죠.',
          '미식의 밸런스와 궁합을 중요시여겨요. 음식을 먹어도 각 재료와의 궁합과 페이링을 귀신같이 잘 매칭 시키죠.',
          '와인도 마찮가지예요. 직설적인 와인 스타일보다는 시간에 따라 다양한 모습을 보여주는 복합미가 있는 와인을 선호해요.',
        ],
        metchWine: {
          red: {
            name: '코퍼 케인, 벨레 그로스 클락 & 텔레폰 피노 누아',
            keyword: '#미국프리미엄 #농축된과일풍미 #완벽한밸런스',
            tastingNotes: `밝은 루비 컬러를 지녔으며＊ 블랙베리＊ 라즈베리 등과 같은 검붉은 과실 풍미＊ 그리고 풍부하고 싱싱한 플로럴한 노트가 조화를 이루고 있다. 
            혀에서는 약간의 달콤한이 느껴지는 체리＊ 야생 딸기＊ 크렌베리 등과 같은 붉은 과일 풍미가 지배적이며＊ 
            싱싱한 산도와 부드러운 탄닌감이 완벽한 밸러스를 이루고있다. `,
            sellingPoint: '캘리포니아 피노 누아의 라이징 스타, 벨레 그로스',
          },
          white: {
            name: '라미, 하이드 빈야드 샤르도네',
            keyword: '#하이퀄리티 #버터풍미 #신선한과일',
            tastingNotes: `화이트 와인 치고는 묵직한 바디감과 높은 알코올 도수＊ 복숭아와 바나나와 같은 열대 과일 풍미를 받쳐 주는 두드러진 오크 터치＊ 
            헤이즐넛＊ 버터 풍미를 지닌 하이 퀄리티 캘리포니아 나파 밸리 샤르도네 와인이다.`,
            sellingPoint: '미국 캘리포니아 샤르도네 스페셜리스트의 역작',
          },
          champagne: {
            name: '폴 로저, 뀌베 써 윈스턴 처칠',
            keyword: "'#윈스턴처칠's Pick #우아한샴페인 #복합적인아로마'",
            tastingNotes: `섬세하지만 입안에서 힘차게 터지는 버블의 기운과 적당한 산도, 탄탄한 바디감이 돋보이는 
            복합적인 미감의 우아한 샴페인으로 잘 익은 배, 미라벨 자두와 타르트의 풍미가 특징이다.`,
            sellingPoint: '윈스턴 처칠이 사랑했던 샹파뉴、 폴로저',
          },
        },
      },
      type3: {
        c: ['ligth', 'low', 'unique'],
        color: '',
        title: '미식도 사랑도 경험도 다양한 시도가 즐거움의 원천이죠',
        subTitle: [
          'Good taste for fine sense',
          'sophisticated style',
          'for better taste, For best Taste',
        ],
        description: [
          '최신 유행에 민감하고 새로운 시도를 하는 것에 즐거움을 느껴요. 그렇다고 과시와 과소비를 하는 것이 아니예요. 인생을 살면서 다양한 경험이 얼마나 행복한 것인지를 아는 사람인기죠',
          '편견과 선입견이 없기에  다양한 분야의 사람과 폭넓게 어울리는 편이예요.',
          '과시대고 으스대는 점이 없어 항상 주변에 사람이 넘쳐나는 인싸.',
          '와인에 딱히 편견이 없어요. 평론가들의 별점보다는 라벨이 예쁜 경우 집어오는 경우도 흔해요. 그런데 그게 또 성공률이 좋다는것. 원래 예쁜건 뭘해도 평타는 치는 법이죠💖',
          "아 그리고, 예쁜 라벨 와인 마시며 이야기 할 '예쓰' 그룹원 모집해요. '예쁜쓰레기' 좋아하는 사람 손🙌🏻",
        ],
        metchWine: {
          red: {
            name: '뛰느방, 배드 보이',
            keyword: '#로버트파커의찬사 #괴짜천재뛰느방 #풀바디',
            tastingNotes: `강렬한 보라빛이 감도는 레드 컬러로 까시스＊ 블루 베리와 같은 검은 과일향과 스모키한 오크향의 조화롭다. 
            잘 숙성된 탄닌감이 진한 과일 풍미와 어우러져 마지막까지 긴 여운을 선사하는 풀바디 와인이다.`,
            sellingPoint: '가라지 와인의 선두주자! 괴짜 천재 뛰느방의 와인',
          },
          white: {
            name: '트라피체 싱글빈야드 샤르도네 라스 피에드라스',
            keyword: '#싱글빈야드 #인상적인피니쉬 #크리미한텍스쳐',
            tastingNotes: `잘 익은 핵과일 류의 아로마와 함께 시트러스와 오렌지 향이 피어나는 듯 하다. 
            스모키한 오크향과 더불어 크리미한 텍스쳐도 인상적이다. 
            생동감과 신선함이 동시에 엿보이는 피니쉬도 인상적인 화이트 와인이다.`,
            sellingPoint: '트라피체 싱글빈야드 시리즈의 첫번째 화이트 와인',
          },
          champagne: {
            name: '프레시넷, 프로세코 DOC',
            keyword: '#까바생산자의도전 #섬세한아로마 #깨끗한버블',
            tastingNotes: `시트러스＊ 사과＊ 꽃향기의 신선한 아로마를 가지고 있다. 
            입 안에서는 잘익은 레몬의 은은한 맛과 풋사과＊ 
            자몽 등의 플레이버가 신선하고 깨끗한 버블감과 어우러져 느낄 수 있다. `,
            sellingPoint: '전 세계 NO.1 스파클링 생산자 프레시넷의 새로운 도전',
          },
        },
      },
      type4: {
        c: ['ligth', 'low', 'harmony'],
        color: '',
        title:
          '와인 전문가가 될 마음은 없어요. 와인을 즐기는 자가 되고 싶을 뿐',
        subTitle: [
          'Good taste for fine sense',
          'sophisticated style',
          'for better taste, For best Taste',
        ],
        description: [
          '상대의 마음을 편안하게 만들어주고 주변 사람을 잘 챙기는 성격으로 사람들 사이에거 인기가 좋아요. 갈등을 싫어하고 사람들과 조화를 중요시하는 평화주의자',
          '와인을 깊게 공부하고 나라별, 품종별, 와인 메이커에 따라 선택하는 스타일은 아니예요.',
          '하지만 혼자만의 시간 혹은 혼밥과 가까운 친구들과 홀짝홀짝 마시면서 즐거운 시간을 보내기를 좋아해 와인 소비가 많은 편이예요. 그거 아시죠? 즐기는 자가 최고라는 것🤴🏻👸🏻',
          '친구의 추천 와인이나 각종 와인 수상 경력인 있는 와인을 셀렉하는 경향이 있어요. 덕분에 평타 이상의 와인을 마시죠.',
        ],
        metchWine: {
          red: {
            name: '마르께스 데 까사 콘차, 까베르네 소비뇽',
            keyword: '#클래식프리미엄 #대통령와인 #부드러운탄닌',
            tastingNotes: `강렬한 보랏빛이 감도는 레드 컬러로 체리＊ 블랙베리와 같은 검은 과일의 향 삼나무와 스모키한 타르의 향까지 매혹적인 향을 가진 와인이다. 
            과일향＊ 오크향 등 복합적인 향이 조화가 환상적인 와인으로 마치 실크와 같이 부드러운 탄닌의 질감이 입 안에서 마지막까지 긴 여운을 남긴다.`,
            sellingPoint: '칠레 프리미엄 전 세계 판매 1위',
          },
          white: {
            name: '레정드 보르도 블랑',
            keyword: '#보르도의새기준 #열대과실향 #부드러움',
            tastingNotes: `은은하면서도 밝은 볏짚 색상. 꽃향기, 미네랄 아로마, 리치와 라임 같은 트로피칼 과실의 아로마가 복합적으로 느껴져 상큼하다. 
            신선하고 깨끗한 느낌이 매력적인 와인으로 세미용의 부드러움과 소비뇽 블랑의 생동감이 매우 조화롭게 느껴진다.`,
            sellingPoint: '라피트가 선보이는 보르도 와인의 새로운 기준',
          },
          champagne: {
            name: '도멘 생 미셸, 브뤼',
            keyword: '#샴페인생산방식 #상쾌한산도 #풍부한아로마',
            tastingNotes: `잘 익은 사과와 감귤 등의 풍부한 아로마가 특징이며 상쾌한 산도와 섬세한 풍미를 자랑한다.`,
            sellingPoint: '와인 스펙테이터 선정 Best Buy 스파클링 와인',
          },
        },
      },
      type5: {
        c: ['heavy', 'high', 'unique'],
        color: '',
        title: '뭐든 한방이 있는 와인 취향, 덕분에 와인 지식도 상당해요.',
        subTitle: [
          'Good taste for fine sense',
          'sophisticated style',
          'for better taste, For best Taste',
        ],
        description: [
          '바운더리가 확실하고 내사람에게 절대적인 지지를 보내는 극호불호를 가진 사람이예요. 모든 사람이 나를 좋아할 수 없다 생각해요. 내 사람에 대한 야망이 있는 편.',
          '무엇을 먹던 심심하고 밍숭맹숭 한 것보다는 강렬한 자극을 원해요.  와인 리스트는 하나하나 한방이 있는 아이들을 콜렉팅하는 면이 있어요.',
        ],
        metchWine: {
          red: {
            name: '엠 샤푸티에, 에르미따쥬 모니에르 드 라 시제란느',
            keyword: '#론와인의명가 #유기농와인 #우아한팔레트',
            tastingNotes: `레드 과실류의 깊은 아로마와 옅은 감초향이 느껴지며 부드럽고 우아한 팔레트와 집중미가 높은 젠틀한 타닌감이 느껴진다. 
            피니쉬에서는 블랙커런트와 라즈베리향이 어우러지며 긴 여운이 이어진다.`,
            sellingPoint:
              '론을 대표하는 명품 와이너리. 로버트 파커 100점 획득 SKU 33개 보유. 친환경 유기농 와인의 대부.',
          },
          white: {
            name: '펜폴즈, 야타나 샤도네',
            keyword: '#명품샤르도네 #호주대표 #조화로운밸런스',
            tastingNotes: `처음 입안에 머금는 순간부터 마지막 글라스까지 신선하고 풍요로운 포도 과실의 쥬이시함과 여운이 오랫동안 이어지고＊ 
            조화로운 밸런스가 최고의 샤르도네 와인임을 증명한다.`,
            sellingPoint:
              '그랜지(펜폴즈 가장 최상급 와인)에 비견되는 명품 샤르도네 와인',
          },
          champagne: {
            name: '피에르 지모네 (RM)',
            keyword: '',
            tastingNotes: ``,
            sellingPoint: '',
          },
        },
      },
      type6: {
        c: ['heavy', 'high', 'harmony'],
        color: '',
        title: '별보다 많은 와인. 그러나 셀렉션은 신중한 편, 와인 탐구자',
        subTitle: [
          'Good taste for fine sense',
          'sophisticated style',
          'for better taste, For best Taste',
        ],
        description: [
          '외유내강이 사람으로 태어난다면 당신, 누구에나 친절하고 분위기를 잘 맞추지만 매너있는 사람들에게 한정이죠.',
          '여러모로 리더가 어울리는 스타일이예요. 안그러고 싶은데… 정신차려보니 어느샌가 리더의 위치에... 그만큼 저상에 오를수 있는 능력이 있고 사람들도 믿고 따라요.',
          '추천 와인보다는 내 와인 안목을 믿어요, 다양한 경험을 통해 축적된 내 미식의 감은 소믈리에 못지 않아요. 와인의 매력? 느슨한 분위기 속에 완벽한 오감을 채우는 경험이라 생각해요.',
        ],
        metchWine: {
          red: {
            name: '콘차이 토로, 돈 멜초',
            keyword: '#돈멜초 #제임스서클링100점(2018) #복합미',
            tastingNotes: `그 어떤 빈티지보다 표현이 좋은 해로＊ 작은 붉은 과실의 풍미와 복합미를 여실히 느낄 수 있다. 
            실크와 같은 부드러운 탄닌이 우아하게 느껴지며＊ 과실과 흑연과 같은 풍미가 조화를 이룬다.`,
            sellingPoint: '제임스 서클링 100점、 퍼펙트 빈티지',
          },
          white: {
            name: '알타이르, 시데랄 ',
            keyword: '#칠레그랑크뤼 #완벽한균형 #섬세함',
            tastingNotes: `깊고 진한 루비빛을 띄며＊ 체리＊ 블랙 커런트 등 잘 익은 검붉은 과실류의 아로마가 강렬하게 나타나며＊ 은은하게 삼나무향이 뒤를 따른다. 
            입 안 가득 프레쉬함과 쥬시함을 느낄 수 있으며＊ 탄탄한 탄닌과 산도감까지 뛰어나＊ 밸런스가 매우 좋으며＊ 
            벨벳같은 섬세함과 함께 긴 여운이 무게감 있게 펼쳐지는 와인이다.  `,
            sellingPoint: '칠레 그랑크뤼、 그란데스 비노스 데 산페드로',
          },
          champagne: {
            name: '폴 로저, 브뤼 리저브',
            keyword: '#웨딩샴페인 #영국왕세자Pick #매끈한질감',
            tastingNotes: `피노 누아 (몽따뉴 드 랭쓰)＊ 피노 뮈니에  (쁘띠 밸르 에뻬르니와 발레 드 라 마른느)＊ 샤르도네 (에뻬르니)로 완성된 연한 골드 컬러의 샴페인으로＊ 버섯 아로마가 첫 코를 자극한다. 
            빈티지 샴페인이라 불러도 손색없을 정도로 충분한 개성을 발휘하며 단단한 바디와 호두향＊ 
            그리고 매끈한 질감이 특징이다. `,
            sellingPoint: '윌리엄 왕자와 케이트 미들턴의 웨딩 샴페인',
          },
        },
      },
      type7: {
        c: ['heavy', 'low', 'unique'],
        color: '',
        title:
          '술은 분위기로 마시는겁니당 분위기를 휘어잡는 인싸, 근본있는 관종',
        subTitle: [
          'Good taste for fine sense',
          'sophisticated style',
          'for better taste, For best Taste',
        ],
        description: [
          '파티를 즐기고 어느 곳에서건 분위기를 up 시키는 밝은 성격을 지녔어요. 모임의 중심이 내가 될 때 제일 신나요. 그러나 집에서 분위기 잡고 혼술도 또 싫지 않은 나예요. 포인트는 분위기에 젖은 나니까.',
          '흔들흔들 잔 속에서 출렁이는 술을 보며 기분도 함께 업되요. 술보다는 술분위기를 좋아해 달콤하고 쑥쑥 들어가는 디저트 와인이 좋아요.',
          '호기심이 많아 다양한 맛을 모두 탐닉해보려 하죠. 덕분에 남들에게는 잘 알려지지 않은 보석같은 맛을 남들보다 더 빨리 발견해요.',
          '관심받는 것도 즐겨요. 나의 다양하고 색다르고 멋진 모습을 모두가 먼저 알아채주었으면 해요.',
        ],
        metchWine: {
          red: {
            name: '산 페드로, 1865 셀렉티드 콜렉션 피스코 배럴 에이지드',
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
          champagne: {
            name: '블랑드블랑 샴페인',
            keyword: '#숨겨진보석 #샴페인 #섬세한버블',
            tastingNotes: `섬세하고 부드러운 버블이 입안을 가득 채운다. 시트러스 계열의 과실향과 파인애플＊ 망고의 과일향이 느껴진다. 
          입 안에서는 풍부한 산도와 리(Lees) 숙성에서 오는 토스트와 구운 빵 향이 조화를 이룬다. `,
            sellingPoint: '크랑크뤼 샴페인',
          },
        },
      },
      type8: {
        c: ['heavy', 'low', 'harmony'],
        color: '',
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
            name: '산 페드로, 1865 셀렉티드 콜렉션 피스코 배럴 에이지드',
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
          champagne: {
            name: '블랑드블랑 샴페인',
            keyword: '#숨겨진보석 #샴페인 #섬세한버블',
            tastingNotes: `섬세하고 부드러운 버블이 입안을 가득 채운다. 시트러스 계열의 과실향과 파인애플＊ 망고의 과일향이 느껴진다. 
          입 안에서는 풍부한 산도와 리(Lees) 숙성에서 오는 토스트와 구운 빵 향이 조화를 이룬다. `,
            sellingPoint: '크랑크뤼 샴페인',
          },
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

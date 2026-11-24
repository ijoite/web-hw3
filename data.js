// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
  {
    title: "인터스텔라", year: 2014, date: "2014-11-05", rating: 8.5,
    audience: 0, poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null,
    overview: "세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다."
  },
  {
    title: "오디세이", year: 2026, date: "2026-07-15", rating: 8.0,
    audience: 0, poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg", type: "mine", rank: null,
    overview: "10년간 이어진 트로이 전쟁을 승리로 이끈 영웅 '오디세우스'는 왕의 부재를 틈타 침탈과 권력 다툼이 벌어진 왕국에서 그를 기다리고 있는 아내 '페넬로페'와 아들 '텔레마코스'에게 돌아가기 위한 여정에 나선다. 그러나 신들의 분노를 산 그의 귀환 앞에는 거대한 폭풍과 괴물들, 그리고 거스를 수 없는 운명의 시련이 기다리고 있는데…"
  },
  {
    title: "분노의 질주: 더 세븐", year: 2015, date: "2015-04-01", rating: 7.2,
    audience: 0, poster: "/cuQdgDYANbKA46e4va2fz6fODkc.jpg", type: "mine", rank: null,
    overview: "도미닉과 멤버들은 범죄조직 소탕 후 모든 전과를 사면 받고 평범한 일상으로 돌아간다. 하지만 평화도 잠시, 전작에서 처리한 범죄조직의 리더 오웬 쇼의 형 데카드 쇼가 동생의 복수를 위해 멤버들을 차례로 공격한다."
  },
  {
    title: "스타워즈 에피소드 8: 라스트 제다이", year: 2017, date: "2017-12-13", rating: 6.7,
    audience: 0, poster: "/zRvMTCzUVnkdW9lno9HQwrigWSr.jpg", type: "mine", rank: null,
    overview: "악의 세력인 무자비한 퍼스트 오더가 은하계를 장악한 시대. 레아 장군의 저항군은 힘겨운 싸움을 이어가고 있다."
  },
  {
    title: "아바타", year: 2009, date: "2009-12-15", rating: 7.6,
    audience: 0, poster: "/m5lCha2XcbDowDoYHPc0DTNaCPU.jpg", type: "mine", rank: null,
    overview: "가까운 미래, 지구는 에너지 고갈 문제를 해결하기 위해 머나먼 행성 판도라에서 대체 자원을 채굴하기 시작한다. 하지만 판도라의 독성을 지닌 대기로 인해 자원 획득에 어려움을 겪게 된 인류는 판도라의 토착민 나비의 외형에 인간의 의식을 주입, 원격 조종이 가능한 새로운 생명체를 탄생시키는 프로그램을 개발한다."
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
    audience: 2268257, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1,
    overview: "어느 날, 광장에서 쉬고 있던 치이카와와 가르마 앞에 얼굴에 전단지를 붙인 토끼가 나타난다."
  },
  {
    title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
    audience: 3382043, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2,
    overview: "1974년 8월 15일, 제29회 광복절 경축식."
  },
  {
    title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
    audience: 112191, poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3,
    overview: "9년 전 캠핑스쿨 버스 실종 사건으로 아들을 잃은 류소영은 '낙원의 아이들'이라는 AI 프로그램을 통해 어린 시절의 아들과 만나며 하루하루를 버텨낸다."
  },
  {
    title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.0,
    audience: 2006478, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 4,
    overview: "타고난 끗발로 사람의 마음을 사로잡는 장태영과 천부적인 머리와 노력으로 스스로를 증명하는 박태영."
  },
  {
    title: "클레이페이스", year: 2026, date: "2026-10-21", rating: 7.5,
    audience: 84196, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5,
    overview: "할리우드의 주연 배우로 유명 영화제 수상을 눈 앞에 두며 꿈을 이루기 직전인 ‘맷 헤이건’. 그러나 한 순간의 실수로 범죄 조직의 타겟이 되어 얼굴이 처참하게 훼손되며 그의 빛나던 인생은 하루 아침에 비극으로 뒤바뀐다."
  }
];

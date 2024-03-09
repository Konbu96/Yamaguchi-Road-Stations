
  const stations = [
    {
      name: 'あいお',
      address: '山口市秋穂東1520-4	',
      tel: '083-984-5704',
      time: '9:00 〜 18:00',
      parking: '24',
      cream: 'なし',
      boardImage:'img/stations_photo_new/01_aio_board.jpg',
      stationImage:'img/stations_photo_new/01_aio_station.jpg',
      mapX: '39.1',
      mapY: '65.9',
      facilities : "park,shop,toilet,cafe,restaurant",
    },
    {
      name: 'あさひ',
      address: '萩市朝日大字佐々並2476-1',
      tel: '0838-56-0278',
      time: '7:30 〜 18:30',
      parking: '20',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/02_asahi_board.jpg',
      stationImage: 'img/stations_photo_new/02_asahi_station.jpg',
      mapX: '39.8',
      mapY: '45.1',
      facilities : "park,shop,toilet,restaurant,babyBed",
    },
    {
      name: '阿武町',
      address: '阿武郡阿武町奈古2249',
      tel: '08388-2-0355',
      time: '10:00 〜 18:00',
      parking: '155',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/03_abu_board.jpg',
      stationImage: 'img/stations_photo_new/03_abu_station.jpg',
      mapX: '41.4',
      mapY: '26.6',
      facilities : "park,guide,shop,hotSpring,toilet,babyBed,cafe,restaurant",
    },
    {
      name: 'うり坊の郷',
      address: '萩市大字片保1124-1',
      tel: '08388-8-0114',
      time: '8:00 〜 17:00',
      parking: '29',
      cream: 'トマトソフト',
      boardImage:'img/stations_photo_new/04_uribou_board.jpg',
      stationImage: 'img/stations_photo_new/04_uribou_station.jpg',
      mapX: '49.3',
      mapY: '27.3',
      facilities : "shop,cafe,toilet",
    },
    {
      name: 'おふく',
      address: '美祢市於福町上4383-1',
      tel: '0837-56-5005',
      time: '9:00 〜 18:00',
      parking: '85',
      cream: '木いちごソフト',
      boardImage:'img/stations_photo_new/05_ohuku_board.jpg',
      stationImage: 'img/stations_photo_new/05_ohuku_station.jpg',
      mapX: '25.8',
      mapY: '47.5',
      facilities : "shop,hotSpring,toilet,babyBed,cafe,restaurant",
    },
    {
      name: '上関海峡',
      address: '熊毛郡上関町大字室津904-15',
      tel: '0820-62-1139',
      time: '8:30 〜 18:00',
      parking: '48',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/06_kaminoseki_board.jpg',
      stationImage: 'img/stations_photo_new/06_kaminoseki_station.jpg',
      mapX: '75.5',
      mapY: '80.3',
      facilities : "guide,shop,toilet,cafe,restaurant",
    },
    {
      name: '願成就温泉',
      address: '山口市阿東徳佐上10002-116',
      tel: '083-957-0118',
      time: '10:30 〜 19:00',
      parking: '70',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/07_ganjyoujyu_board.jpg',
      stationImage: 'img/stations_photo_new/07_ganjyoujyu_station.jpg',
      mapX: '54.5',
      mapY: '32.7',
      facilities : "guide,shop,hotSpring,toilet,babyBed,restaurant",
    },
    {
      name: 'きくがわ',
      address: '下関菊川町大字上岡枝766-1',
      tel: '083-287-4649',
      time: '8:30 〜 17:00',
      parking: '70',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/08_kikugawa_board.jpg',
      stationImage: 'img/stations_photo_new/08_kikugawa_station.jpg',
      mapX: '17.9',
      mapY: '58',
      facilities : "guide,shop,toilet,cafe,restaurant",
    },
    {
      name: '北浦街道 豊北',
      address: '下関市豊北町神田上314-1',
      tel: '083-786-0111',
      time: '8:30 〜 18:00 ※季節変動 有',
      parking: '141',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/09_toyokita_board.jpg',
      stationImage: 'img/stations_photo_new/09_toyokita_station.jpg',
      mapX: '10.5',
      mapY: '43.3',
      facilities : "guide,shop,toilet,babyBed,cafe,restaurant",
    },
    {
      name: 'きららあじす',
      address: '山口阿知須10509-88',
      tel: '0836-66-1001',
      time: '8:30 〜 18:00',
      parking: '160',
      cream: 'かぼちゃソフト',
      boardImage:'img/stations_photo_new/10_kirara_board.jpg',
      stationImage: 'img/stations_photo_new/10_kirara_station.jpg',
      mapX: '33',
      mapY: '69.2',
      facilities : "shop,toilet,cafe,restaurant,babyBed",
    },
    {
      name: 'サザンセトとうわ',
      address: '大島郡周防大島町西方1958-77',
      tel: '0820-78-0033',
      time: '10:00 〜 18:00',
      timeNotes: '※売店',
      parking: '120',
      cream: 'みかんソフト',
      boardImage:'img/stations_photo_new/11_touwa_board.jpg',
      stationImage: 'img/stations_photo_new/11_touwa_station.jpg',
      mapX: '83',
      mapY: '78.0',
      facilities : "park,guide,shop,toilet,cafe,restaurant,babyBed",
    },
    {
      name: '潮彩市場防府',
      address: '防府市新築地町2-3',
      tel: '0835-28-2100',
      time: '9:00 〜 18:00',
      timeNotes: '※飲食店は店舗により異なる',
      parking: '152',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/12_shiosai_board.jpg',
      stationImage: 'img/stations_photo_new/12_shiosai_station.jpg',
      mapX: '47',
      mapY: '64.5',
      facilities : "cafe,restaurant,park,guide,shop,toilet",
    },
    {
      name: 'センザキッチン',
      address: '長門市仙崎4297-1',
      tel: '0837-27-0300',
      time: '9:00 〜 18:00',
      timeNotes: '※閉店時間は店舗により異なる',
      parking: '216',
      cream: 'コーヒーソフト',
      boardImage:'img/stations_photo_new/13_senzaki_board.jpg',
      stationImage: 'img/stations_photo_new/13_senzaki_station.jpg',
      mapX: '25.8',
      mapY: '34.8',
      facilities : "guide,shop,toilet,shower,babyBed,cafe,restaurant",
    },
    {
      name: 'ソレーネ周南',
      address: '周南市大字戸田2713',
      tel: '0834-83-3303',
      time: '8:00 〜 20:00',
      timeNotes: '※テナント店舗を除く',
      parking: '170',
      cream: '牧場ソフト',
      boardImage:'img/stations_photo_new/14_syuunan_board.jpg',
      stationImage: 'img/stations_photo_new/14_syuunan_station.jpg',
      mapX: '53.1',
      mapY: '63.2',
      facilities : "park,guide,atm,shop,toilet,babyBed",
    },
    {
      name: '長門峡',
      address: '山口市阿東生雲東分47-1',
      tel: '083-955-0777',
      time: '9:30 〜 18:00',
      parking: '81',
      cream: 'なし',
      boardImage:'img/stations_photo_new/15_choumon_board.jpg',
      stationImage: 'img/stations_photo_new/15_choumon_station.jpg',
      mapX: '46.1',
      mapY: '43.2',
      facilities : "park,shop,toilet,restaurant,babyBed",
    },
    {
      name: '仁保の郷',
      address: '山口市仁保中郷1034',
      tel: '083-929-0480',
      time: '8:30 〜 17:00',
      parking: '103',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/16_niho_board.jpg',
      stationImage: 'img/stations_photo_new/16_niho_station.jpg',
      mapX: '43.9',
      mapY: '50.7',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: '萩往還',
      address: '萩市大字椿字鹿背ヶ坂1258',
      tel: '0838-22-9889',
      time: '9:00 〜 18:00',
      parking: '64',
      cream: '萩夏みかんソフト',
      boardImage:'img/stations_photo_new/17_hagioukan_board.jpg',
      stationImage: 'img/stations_photo_new/17_hagioukan_station.jpg',
      mapX: '37.9',
      mapY: '38.7',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: 'さんさん三見',
      address: '萩市三見1028-2',
      tel: '0838-27-0041',
      time: '9:00 〜 17:00',
      parking: '40',
      cream: 'おいもソフト',
      boardImage:'img/stations_photo_new/18_sanmi_board.jpg',
      stationImage: 'img/stations_photo_new/18_sanmi_station.jpg',
      mapX: '32.4',
      mapY: '37.0',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: '萩しーまーと',
      address: '萩市椿東4160-61',
      tel: '0838-24-4937',
      time: '9:30 〜 18:00',
      timeNotes: '※金,土,日,祝は9:00~',
      parking: '88',
      cream: '萩夏みかんソフト',
      boardImage:'img/stations_photo_new/19_si-ma-to_board.jpg',
      stationImage: 'img/stations_photo_new/19_si-ma-to_station.jpg',
      mapX: '37.9',
      mapY: '32.2',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: 'ハピネスふくえ',
      address: '萩市大字福井下4014-2',
      tel: '0838-52-0356',
      time: '8:30 〜 17:00',
      parking: '43',
      cream: 'なし',
      boardImage:'img/stations_photo_new/20_hukue_board.jpg',
      stationImage: 'img/stations_photo_new/20_hukue_station.jpg',
      mapX: '41.6',
      mapY: '32.2',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: 'ピュアラインにしき',
      address: '岩国市錦町府谷117',
      tel: '0827-71-0011',
      time: '9:00 〜 17:00',
      parking: '75',
      cream: 'バニラソフト',
      boardImage:'img/stations_photo_new/21_nishiki_board.jpg',
      stationImage: 'img/stations_photo_new/21_nishiki_station.jpg',
      mapX: '66.5',
      mapY: '48',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: '蛍街道西ノ市',
      address: '下関市豊田町大字中村876-4',
      tel: '083-767-0241',
      time: '8:30 〜 21:00',
      parking: '130',
      cream: 'ポッポブラック',
      boardImage:'img/stations_photo_new/22_hotaru_board.jpg',
      stationImage: 'img/stations_photo_new/22_hotaru_station.jpg',
      mapX: '20',
      mapY: '52',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: 'みとう',
      address: '美祢市美東町太田5480-1',
      tel: '08396-2-2500',
      time: '8:30 〜 17:30',
      parking: '97',
      cream: '栗ソフト',
      boardImage:'img/stations_photo_new/23_mitou_board.jpg',
      stationImage: 'img/stations_photo_new/23_mitou_station.jpg',
      mapX: '32.8',
      mapY: '50.6',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
    {
      name: 'ゆとりパークたまがわ',
      address: '萩市大字下万2849-1',
      tel: '08387-2-1150',
      time: '8:30 〜 18:00',
      parking: '161',
      cream: 'なし',
      boardImage:'img/stations_photo_new/24_tamagawa_board.jpg',
      stationImage: 'img/stations_photo_new/24_tamagawa_station.jpg',
      mapX: '50.6',
      mapY: '14.9',
      facilities : "park,guide,inn,atm,shop,hotSpring,camp,museum,toilet,shower,babyBed",
    },
  ];
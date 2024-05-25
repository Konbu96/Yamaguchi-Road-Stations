addMarker = (station) => {
    const container = $('#map-container');

    const pointA = $('<a></a>');
    pointA.attr =('href', `#station-info`);
    // pointA.addClass('point');
    container.append(pointA);

    const div = $('<div></div>')
      div.addClass('point');
      div.css('left',`${station.mapX}%`);
      div.css('top',`${station.mapY}%`);
      pointA.append(div);

    const pointImg = $('<img>');
    pointImg.attr('src', "img/symbol.bmp")
    //pointImg.addClass('point');
    //pointImg.css('left',`${station.mapX}%`);
    //pointImg.css('top',`${station.mapY}%`);
    pointImg.on('click',function(event)  {
        updateStationInfo(station);
        clearOpenClasses();
    });
    div.append(pointImg);
    const hoverText = $('<p></p>')
    .text(station.name)
    .css('color' , 'black')
    div.append(hoverText);

    // const pointText = $('<p></p>')
    // pointText.text(station.name);
    // pointA.append(pointText);

};
// navi
addNaviMenu = (station) => {
    const list = $('#navi-list')
    const item = $('<li></li>')        
    list.append(item)
    const itemLink = $('<a></a>')
    .text(station.name)
    .attr('href' , '#station-info')
    .on('click' , (event) => updateStationInfo(station)); 
    item.append(itemLink)
  };

  const clearOpenClasses = () => {
    $('#header').removeClass('open');
    $('#header').removeClass('open-navi')
    $('#header').removeClass('open-map')
}

// ドキュメントが読みこまれたら実行する関数を定義
window.onload = () => {
    // マップにすべての駅を追加
    stations.forEach((station) => {
        addMarker(station);
        addNaviMenu(station);
    });
    // 駅情報はとりあえず先頭の駅を表示
    updateStationInfo(stations[0]);


    // hamburger
    
    $('#hamburger').on('click',function() {
        if ($('#header').hasClass('open')) {
          clearOpenClasses();
        } else {
            $('#header').addClass('open')
            $('#header').addClass('open-navi')
        }
    });

    $('#mask').on('click', function() {
        clearOpenClasses();
    });
    $('#navi').on('click', function() {
        clearOpenClasses();
    });

    // map-hamburger
    $('#map-hamburger').on('click',function () {
        if ($('.header').hasClass('open-map')) {
          clearOpenClasses();
        } else {
            $('.header').addClass('open');
            $('.header').addClass('open-map');
        }
    });
    $('#map-container').on('click', function() {
        clearOpenClasses();
    });


}

official = (station) => {
    const officialButton = $('<a></a>');
    officialButton.attr('href ', `#official-button`)
}

// 駅情報更新
updateStationInfo = (station) => {
    // // 駅名
    $('#station-info-title').text(station.name);

    // 画像station
    $('#station-image').attr('src',station.stationImage).attr('alt',station.name + 'の風景');
    // 画像board
    $('#board-image').attr('src',station.boardImage).attr('alt',station.name + 'の風景')

    // 住所
    $('#station-address').text(station.address);
    // 営業時間
    $('#station-time').text(station.time);
    // 電話
    $('#station-tel').text(station.tel);
    // 駐車台数
    $('#station-parking').text(station.parking + '台');
    // ソフトクリーム
    $('#station-cream').text(station.cream);

    // 設備更新
    $('station-info-facilities').empty();
    facilities.forEach(facility => {
        const element = $(`.${facility}`)
    
        if (station.facilities.includes(facility)) {
            element.addClass('exist')
            element.removeClass('not-exist')
        } else {
            element.addClass('not-exist')
            element.removeClass('exist')
        }
        })
    
    }
    const facilities = ["park","guide","inn","shop","hotSpring","camp","museum","toilet","shower","babyBed","cafe","restaurant","official",]



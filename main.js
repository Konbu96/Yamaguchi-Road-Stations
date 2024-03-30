addMarker = (station) => {
    const container = $('#map-container');
    const pointA = $('<a></a>');
    $('pointA').attr =('href', `#station-info`);
    $('container').append(pointA);
    var pointImg = $('<img>');
    $('pointImg').attr('src', "img/symbol.bmp")
    $('pointImg').addClass('point');
    $('pointImg').css('left',`${station.mapX}%`);
    $('pointImg').css('top',`${station.mapY}%`);
    // pointImg.src = "img/symbol.bmp";    
    // pointImg.alt = '';
    $('pointImg').on('click',function(stationg)  {updateStationInfo(station)})
    $('pointA').append(pointImg);
};
// navi
addNaviMenu = (station) => {
    const list = $('#navi-list')
    const item = document.createElement('li')        
    list.append(item)
    const itemLink= document.createElement('a')
    itemLink.textContent =  station.name
    itemLink.href = '#station-info'
    item.onclick = (stationg) => updateStationInfo(station);        
    item.append(itemLink)
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

    $('.hamburger').on('click',function() {
        if ($('#header').hasClass('open')) {
          $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });
    $('#navi').on('click', function() {
        $('#header').removeClass('open');
    })

    // scroll//
    $('#map-container a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); 
    var pos = $(elmHash).offset().top;	
    $('body,html').animate({scrollTop: pos}, 700); 
    return false;
    });
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
    const facilities = ["park","guide","inn","shop","hotSpring","camp","museum","toilet","shower","babyBed","cafe","restaurant"]



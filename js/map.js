function initMap() {
    var centerLatLng = new google.maps.LatLng(55.758468, 37.631136);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
    };
  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // contentString - это переменная в которой хранится содержимое информационного окна.
    // Может содержать, как HTML-код, так и обычный текст.
    // Если используем HTML, то в этом случае у нас есть возможность стилизовать окно с помощью CSS.
    var contentString = '<div class="infowindow">' +
        '<h3>Москва</h3>' +
        '<p>Москва – столица России, многонациональный город на Москве-реке в западной части страны.</p>'
    '</div>';
    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        title: "Текст всплывающей подсказки"
    });
    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function() {
        // infoWindow.open - показывает информационное окно.
        // Параметр map - это переменная содержащие объект карты (объявлена на 8 строке)
        // Параметр marker - это переменная содержащие объект маркера (объявлена на 23 строке)
        infoWindow.open(map, marker);
    });
    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });
}



    // Ждем полной загрузки страницы, после этого запускаем initMap()
    google.maps.event.addDomListener(window, "load", initMap);


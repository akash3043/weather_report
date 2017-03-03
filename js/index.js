$(function() {

  var latitude;
  var longitude;
  var temp_C;
  var temp_F;
  var degree = "C";

  $.getJSON("http://ipinfo.io", function(data) {

    var latLong = (data.loc).split(",");
    latitude = latLong[0];
    longitude = latLong[1];

    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=d7b4cc84d92adc64fd55fb18cfb7f9cc";
    console.log(url);

    $.getJSON(url, function(data) {

      temp_C = data.main.temp;
      temp_F = temp_C * 1.8 + 32;

      $("#city_name").html(data.name + ", " + data.sys.country);
      $("#temp").html(data.main.temp + " &deg");

      $("#degree").html(degree);

      $("#condition").html(data.weather[0].main);

      console.log("http://openweathermap.org/img/w/" + data.weather[0].id + ".png");
      $("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

    })

  })

  $("#degree").click(function() {

    if (degree == "C") {
      $("#temp").html(temp_F + " &deg");
      degree = "F";
      $("#degree").html(degree);

    } else {

      $("#temp").html(temp_C + " &deg");
      degree = "C";
      $("#degree").html(degree);

    }

  })
})
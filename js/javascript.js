function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(37.237162,-115.4840),
        zoom:11,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}

// aa function searchForm() {
  //  document.querySelector("#form1").addEventListener("submit", function(event) {
    //    document.getElementById("formbox")
      //  event.preventDefault();
   // })
    // aa document.getElementById("form1").addEventListener("submit", function(evt) {
        // aa search(document.getElementById("searchterm"));
        // aa evt.preventDefault();
    //form.addEventListener("submit", event.preventDefault());
    //evt.preventDefault();
    // aa })
// aa }

//$('#searchterm').submit(function(e) {
  //  e.preventDefault();
//});
hotels.forEach(function(obj){
  $('#hotel-choices').append(`<option>${obj.name}</option>`);
});

restaurants.forEach(function(obj){
    $('#restaurant-choices').append(`<option>${obj.name}</option>`);
});

activities.forEach(function(obj){
  $('#activity-choices').append(`<option>${obj.name}</option>`);
});

//add buttons
// $('#options-panel').on('click', 'button', function(event){
//   var target_id= event.target.id;
//
//   $(this)
// });


$('.select-hotel').on('click', 'button', function(event){

  var selected=$('#hotel-choices option:selected');
  console.log("selected:", selected);
  $('#myHotel').text(selected.text());

  var hotelInfo;
  for (let i = 0; i < hotels.length; i++){
  	if (hotels[i].name === selected.text()){
  		console.log("hotel", hotels[i]);
  		hotelInfo = hotels[i].place.location;
  	}
  }
  	drawMarker('hotel', hotelInfo);
});


$('.select-restaurant').on('click', 'button', function(event){

  var selected=$('#restaurant-choices option:selected');
  console.log("selected:", selected.text());
  $('#myRestaurants').append(`<span class="title">${selected.text()}</span>`);
});

$('.select-activity').on('click', 'button', function(event){

  var selected=$('#activity-choices option:selected');
  console.log("selected:", selected.text());
  $('#myActivities').append(`<span class="title">${selected.text()}</span>`);
});



// function createMarker(long, lat){
// 	var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }



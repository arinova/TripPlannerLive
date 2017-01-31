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
  $('#myHotel').append(`<span class="title">${selected.text()}</span>`);

  var hotelInfo;
  for (let i = 0; i < hotels.length; i++){
  	if (hotels[i].name === selected.text()){
  		console.log("hotel", hotels[i]);
  		hotelInfo = hotels[i].place.location;
  	}
  }
  drawMarker('hotel', hotelInfo, myGoogleMap);
  clearMarkers();
  setMapOnAll(myGoogleMap);
});






$('.select-restaurant').on('click', 'button', function(event){

  var selected=$('#restaurant-choices option:selected');
  console.log("selected:", selected.text());
  $('#myRestaurants').append(`<span class="title">${selected.text()}</span>`);

  var restaurantInfo;
  for (let i = 0; i < restaurants.length; i++){
  	if (restaurants[i].name === selected.text()){
  		console.log("restaurant", restaurants[i]);
  		restaurantInfo = restaurants[i].place.location;
  	}
  }
  drawMarker('restaurant', restaurantInfo, myGoogleMap);
  clearMarkers();
  setMapOnAll(myGoogleMap);
});





$('.select-activity').on('click', 'button', function(event){

  var selected=$('#activity-choices option:selected');
  console.log("selected:", selected.text());
  $('#myActivities').append(`<span class="title">${selected.text()}</span>`);

  var activityInfo;
  for (let i = 0; i < activities.length; i++){
  	if (activities[i].name === selected.text()){
  		console.log("activity", activities[i]);
  		activityInfo = activities[i].place.location;
  	}
  }
  drawMarker('activity', activityInfo, myGoogleMap);
  clearMarkers();
  setMapOnAll(myGoogleMap);
});



$('#myRestaurants .remove').on('click', function () {
  $('#myRestaurants').empty();
});



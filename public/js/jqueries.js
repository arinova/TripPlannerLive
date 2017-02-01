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

/*Adding hotel to itenerary, and adding marker to map*/
$('.select-hotel').on('click', 'button', function(event){

  var selected=$('#hotel-choices option:selected');
  $('#myHotel').append(`<span class="title">${selected.text()}<button class="btn btn-xs btn-danger remove btn-circle">x</button></span>`); //adds selected hotel to the itenerary

  var hotelInfo;                        //get hotel location
  for (let i = 0; i < hotels.length; i++){
  	if (hotels[i].name === selected.text()){
  		hotelInfo = hotels[i].place.location;
  	}
  }

  //create marker with hotel location and adds to markersObj
  drawMarker('hotel', hotelInfo);
  setMapOnAll(null);  //reset map
  setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
});


$('.select-restaurant').on('click', 'button', function(event){

  var selected=$('#restaurant-choices option:selected');
  $('#myRestaurants').append(`<span class="title">${selected.text()}<button class="btn btn-xs btn-danger remove btn-circle">x</button></span>`);

  var restaurantInfo;
  for (let i = 0; i < restaurants.length; i++){
    if (restaurants[i].name === selected.text()){
      console.log("hotel", restaurants[i]);
      restaurantInfo = restaurants[i].place.location;
    }
  }

  drawMarker('restaurant', restaurantInfo);
  setMapOnAll(null);  //reset map
  setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
});

$('.select-activity').on('click', 'button', function(event){

  var selected=$('#activity-choices option:selected');
  $('#myActivities').append(`<span class="title">${selected.text()}<button class="btn btn-xs btn-danger remove btn-circle">x</button></span>`);

  var activityInfo;
  for (let i = 0; i < activities.length; i++){
    if (activities[i].name === selected.text()){
      console.log("hotel", activities[i]);
      activityInfo = activities[i].place.location;
    }
  }

  drawMarker('activity', activityInfo);
  setMapOnAll(null);  //reset map
  setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
});


/*Remove Markers*/
$('#myRestaurants').on('click', '.remove', function(){
   removeMarkers();
    markersObj.restaurant.splice($(this).parent().index(), 1);     //remove restaurants from array
    $(this).parent().remove(); //empty resturant list

   
    setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
    // });

});

/*Remove Markers*/
$('#myHotel').on('click', '.remove', function(){
   removeMarkers();
    markersObj.hotel.splice($(this).parent().index(), 1);     //remove restaurants from array
    $(this).parent().remove(); //empty resturant list

   
    setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
    // });

});

/*Remove Markers*/
$('#myActivities').on('click', '.remove', function(){
   removeMarkers();
    markersObj.activity.splice($(this).parent().index(), 1);     //remove restaurants from array
    $(this).parent().remove(); //empty resturant list

   
    setMapOnAll(myGoogleMap); //updates map with all markers in markersObj
    // });

});


//Add Day Button 

$('#day-add').on('click', function(){
  var count = $('.day-buttons').children().length;
  $('.day-buttons').append(`<button class="btn btn-circle day-btn">${count}</button>`);
});

 
 //Add Day Heading

$('.day-buttons').on('click', 'button', function(){
  var value = "Day " + $(this).text();
  console.log(value)
  $('#day-title span').text(value);
})










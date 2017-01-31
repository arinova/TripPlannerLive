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
  console.log("selected:", selected.text());
});

$('.select-restaurant').on('click', 'button', function(event){

  var selected=$('#restaurant-choices option:selected');
  console.log("selected:", selected.text());
});

$('.select-activity').on('click', 'button', function(event){

  var selected=$('#activity-choices option:selected');
  console.log("selected:", selected.text());
});

//handles the folder tabs
$(document).ready(() => {

  $(function() {
      $('a, a.switch').on('click', function() {
        let active = $(this).attr('rel');
        
        $('a.switch').removeClass('activeTab');
        $(this).addClass('activeTab');
    
        
        $('div.active').slideUp(200, function() {
          $(this).removeClass('active');
          
          $("#tab" + active).slideDown(200).addClass('active');
        });
      });
    });

  //add brunch content by clicking "Add Recipe" on the brunch tab. Show the a paper marked for brunch recipes
  //make sure values for the recipe name and instructions are cleared of previous entries
  $('#add-brunch-content').on('click', () => {
      $('#brunch-paper').show();
      $('#recipe-name-input1').val('');
      $('#instructions1').val('');
  })
// same as above but for appetizers, main course, desserts, and drinks
  $('#add-appetizer-content').on('click', () => {
      $('#appetizer-paper').show();
      $('#recipe-name-input2').val('');
      $('#instructions2').val('');
  })

  $('#add-main-content').on('click', () => {
    $('#main-course-paper').show();
    $('#recipe-name-input3').val('');
    $('#instructions3').val('');
  })

  $('#add-dessert-content').on('click', () => {
      $('#dessert-paper').show();
      $('#recipe-name-input4').val('');
      $('#instructions4').val('');
  })

  $('#add-drink-content').on('click', () => {
    $('#drink-paper').show();
    $('#recipe-name-input5').val('');
    $('#instructions5').val('');
  })

  //press the x button an open recipe to close it
  $('.close-button').on('click', () => {
      $('.paper').hide();
  })

  // when clicking "save" on a recipe, hide the paper
  $('#submit-button').on('click', () => {
      $('.paper').hide();
  })

  $('#submit-button2').on('click', () => {
    $('.paper').hide();
  })

  $('#submit-button3').on('click', () => {
    $('.paper').hide();
  })
  
  $('#submit-button4').on('click', () => {
    $('.paper').hide();
  })
  
  $('#submit-button5').on('click', () => {
    $('.paper').hide();
  })

  
  $('#brunch-list').on('click', event => {

    $('#brunch-paper').show();
    let currentIndex = event.target.id;
    
    //change input of recipe name and instructions to reflect current item
    let valInput = $('#brunch-list li').eq(currentIndex).text();

    $('#recipe-name-input1').attr("value", valInput);

    console.log($('#recipe-name-input1'))

    let getItems = JSON.parse(localStorage.getItem("allBrunchEntries")) || [];
    let myArray = getItems;
    let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
    let instructionsSet = getItems[test]._instructions;
    $('#instructions1').attr("value", instructionsSet.val());
  })

  $('#appetizer-list').on('click', event => {

    $('#appetizer-paper').show();
    let currentIndex = event.target.id;
    
    //change input of recipe name and instructions to reflect current item
    let valInput = $('#appetizer-list li').eq(currentIndex).text();

    $('#recipe-name-input2').attr("value", valInput);

    console.log($('#recipe-name-input2'))

    let getItems = JSON.parse(localStorage.getItem("allAppetizerEntries")) || [];
    let myArray = getItems;
    let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
    let instructionsSet = getItems[test]._instructions;
    $('#instructions2').attr("value", instructionsSet);
  })

  $('#main-course-list').on('click', event => {

    $('#main-course-paper').show();
    let currentIndex = event.target.id;
    
    //change input of recipe name and instructions to reflect current item
    let valInput = $('#main-course-list li').eq(currentIndex).text();

    $('#recipe-name-input3').attr("value", valInput);

    console.log($('#recipe-name-input3'))

    let getItems = JSON.parse(localStorage.getItem("allMainCourseEntries")) || [];
    let myArray = getItems;
    let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
    let instructionsSet = getItems[test]._instructions;
    $('#instructions3').attr("value", instructionsSet);
  })

  $('#dessert-list').on('click', event => {

    $('#dessert-paper').show();
    let currentIndex = event.target.id;
    
    //change input of recipe name and instructions to reflect current item
    let valInput = $('#dessert-list li').eq(currentIndex).text();

    $('#recipe-name-input4').attr("value", valInput);

    console.log($('#recipe-name-input4'))

    let getItems = JSON.parse(localStorage.getItem("allDessertEntries")) || [];
    let myArray = getItems;
    let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
    let instructionsSet = getItems[test]._instructions;
    $('#instructions4').attr("value", instructionsSet);
  })

  $('#drink-list').on('click', event => {

    $('#drink-paper').show();
    let currentIndex = event.target.id;
    
    //change input of recipe name and instructions to reflect current item
    let valInput = $('#drink-list li').eq(currentIndex).text();

    $('#recipe-name-input5').attr("value", valInput);

    console.log($('#recipe-name-input5'))

    let getItems = JSON.parse(localStorage.getItem("allDrinkEntries")) || [];
    let myArray = getItems;
    let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
    let instructionsSet = getItems[test]._instructions;
    $('#instructions5').attr("value", instructionsSet);
  })

  

});
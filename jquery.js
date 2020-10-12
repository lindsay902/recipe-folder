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

    // $('.tabOne').on('click', function() {
    //     $('a.switch').removeClass("activeTab");
    //         $(this).addClass("activeTab");
    //         $("#tabOne").show();
    //         $("#tabTwo").hide();
    //         $("#tabThree").hide();
    //         $("#tabFour").hide();
    //         $("#tabFive").hide();
    //         event.preventDefault();
    // });
  
    // $('.tabTwo').on('click', function() {
    //     $('a.switch').removeClass("activeTab");
    //         $(this).addClass("activeTab");
    //         $("#tabOne").hide();
    //         $("#tabTwo").show()
    //         $("#tabThree").hide();
    //         $("#tabFour").hide();
    //         $("#tabFive").hide();
    //         event.preventDefault();
    // });
    
    // $('.tabThree').on('click', function() {
    //     $('a.switch').removeClass("activeTab");
    //         $(this).addClass("activeTab");
    //         $("#tabOne").hide();
    //         $("#tabTwo").hide();
    //         $("#tabThree").show();
    //         $("#tabFour").hide();
    //         $("#tabFive").hide();
    //         event.preventDefault();
    // });
    
    // $('.tabFour').on('click', function() {
    //     $('a.switch').removeClass("activeTab");
    //         $(this).addClass("activeTab");
    //         $("#tabOne").hide();
    //         $("#tabTwo").hide();
    //         $("#tabThree").hide();
    //         $("#tabFour").show();
    //         $("#tabFive").hide();
    //         event.preventDefault();
    // });

    // $('.tabFive').on('click', function() {
    //     $('a.switch').removeClass("activeTab");
    //         $(this).addClass("activeTab");
    //         $("#tabOne").hide();
    //         $("#tabTwo").hide();
    //         $("#tabThree").hide();
    //         $("#tabFour").hide();
    //         $("#tabFive").show();
    //         event.preventDefault();
    // });
          
    
    $('.add-brunch-content').on('click', () => {
        $('#brunch-paper').show();
        $('#recipe-name-input').val('');
        $('#instructions').val('');

    })

    $('.add-appetizer-content').on('click', () => {
        $('#appetizer-paper').show();
        $('#recipe-name-input').val('');
        $('#instructions').val('');

    })

    $('.close-button').on('click', () => {
        $('.paper').hide();
    })

    $('#submit-button').on('click', () => {
        $('.paper').hide();
    })

    $('#brunch-list').on('click', event => {

      $('.paper').show();
      let currentIndex = event.target.id;
      
      //change input of recipe name and instructions to reflect current item
      let valInput = $('#brunch-list li').eq(currentIndex).text();

      $('#recipe-name-input2').attr("value", valInput);

      console.log($('#recipe-name-input2'))

      let getItems = JSON.parse(localStorage.getItem("allEntries")) || [];
      let myArray = getItems;
      let test = myArray.map(function(e) { return e._recipename;}).indexOf(valInput);
      let instructionsSet = getItems[test]._instructions;
      $('#instructions').val(instructionsSet);
  })

    
    // let item = $('#recipe-name-input').value; //localStorage.getItem('recipename');

    // //select the active class?
    // $('#submit-button').on('click', () => {
    //     $('<li>'+item+'</li>').appendTo('#brunch-list');
    //     $('.paper').hide();        
    // })

    

});
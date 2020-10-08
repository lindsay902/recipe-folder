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
        $('.paper').show();
        $('#recipe-name-input').val('');
        $('#instructions').val('');

    })

    $('.close-button').on('click', () => {
        $('.paper').hide();
    })

    $('#submit-button').on('click', () => {
        $('.paper').hide();
    })
  



    
    // let item = $('#recipe-name-input').value; //localStorage.getItem('recipename');

    // //select the active class?
    // $('#submit-button').on('click', () => {
    //     $('<li>'+item+'</li>').appendTo('#brunch-list');
    //     $('.paper').hide();        
    // })

    

});
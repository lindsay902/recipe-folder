$(document).ready(() => {

    const brunchTab = $('.tabOne');

    //const activeTab = (tab) => {
    //    tab.on('click'), 
   // }
    $('.tabOne').on('click', function() {
        $('a.switch').removeClass("activeTab");
            $(this).addClass("activeTab");
            $("#tabOne").show();
            $("#tabTwo").hide();
            $("#tabThree").hide();
            $("#tabFour").hide();
            $("#tabFive").hide();
            event.preventDefault();
	});
  
    $('.tabTwo').on('click', function() {
        $('a.switch').removeClass("activeTab");
            $(this).addClass("activeTab");
            $("#tabOne").hide();
            $("#tabTwo").show()
            $("#tabThree").hide();
            $("#tabFour").hide();
            $("#tabFive").hide();
            event.preventDefault();
    });
    
    $('.tabThree').on('click', function() {
        $('a.switch').removeClass("activeTab");
            $(this).addClass("activeTab");
            $("#tabOne").hide();
            $("#tabTwo").hide();
            $("#tabThree").show();
            $("#tabFour").hide();
            $("#tabFive").hide();
            event.preventDefault();
    });
    
    $('.tabFour').on('click', function() {
        $('a.switch').removeClass("activeTab");
            $(this).addClass("activeTab");
            $("#tabOne").hide();
            $("#tabTwo").hide();
            $("#tabThree").hide();
            $("#tabFour").show();
            $("#tabFive").hide();
            event.preventDefault();
    });

    $('.tabFive').on('click', function() {
        $('a.switch').removeClass("activeTab");
            $(this).addClass("activeTab");
            $("#tabOne").hide();
            $("#tabTwo").hide();
            $("#tabThree").hide();
            $("#tabFour").hide();
            $("#tabFive").show();
            event.preventDefault();
    });
          
    
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

    $('#scrambled-eggs').on('click', () => {
        $('.paper').show();
    })

    //on li hover, change mouse



    
    // let item = $('#recipe-name-input').value; //localStorage.getItem('recipename');

    // //select the active class?
    // $('#submit-button').on('click', () => {
    //     $('<li>'+item+'</li>').appendTo('#brunch-list');
    //     $('.paper').hide();        
    // })

    

});
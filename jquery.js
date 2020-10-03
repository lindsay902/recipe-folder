$(document).ready(() => {

    //import {recipeAdd} from './script';

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

    })

    $('.close-button').on('click', () => {
        $('.paper').hide();
    })
    
    let recipeName = localStorage.getItem('recipename');

    //select the active class?
   /* $('.submit-button').on('click', () => {
        $('<li>'+recipeName+'</li>').appendTo('#recipe-name');        
    }) */

    

});
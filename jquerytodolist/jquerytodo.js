$(document).ready(() => {

    $('.add-todo-text-input').keypress('enter', event => {
        if (event.which === 13) {
            let mylist = $('#addTodoTextInput').val();
            $('ul').append('<li>'+mylist+'</li>');
            };
     });

     $('li').on('click', event => {
         $(event.currentTarget).toggleClass('line-strike');
     })

     $('.todos').sortable();

})

function watchForm(){
    let check = false;

    $('#addItem').on('submit', function(event){
        event.preventDefault();
        let value = $('#addItem').find('input').val();
        $('#itemList').append( `<li type = "none" class = "item">
                                    <div>${value}</div>
                                    <button class = "check">
                                        check
                                    </button>
                                    <button class = "delete">
                                        delete
                                    </button>
                                </li>
        `);
        $('#addItem').find('input').val('');
    });

    $('#itemList').on('click', 'button.check', function(event){
        event.preventDefault();
        check = !check;
        $(this).parent().find('div').css('text-decoration', check ? 'line-through' : 'none');
    });
    
    $('#itemList').on('click', 'button.delete', function(event){
        event.preventDefault();
        $(this).parent().remove();
    });
}

watchForm();
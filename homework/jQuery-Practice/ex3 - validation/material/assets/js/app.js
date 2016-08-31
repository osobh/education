$( function(){
    var hideWarn = $('#warn').hide();
    var hideSuccess = $('#success').hide();


    $( "#password" ).keyup(function() {
 	event.preventDefault();
    var password = $('#password').val();
    //console.log(password)

	});

    $('#form').submit(function(event) {
        event.preventDefault();
        var password = $('#password').val();
        //Condition to check and see if the password is 0 or smaller than 6
            if(password.length < 6 ){  
            hideWarn.show();
          
           }else{
            hideWarn.hide();
            $('.row').fadeOut(1000, function(){
                hideSuccess.fadeIn(1000);

            });
    
           }
    });

});
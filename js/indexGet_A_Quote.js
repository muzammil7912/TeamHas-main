$( function(){ 

    "use strict";

    $("#submit-form").on('click' , function(){ 
$(this).prop('disabled', true);
        var VisitorName = $('input[name=name]');
        var VisitorEmail = $('input[name=email]');
        var VisitorMessage = $('input[name=message]');
        var eml = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        var Validation = 1;
        if(VisitorName.val() === "")
        {
            VisitorName.css('border-color', 'red');
            Validation = 0;
            $(this).prop('disabled', false);
             return false;
        }else{
            VisitorName.css('border-color', '#e6e8ed');
        }

        if(VisitorEmail.val() === "")
        {
            VisitorEmail.css('border-color', 'red');
            Validation = 0;
            $(this).prop('disabled', false);

             return false;
       
        }else{
            VisitorEmail.css('border-color', '#e6e8ed');
        }

        if(!VisitorEmail.val().match(eml))
        {
            VisitorEmail.css('border-color', 'red');
            Validation = 0;  $("#submit-form").html("Invalid email");$(this).prop('disabled', false); return false; 
          
        }else{
            VisitorEmail.css('border-color', '#e6e8ed');
            $("#submit-form").html("Submit");
        }

        if($('#message').val() === "")
        {
            $('#message').css('border-color', 'red');
            Validation = 0;$(this).prop('disabled', false); return false;
            
        }else{
            $('#message').css('border-color', '#e6e8ed');
        }


        if(Validation)
        {
        var form = $('#sendconact')[0];
        var data = new FormData(form);
        $.ajax({
        url: "corePHP/indexgetAGeote.php",
        data: data,
        contentType: false,
        processData: false,
        type: 'POST'
        }).done(function (data) {

      
        if(data.match("IPOPIU"))
        {
        $("#submit-form").html("Submitted");
           Toastify({
            text: "Submitted",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        // setTimeout(() => {
        // location.reload();
        // }, 1999); 
        $("#sendconact").trigger('reset');
        $(this).closest('form').find("input[type=text], textarea, input[type=email], select").val("");
        }else{
            
           
           
            
        }

        // console.log(data);  
        });

        }


    });

});
$(document).ready(function() {
    $("#datepicker").datepicker();
    $( ".tabs" ).tabs();

    $("#myForm").validate({
    
    
    rules: {
    name:"required",
    street:"required",
    city: "required",
    phone:"required",
    datepicker:"required",
    email: {
    required: true,
    email: true,}
    },
    
    messages: {
    name: "Please enter your First Name",
    street: "Please enter your Street",
    city: "Please enter your City",
    phone: "Please enter your Phone Number",
    datepicker:"Please enter Correct Date",
    email: {
    required: "Please enter your email",
    email: "Please enter a valid email address"
    }
    },
    submitHandler: function(form) {
    window.location.href = "thank-you.html";
    }
    })
    

    });
    
    
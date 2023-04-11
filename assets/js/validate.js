// jquery validation
$(document).ready(function () {
$(".validate1").validate({
rules: {
    'name': {
        required: true,
        minlength: 2,
        maxlength: 15,
        pattern: /^[A-Za-z ]+$/
    },
    'phone': {
        required: true,
        minlength: 10,
        pattern: /^[0-9]{10}$/
    },
    'email': {
        required: true,
        email: true,
        pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
    }
},
messages: {
    'name': {
        required: "<br> Please enter a Username.",
        minlength: "<br> Username is too small",
        maxlength: "<br> Username is too large",
        pattern: "<br> Username must contain only alpabets"
    },
    'phone': {
        required: "<br> Please enter  valid Mobile number.",
        minlength: "<br> Mobile number must contain 10 digits",
        pattern: "<br> Mobile number must be in the format"
    },

    'email': {
        required: "<br> Please enter Email address",
        email: "<br> Please enter a valid email address",
        pattern: "<br> E-mail address should be in proper format"
    }
}
});
});

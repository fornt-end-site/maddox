// BootstrapValidator

// create account start 
$('.validation').bootstrapValidator({
    fields: {
        firstName: {
            validators: {
                notEmpty: {
                    message: 'The First name is required field',
                },
                stringLength: {
                    min: 3,
                    max: 15,
                    message: 'The Last Name Minmum 3 char.'
                },
                regexp: {
                    regexp: '^[a-zA-Z ]*$',
                    message: 'Only alphabets are allowed '
                }
            },
        },

        lastName: {
            validators: {
                notEmpty: {
                    message: 'The last name is required field',
                },
                stringLength: {
                    min: 3,
                    max: 50,
                    message: 'The Last Name Minmum 3 char.'
                },
                regexp: {
                    regexp: '^[a-zA-Z ]*$',
                    message: 'Only alphabets are allowed'
                }
            },
        },

        emailId: {
            validators: {
                notEmpty: {
                    message: 'Email address is required field',
                },
                regexp: {
                    regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                    message: 'The value is not a valid email address'
                },
            },
        },

        mobile: {
            validators: {
                regexp: {
                    regexp: "^[5-9][0-9]{0,9}$",
                    message: 'Invalid Mobile Number',
                },
                stringLength: {
                    min: 10,
                    max: 10,
                    message: 'Mobile should be 10 digits'
                },
              
                notEmpty: {
                    message: 'Mobile number is required field',
                }
            },
        },
        password: {
            validators: {
                notEmpty: {
                    message: 'Password is required',
                },
                regexp: {
                    regexp: '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[W_]).{8,}$',
                    message: 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.',
                },
                different: {
                    field: 'first_name,last_name',
                    message: 'Password should not match first or last name',
                },
            },
        },
        password_confirm: {
            validators: {
                notEmpty: {
                    message: 'Confirm Password is required',
                },
                identical: {
                    field: 'password',
                },
                different: {
                    field: 'first_name,last_name',
                    message: 'Confirm Password should match with password',
                },
            },
        },


        aadhar_number: {
            validators: {
                notEmpty: {
                    message: 'This field is required',
                },
                regexp: {
                    regexp: '^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$',
                    message: 'Enter valid Aadhar Number',
                },
            },
        },

        age: {
            validators: {
                notEmpty: {
                    message: 'age number is required field',
                },
                regexp: {
                    regexp: "^[1-9][1-9]{0,2}$",
                    message: 'Please access the number ',
                },
                stringLength: {
                    min: 1,
                    max: 2,
                    message: 'age should be 2 digits'
                },
            },
        },

        gender: {
            validators: {
                notEmpty: {
                    message: 'Gender is required field',
                },
            },
        },

        dob: {
            validators: {
                notEmpty: {
                    message: 'Date of Birth is required field',
                },
            },
            required: true,
        },

    },
    onSuccess: (function (e, data) {
        e.preventDefault();
        var pan_type = $(".radion_is_physical:checked").val();
        if (pan_type == "Y")
            var master_price =
                "{{ MdxHelper::getPanCardPricing('Y')['pan_price'] }}";
        else
            var master_price =
                "{{ MdxHelper::getPanCardPricing('N')['pan_price'] }}";

        var msg = 'Rs ' + master_price +
            ' will be deduct form your wallet for pan application.'
        $('#wallet_deduction_msg').html(msg);
        $('.serviceModal').modal({
            backdrop: 'static',
            keyboard: true,
            show: true
        });
    })

});

// address flieds start
$('#address_proof').bootstrapValidator({
    fields: {


        address_1: {
            validators: {
                stringLength: {
                    min: 2,
                    max: 50,
                    message: 'The address  must be less than 25 characters & Minmum 2 characters'
                },
                regexp: {
                    regexp: '^[a-zA-Z ]*$',
                    message: 'Only alphabets are allowed'
                }
            },
        },
        address_2: {
            validators: {
                stringLength: {
                    min: 2,
                    max: 50,
                    message: 'The address  must be less than 25 characters & Minmum 2 characters'
                },
                regexp: {
                    regexp: '^[a-zA-Z ]*$',
                    message: 'Only alphabets are allowed'
                }
            },
        },
        state: {
            validators: {
                notEmpty: {
                    message: 'State is required field',
                },
            },
        },
        district: {
            validators: {
                notEmpty: {
                    message: 'District is required field',
                },
            },
        },
        pincode: {
            validators: {
                notEmpty: {
                    message: 'Pincode is mandatory field',
                },
                regexp: {
                    regexp: '^[1-9][0-9]{5}$',
                    message: 'The value is not a valid pincode'
                },
            },

        },
        title: {
            validators: {
                notEmpty: {
                    message: 'Place is required field',
                },
                regexp: {
                    regexp: '^[a-zA-Z ]*$',
                    message: 'Only alphabets are allowed'
                },
            },
        },


    },
    onSuccess: (function (e, data) {
        e.preventDefault();
        var pan_type = $(".radion_is_physical:checked").val();
        if (pan_type == "Y")
            var master_price =
                "{{ MdxHelper::getPanCardPricing('Y')['pan_price'] }}";
        else
            var master_price =
                "{{ MdxHelper::getPanCardPricing('N')['pan_price'] }}";

        var msg = 'Rs ' + master_price +
            ' will be deduct form your wallet for pan application.'
        $('#wallet_deduction_msg').html(msg);
        $('.serviceModal').modal({
            backdrop: 'static',
            keyboard: true,
            show: true
        });
    })
});

$('.footerEmail').bootstrapValidator({
    fields: {
        emailId: {
            validators: {
                notEmpty: {
                    message: 'Email address is required field',
                },
                regexp: {
                    regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                    message: 'The value is not a valid email address'
                },
            },
        },
    },
});





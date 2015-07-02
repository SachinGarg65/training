function formValidation()
{
    var fname = document.registration.FName;
    var lname = document.registration.LName;
    var mgender = document.registration.msex;
    var fgender = document.registration.fsex;
    var address = document.registration.Address;
    var zip = document.registration.Zip;
    var mobile = document.registration.Mobile;
    var email = document.registration.Email;
    var Msg ='<%=session.getAttribute("getAlert")%>';
            if (allLetter(fname)) {
                if (lname_validation(lname)) {
                    if (validsex(mgender, fgender)) {
                        if (alphanumeric(address)) {
                            if (allnumeric(zip)) {
                                if (mobile_validation(mobile))
                                    if (ValidateEmail(email)) {
                                        if (Msg != "null") {
                                    }
                                }
                            }
                        }
                    }
                }
    return false;
}
function allLetter(fname){
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('First Name must have alphabet characters only');
        fname.focus();
        return false;
    }
}
function lname_validation(lname) {
        var letters = /^[A-Za-z]+$/;
        if (lname.value.match(letters)) {
            return true;
        }
        else {
            alert('Last Name must have alphabet characters only');
            lname.focus();
            return false;
        }
    }

    function validsex(mgender,fgender) {
        x = 0;

        if (mgender.checked) {
            x++;
        }
        if (fgender.checked) {
            x++;
        }
        if (x == 0) {
            alert('Select Male/Female');
            mgender.focus();
            return false;
        }
        else {
            return true;
        }
    }
        function alphanumeric(address) {
            var letters = /^[0-9a-zA-Z]+$/;
            if (address.value.match(letters)) {
                return true;
            }
            else {
                alert('User address must have alphanumeric characters only');
                address.focus();
                return false;
            }
        }
        function allnumeric(zip)
        {
            var numbers = /^[0-9]+$/;
            if(zip.value.match(numbers))
            {
                return true;
            }
            else
            {
                alert('ZIP code must have numeric characters only');
                zip.focus();
                return false;
            }
        }
        function mobile_validation(mobile)
        {
             var numbers = /^[0-9]+$/;
            if(mobile.value.match(numbers))
            {
        return true;
         }
         else
         {
        alert('Mobile No. must have numeric characters only');
        mobile.focus();
        return false;
         }
        }
        function ValidateEmail(email)
        {
            var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(email.value.match(emailRegEx))
            {
                return true;
            }
            else
            {
                alert("You have entered an invalid email address!");
                email.focus();
                return false;
            }
        }
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);


        function alertName(){
            alert("Form has been submitted");
        }
    }
}



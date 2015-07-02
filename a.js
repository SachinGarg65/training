function formValidation()
{
    var fname = document.registration.FName;
    var lname = document.registration.LName;
    var mgender = document.registration.msex;
    var fgender = document.registration.fsex;
            if (allLetter(fname)) {
                if (lname_validation(lname)) {
                    if (validsex(mgender, fgender)) {
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
        alert('first Name must have alphabet characters only');
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


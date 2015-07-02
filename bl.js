
function formValidation()
{
    var email = document.registration.Email;
    var psw = document.registration.Psw;
    {
        if(validateEmail(email))
        {
            if(passid_validation(psw,7,12))
            {
                return false;
            }
        }
    }
    function checkEmail() {

        var email = document.registration.Email;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return false;
        }
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;}
}
}
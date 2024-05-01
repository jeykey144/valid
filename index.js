
// var checkValidation = function () {
//     var valid = true;
//     //Kiểm tra rổng
//     valid = kiemTraRong('firstName', 'error_firstName') & kiemTraRong('firstName', 'error_lastName') & kiemTraRong('password', 'error_password') & kiemTraRong('confirmPassword', 'error_confirmPassword') & kiemTraRong('email', 'error_email');
//     //Kiểm tra tất cả là chuỗi
//     valid &= kiemTraTatCaLaChu('#firstName', '#error_firstName_all_leter') & kiemTraTatCaLaChu('#lastName', '#error_lastName_all_leter');
//     //Kiểm tra tất cả là số
//     valid &= kiemTraTatCaLaSo('#phone', '#error_phone');
//     valid &= kiemTraEmail('#email', '#error_email');
//     valid &= kiemTraDoDai('#password', '#error_password_min_max_length');
//     valid &= kiemTraGiaTri('#password', '#error_password_min_max_value', 20, 10);
//     if (!valid) {
//         return false;
//     }
//     return true;
// }

// var kiemTraRong = function (idValue, idError) {

//     var inputText = document.getElementById(idValue);

//     if (inputText.value.trim() === '') {
//         document.getElementById(idError).innerHTML = inputText.name + ' không được bỏ trống !';
//         document.getElementById(idError).style.display = 'block';

//         return false;
//     } else {
//         document.getElementById(idError).innerHTML = '';
//         document.getElementById(idError).style.display = 'none';
//         return true;
//     }

// }

// var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
//     //Lấy giá trị người dùng nhập vào từ selector
//     var inputText = document.querySelector(selectorValue);
//     var regexChu = /^[A-Za-z ]+$/;
//     if (regexChu.test(inputText.value)) {
//         //Hợp lệ 
//         document.querySelector(selectorError).innerHTML = '';
//         document.querySelector(selectorError).style.display = 'none';
//         return true;
//     } else {
//         //Không hợp lệ
//         document.querySelector(selectorError).innerHTML = inputText.name + ' phải là chữ !';
//         document.querySelector(selectorError).style.display = 'block';
//         return false;
//     }
// }


// var kiemTraTatCaLaSo = function (selectorValue, selectorError) {
//     var inputText = document.querySelector(selectorValue);
//     var regexNumber = /^[0-9]+$/;
//     if (regexNumber.test(inputText.value)) {
//         //Hợp lệ 
//         document.querySelector(selectorError).innerHTML = '';
//         document.querySelector(selectorError).style.display = 'none';
//         return true;
//     } else {
//         document.querySelector(selectorError).innerHTML = inputText.name + ' yêu cầu nhập số !';
//         document.querySelector(selectorError).style.display = 'block';
//         return false;
//     }
// }


// var kiemTraEmail = function (selectorValue, selectorError) {
//     var inputText = document.querySelector(selectorValue);
//     var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (regexEmail.test(inputText.value)) {
//         document.querySelector(selectorError).innerHTML = '';
//         document.querySelector(selectorError).style.display = 'none';
//         return true;
//     } else {
//         document.querySelector(selectorError).innerHTML = inputText.name + ' không hợp lệ !';
//         document.querySelector(selectorError).style.display = 'block';
//         return false;
//     }
// }



// var kiemTraDoDai = function (selectorValue, selectorError) {
//     var inputText = document.querySelector(selectorValue);
//     if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
//         document.querySelector(selectorError).innerHTML = '';
//         document.querySelector(selectorError).style.display = 'none';
//         return true;
//     } else {
//         document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự!';
//         document.querySelector(selectorError).style.display = 'block';
//         return false;
//     }
// }

// var kiemTraGiaTri = function (selectorValue, selectorError, maxValue, minValue) {
//     var inputText = document.querySelector(selectorValue);
//     if (inputText.value > Number(maxValue) || inputText.value < Number(minValue)) {
//         document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + minValue + ' đến ' + maxValue + ' !';
//         document.querySelector(selectorError).style.display = 'block';
//         return false;
//     } else {
//         document.querySelector(selectorError).innerHTML = '';
//         document.querySelector(selectorError).style.display = 'none';
//         return true;
//     }
// }

// document.getElementById('firstName').onblur = checkValidation;
// document.getElementById('lastName').onblur = checkValidation;

// document.getElementById('btnDangKy').onclick = checkValidation;




// // //Hàm kiểm tra trường dữ liệu chứa các loại ký tự khác nhau
// function containsCharacters(field, code) {
//     let regEx;
//     switch (code) {
//         case 1:
//             // Kiểm tra chứa kí tự
//             regEx = /(?=.*[a-zA-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải chứa ít nhất 1 ký tự');
//         case 2:
//             // Kí tự và số
//             regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải chứa ít nhất 1 ký tự và 1 số');
//         case 3:
//             // IN HOA, thường và số & Kí tự
//             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
//             return matchWithRegEx(regEx, field, 'Phải có ít nhất 1 ký tự IN HOA, một ký tự thường và một số');
//         case 4:
//             // chữ hoa, thường, số và kí tự đặc biệt
//             regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
//             return matchWithRegEx(regEx, field, 'Mật khẩu phải có ít nhất 1 kí tự HOA, kí tự thường, một số và kí tự đặc biệt');
//         case 5:
//             // Kiểm tra email
//             regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return matchWithRegEx(regEx, field, 'Email phải hợp lệ');
//         default:
//             return false;
//     }
// }

var checkValidation = function () {

    var valid = true;
    // check empty
    valid = kiemTraRong('firstName', 'error_firstName')
        & kiemTraRong('lastName', 'error_lastName')
        & kiemTraRong('password', 'error_password')
        & kiemTraRong('confirmPassword', 'error_confirmPassword')
        & kiemTraRong('phone', 'error_phone')
        & kiemTraRong('email', 'error_email')
    // check name
    valid &= checkName('firstName', 'error_firstName_all_leter') &
            checkName('lastName', 'error_lastName_all_leter');

    valid &= checkPhoneNumber('phone', 'error_phone_number');

    valid &= checkEmail('email', 'error_email_text');

    valid &= checkPassword('password', 'error_password_min_max_length');

    valid &= checkPasswordValue('password', 'confirmPassword');

    if (!valid) {
        return false;
    }
    return true;
    
};

var kiemTraRong = function (selectorValue,selectorError) {
    var inputText = document.getElementById(selectorValue)
    var inputError = document.getElementById(selectorError)

    if(inputText.value.trim() === "") {
        inputError.innerHTML = inputText.name + " không được bỏ trống!";
        return false;
    } else {
        inputError.style.display = 'none';
        return true;
    }
}

var checkName = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    var inputError = document.getElementById(selectorError);
    var regex = /^[A-Z\p{L}][\p{L}\s']+$/u;
    if(regex.test(inputText.value)) {
        inputError.innerHTML = '';
        inputError.style.display = 'none';
        return true;
    } else {
        inputError.innerHTML = inputText.name + " phải bắt đầu in hoa, không được chứa số và ký tự đặc biệt";
        return false;
    }
}
var checkPhoneNumber = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    var inputError = document.getElementById(selectorError);
    var regexPhoneNumber = /^0\d{9}$/;
    if (regexPhoneNumber.test(inputText.value)) {
        inputError.innerHTML = '';
        inputError.style.display = 'none';
        return true;
    } else {
        inputError.innerHTML = inputText.name + " bắt đầu bằng số 0 và có 10 số!";
        return false;
    }
}

var checkEmail = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    var inputError = document.getElementById(selectorError);
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(inputText.value)) {
        inputError.innerHTML = '';
        inputError.style.display = 'none';
        return true;
    } else {
        inputError.innerHTML = inputText.name + " chưa hợp lệ";
        return false;
    }
}

var checkPassword = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    var inputError = document.getElementById(selectorError);

    if(inputText.value.length > inputText.minLength && inputText.value.length < inputText.maxLength) {
        inputError.innerHTML = '';
        inputError.style.display = 'none';
        return true;
    } else {
        inputError.innerHTML = "Password phải từ 6 đến 32 ký tự!"
        return false;
    }
}

var checkPasswordValue = function(password,confirmPassword) {
    var passwordValue = document.getElementById(password);
    var confirmPasswordValue = document.getElementById(confirmPassword);

    if(passwordValue.value === confirmPasswordValue.value) {
        document.getElementById('error_password_min_max_value').innerHTML = '';
        document.getElementById('error_password_min_max_value').style.display = 'none';
        return true;
    } else {
        document.getElementById('error_password_min_max_value').innerHTML = "Password doesn't match";


        // console.log(document.getElementById('error_confirmPassword'))
        return false;
    }
}


document.getElementById('firstName').addEventListener('blur', checkValidation);
document.getElementById('lastName').addEventListener('blur', checkValidation);
document.getElementById('phone').addEventListener('blur', checkValidation);
document.getElementById('password').addEventListener('blur', checkValidation);
document.getElementById('email').addEventListener('blur', checkValidation);

const dangky = document.querySelector('#btnDangky');
dangky.onclick = checkValidation;
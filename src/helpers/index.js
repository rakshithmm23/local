export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function validateMobile(mobile) {
  if (/^\d{10}$/.test(mobile)) {
    return true;
  } else {
      return false;
  }
}

export function isNumeric(num){
    return !isNaN(num);
}

export function validatePassword(inputValue) {
  let regExp=new RegExp(/\s/);
  return inputValue.length >= 6 && !regExp.test(inputValue);
}
export function validateField(validationObj, value){
  if (validationObj && validationObj.validationType) {
    switch(validationObj.validationType) {
      case 'text': {
        let isValid = value && value.length ? true : false;
        if (validationObj.minLength) {
          isValid = value.length >= validationObj.minLength;
        }
        return isValid;
      }
      case 'email': {
        return validateEmail(value);
      }
      case 'mobile': {
        return validateMobile(value);
      }
      case 'password': {
        let isValid = value && value.length ? true : false;
        if (validationObj.minLength) {
          isValid = value.length >= validationObj.minLength;
        }
        return isValid;
      }
    case 'email/mobile': {
      if(isNumeric(value)){
        return validateMobile(value);
      } else {
        return validateEmail(value);
      }
    }
    }
  }
  return false;
}

export function testSpaces(inputValue){
    return inputValue.replace(/\s/,"").length;
}

export function windowWidth() {
    let docElemProp = window.document.documentElement.clientWidth,
        body = window.document.body;
    return window.document.compatMode === "CSS1Compat" && docElemProp || body && body.clientWidth || docElemProp;
}
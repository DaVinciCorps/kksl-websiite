export const url = "http://localhost:4000/";

export function checkEmail(email) {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        return false;
    }
    return true;
}

export function checkPhone(phone){
    if(phone.length==10){
        return true;
    }
    return false;
}
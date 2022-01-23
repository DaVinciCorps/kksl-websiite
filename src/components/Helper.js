export const url = "http://54.186.118.66:4000/";

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

var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function parseDate(date){
    const dat = new Date(date);
    const mo = dat.getMonth();
    const day = dat.getDate();
    const year = dat.getFullYear();
    const res = String(day) + " " + month[mo] + ", " + String(year);
    return res;
}
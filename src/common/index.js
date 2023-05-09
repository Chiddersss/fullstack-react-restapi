export const writeCookie = (key, value, days) => {
    let date = new Date();
    days = days || 365;
    date.setTime(date.getDate() + days)

    let cookie = document.cookie = key + "=" + "; expires=" + date.toGMTString() + "; path=/";

    return cookie;

}

export const getCookie = (cookieName) => {
    //the pattern we want to find in our cookie
    // find the cookie with the name we pass to the function
    const re = new RegExp('[; ]' + cookieName + '=([^\\s;]*)');
    console.log("regular expression")
    console.log(re)
    try {
        let cookie = document.cookie.match(re)[0]
    } catch (error) {
        console.log("cookie not found")
        return false;
    }
}


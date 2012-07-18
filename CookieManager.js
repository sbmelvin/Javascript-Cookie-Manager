// CookieManager - Stephen Melvin 2012
// Sets/Gets cookie values
var CookieManager = (function() {

    return {
        // Sets a cookie where name = value;
        setValue: function(name, value) {
            document.cookie = name + "=" + encodeURIComponent(value);
        },

        // Retrieves the value of cookie 'name'.
        // Returns:
        // On Success getValue returns the value of the cookie requested,
        // otherwise getValue returns false.
        getValue: function(name) {
            var cookies = document.cookie;
            if (cookies === "") {
                return false;
            }

            var list = cookies.split("; ");
            var i;
            for (i = 0; i < list.length; i++) {
                var cookie = list[i];
                var p = cookie.indexOf("=");
                var cookiename = cookie.substring(0, p);
                var cookievalue = cookie.substring(p + 1);
                // Check if str1 is inside str2
                if (cookiename == cookiename.match(name)) {
                    return decodeURIComponent(cookievalue);
                }
            }

            return false;
        }
    };

})();
/**
 * Validator Object
 */
var Validator = (function() {
    
	var PHONE_MIN_LENGTH = 6;


    /**
     * this function check difference of 182 days(6 months) between to dates.
     * @param dateFlight - date of flight
     * @param datePass - date of passport expiry
     * @retuen boolean - true if it has more than 6 months, false otherwise
     */
    function passportExpiryCheck(dateOfFlight, dateOfPass)
    {
        var timeDiff = dateOfPass.getTime() - dateOfFlight.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //case the difference is more than 6 months return true
        if (diffDays > 182){
            return true;
        }
        return false;
    }
    /**
     * this function check if hebrew letters are included in the input string
     * @param str - string to check
     * @retuen boolean - true if hebrew is conitained in the string, false otherwise
     */
    function isContainsHebrew(str){
        var engChars=/[\u0590-\u05FF]/;
        if (engChars.test(str)){
            return true;
        }
        return false;
    }

    /**
	 * Validating Email address
	 * @param {string} email
	 * @return {boolean}
	 */
    function email(email)
	{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(email) && !isContainsHebrew(email)) ;
	}
	
	/**
	 * Return Boolean Result Wether the string is empty
	 * @param {string} str
	 * @return {boolean}
	 */
	function isEmpty(str)
	{
		return (!str || str.length == 0 ? true : false);
	}
	
	/**
	 * Opposite MNethod for is Emty
	 * @param {string} str
	 * @return {boolean}
	 */
	function isSet(str)
	{
		return (str.length <= 0 ? false : true);
	}
	
	/**
	 * Validate String 
	 * @param {string} str
	 * @return {boolean}
	 */
	function string(str, letters_only)
	{
		/* Cover NULL Case */
		if(str == null) return false;
		
        var re = (letters_only ? /[A-Za-z\u0590-\u05FF]/ : /[A-Za-z\u0590-\u05FF0-9]/);

        return re.test(str);
	}
	
	/**
	 * Validating Phone Number
	 * @param {int} phone
	 * @return {boolean}
	 */
	function phone(phone)
	{
		/* Validate String */
        if(!Validator.string(phone, false)) return false;
		
		// Replacing - Between Digits 
		phone = phone.replace(/-/g, '');
		// Replacing + Between Digits
		phone = phone.replace(/\+/g, '');
		// Replace * Between Digits
		phone = phone.replace(/\*/g, '');
        //check if minimum phone length
        if (phone.length < PHONE_MIN_LENGTH) return false;
		/* Verify Phone Include Number Only */
		reg = /[a-z\u0590-\u05FF]/i;
		return (reg.test(phone) ? false : true);
	}
	
	/**
	 * Return Boolean if current is number
	 * @param {mixed} num
	 * @param {boolean} positive_only
	 */
	function number(num, positive_only)
	{
		if(!parseInt(num)) return false;
		/* Only if positive reqruied */
		if(positive_only) return (parseInt(num) > 0 ? true : false);
		
		return true;
	}
	
	/**
	 * Return Boolean Response if 2 strings are match
	 * @param {string} string_a
	 * @param {string} string_b
	 * @return {bool}
	 */
	function isStringMatch(string_a, string_b)
	{
		if(typeof(string_a) != 'string' || typeof(string_b) != 'string') return false;
		
		return (string_a == string_b);
	}
	
	return {
		isStringMatch:isStringMatch,
		email:email,
		string:string,
		phone:phone,
		isEmpty:isEmpty,
		isSet:isSet,
		number:number,
        isContainsHebrew:isContainsHebrew,
        passportExpiryCheck:passportExpiryCheck
	};
})();
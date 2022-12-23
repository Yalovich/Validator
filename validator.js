
class Validate
{
	/**
     * Validate passport expiration date.
	 * Check difference of 182 days(6 months) between to dates.
     * @param dateFlight - date of flight
     * @param datePass - date of passport expiry
     * @retuen boolean - true if it has more than 6 months, false otherwise
     */
	static passportExpiration(dateOfFlight, dateOfPass)
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
	 * Email address validations
	 * @param {string} email
	 * @return {boolean}
	 */
	 static email(email) {
		 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		 return (re.test(email)) ;
	 }

	/**
	 * Return Boolean Result Wether the string is empty
	 * @param {string} str
	 * @return {boolean}
	 */
	 static isEmpty(str) { return (!str || str.length == 0 ? true : false); }

	/**
	 * Validate String 
	 * @param {string} str
	 * @return {boolean}
	 */
	 static stringOnly(str) {
		 if(str == null) return false;
		 return /[A-Za-z\u0590-\u05FF]/.test(str);
	 }
}

module.exports = Validate
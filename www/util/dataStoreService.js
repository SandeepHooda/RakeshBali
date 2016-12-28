APP.SERVICES.service('dataRestore', function() {
	
	this.getContactUs = function(){
		var contactData = {};
		contactData.phones = ['8023645633','9448467036'];
		contactData.emails = ['info@baliacoustic.com','bali_acoustic@yahoo.com'];
		return contactData;
	}
	
	this.saveInCache = function (key, value) {
		window.localStorage.setItem(key, value)
	}
	this.getFromCache = function (key, type) {
		var value = "";
		
		if (type === 'boolean'){
			value = false;
			if (window.localStorage.getItem(key) === 'true'){
				value = true;
			}
		}
		
		
		return value;
	}
    this.restoreYourDetails = function (mydata) {
    	mydata.firstName = window.localStorage.getItem("firstName");
    	mydata.lastName = window.localStorage.getItem("lastName");
    	mydata.phoneNumber = window.localStorage.getItem("phoneNumber");
    	mydata.email = window.localStorage.getItem("email");
    	
    	mydata.roomSize = window.localStorage.getItem("roomSize");
    	mydata.windowCount = window.localStorage.getItem("windowCount");
    	mydata.doorCount = window.localStorage.getItem("doorCount");
    	mydata.typeOfBusiness = window.localStorage.getItem("typeOfBusiness");
    }
    
    
});
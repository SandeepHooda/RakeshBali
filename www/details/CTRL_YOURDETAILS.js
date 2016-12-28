APP.CONTROLLERS.controller ('CTRL_YOURDETAILS',['$scope','dataRestore','$cordovaSms','$ionicPlatform',
    function($scope,dataRestore,$cordovaSms,$ionicPlatform){
	$scope.mydata = {}
	
	
	$scope.checkNull = function(data){
		if(data && data != null && data != 'null'){
			
		}else {
			data = "";
		}
	}
	$scope.saveYourDetails = function(){
		
		$scope.checkNull($scope.mydata.firstName);
		$scope.checkNull($scope.mydata.lastName);
		$scope.checkNull($scope.mydata.phoneNumber);
		$scope.checkNull($scope.mydata.email);
		$scope.checkNull($scope.mydata.roomSize);
		$scope.checkNull($scope.mydata.windowCount);
		$scope.checkNull($scope.mydata.doorCount);
		$scope.checkNull($scope.mydata.typeOfBusiness);
		
		window.localStorage.setItem("firstName",$scope.mydata.firstName);
		window.localStorage.setItem("lastName",$scope.mydata.lastName);
		window.localStorage.setItem("phoneNumber",$scope.mydata.phoneNumber);
		window.localStorage.setItem("email",$scope.mydata.email);
		
		window.localStorage.setItem("roomSize",$scope.mydata.roomSize);
		window.localStorage.setItem("windowCount",$scope.mydata.windowCount);
		window.localStorage.setItem("doorCount",$scope.mydata.doorCount);
		window.localStorage.setItem("typeOfBusiness",$scope.mydata.typeOfBusiness);
	}
		
	$scope.submit = function(){
		
		
		$scope.sendSMS();
		$scope.sendEmail();
	}
	$scope.composeMessage = function(){
		$scope.contact = dataRestore.getContactUs();
		dataRestore.restoreYourDetails($scope.mydata);
		var message = $scope.mydata.firstName +" "+$scope.mydata.lastName +" "+$scope.mydata.phoneNumber+ " "+$scope.mydata.email+  " Needs Acoustic solutions. room size :  "+$scope.mydata.roomSize;
		message += " windows: "+$scope.mydata.windowCount +" doors: "+$scope.mydata.doorCount +" Type of business: "+$scope.mydata.typeOfBusiness;
		return message;
	}
	$scope.sendSMS = function(){
		//Send SMS cordova plugin add cordova-sms-plugin
		var options = {
			    replaceLineBreaks: false, // true to replace \n by a new line, false by default
			    android: {
			      intent: '' // send SMS with the native android SMS messaging
			        //intent: '' // send SMS without open any other app
			        //intent: 'INTENT' // send SMS inside a default SMS app
			    }
			  };
		var message = $scope.composeMessage();
		for (var i =0; i<$scope.contact.phones.length; i++){
			$cordovaSms.send($scope.contact.phones[i], message, options)
		      .then(function() {
		      }, function(error) {
		      });
		}
		
	}
	$scope.sendEmail = function(){
		//Send Email cordova plugin add cordova-plugin-email-composer@0.8.3
		//cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git#0.8.2
		var message = $scope.composeMessage();
		
		cordova.plugins.email.open({
		    to:      $scope.contact.emails,
		    subject: 'Needs Acoustic solutions',
		    body:  message  
		});
	}
	$ionicPlatform.ready( function() {
		dataRestore.restoreYourDetails($scope.mydata);
	});
	}
])
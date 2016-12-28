APP.CONTROLLERS.controller ('CTRL_CONTACTUS',['$scope','dataRestore','$cordovaSms',
    function($scope,dataRestore,$cordovaSms){
		$scope.mydata = {};
		$scope.contact = {};
	    $scope.contact = dataRestore.getContactUs();
		$scope.call = function(phoneNumber){
			//alert(phoneNumber)
			//cordova plugin add https://github.com/Rohfosho/CordovaCallNumberPlugin.git
			window.plugins.CallNumber.callNumber(function(){}, function(){}, phoneNumber, true);
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
		
		$scope.website = function(){
			//cordova plugin add cordova-plugin-inappbrowser
			window.open('http://www.baliacoustic.com/index.htm', '_system');
		}
	}
])
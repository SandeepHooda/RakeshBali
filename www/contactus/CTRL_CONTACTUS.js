APP.CONTROLLERS.controller ('CTRL_CONTACTUS',['$scope',
    function($scope){
			
		$scope.call = function(phoneNumber){
			alert(phoneNumber)
			//cordova plugin add https://github.com/Rohfosho/CordovaCallNumberPlugin.git
			//window.plugins.CallNumber.callNumber(function(){}, function(){}, "944846703#6", true);
		}	
		
		$scope.website = function(phoneNumber){
			
		}
		
	}
])
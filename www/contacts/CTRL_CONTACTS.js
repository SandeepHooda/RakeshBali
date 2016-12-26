APP.CONTROLLERS.controller ('CTRL_CONTACTS',['$scope',
    function($scope){
			
		$scope.call = function(){
			//cordova plugin add https://github.com/Rohfosho/CordovaCallNumberPlugin.git
			window.plugins.CallNumber.callNumber(function(){}, function(){}, "9216411835", true);
		}	
	}
])
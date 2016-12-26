APP.CONTROLLERS.controller ('CTRL_HOME',['$scope','$http',
    function($scope,$http){
	
	
	var url = "";
	if(ionic.Platform.isAndroid()){
		url = "/android_asset/www/";
	}
	$scope.groups = [];
	$http.get(url+'js/data/AppData.json').success(function(response){ 
	console.log(response)
	for (var i=0; i<response.length; i++) {
	    $scope.groups[i] = {
	      name: response[i].name,
	      data: response[i].data
	    };
	    
	  }
	
	setTimeout(function(){ 
		var accordion = angular.element( document.querySelector( '#accordion0' ) );
		var panel = angular.element( document.querySelector( '#panel0' ) );
		accordion.addClass('active');
		panel.addClass('show');
	},200);
	
	});
	
	$scope.toggleAccordian = function(index){
		var accordion = angular.element( document.querySelector( '#accordion'+index ) );
		var panel = angular.element( document.querySelector( '#panel'+index ) );
		
		if (panel.hasClass('show')){
			accordion.removeClass('active');
			panel.removeClass('show');
		}else {
			accordion.addClass('active');
			panel.addClass('show');
		}
		
	}
	  
	  
	  
		
	}
])
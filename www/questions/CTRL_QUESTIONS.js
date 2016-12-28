APP.CONTROLLERS.controller ('CTRL_QUESTIONS',['$scope','$http',
    function($scope,$http){
	$scope.headerIDS = [];
	
	var url = "";
	if(ionic.Platform.isAndroid()){
		url = "/android_asset/www/";
	}
	$scope.groups = [];
	$http.get(url+'js/data/faq.json').success(function(response){ 
	for (var i=0; i<response.length; i++) {
		if (response[i].data === ''){
			$scope.headerIDS.push(i)
		}
	    $scope.groups[i] = {
	      name: response[i].name,
	      data: response[i].data
	    };
	    
	  }
	
	setTimeout(function(){ 
		for (var i =0; i<$scope.groups.length;i++){
			if( $scope.headerIDS.indexOf(i) >= 0){
				var accordion = angular.element( document.querySelector( '#accordionfaq'+i ) );
				accordion.addClass('header');
				accordion.removeClass('accordion');	  
			}		
		}	   
    },2);
	
	});
	
	$scope.toggleAccordian = function(index){
		var accordion = angular.element( document.querySelector( '#accordionfaq'+index ) );
		var panel = angular.element( document.querySelector( '#panelfaq'+index ) );
		
		if( $scope.headerIDS.indexOf(index) == -1){
			if (panel.hasClass('show')){
				accordion.removeClass('active');
				panel.removeClass('show');
			}else {
				accordion.addClass('active');
				panel.addClass('show');
			}
		}
		
		
	}
	  
	  
	  
		
	}
])
APP.CONTROLLERS.controller ('CTRL_PRODUCTS',['$scope','$http',
    function($scope,$http){
	$scope.headerIDS = [];
	
	var url = "";
	if(ionic.Platform.isAndroid()){
		url = "/android_asset/www/";
	}
	$scope.products = [];
	$http.get(url+'js/data/products.json').success(function(response){ 
	for (var i=0; i<response.length; i++) {
		if (response[i].data === ''){
			$scope.headerIDS.push(i)
		}
	    $scope.products[i] = {
	      name: response[i].name,
	      img: response[i].img
	    };
	    $scope.products[i].specs = [];
	    for (var j=0;j<response[i].specs.length;j++){
	    	$scope.products[i].specs.push(response[i].specs[j]);
	    }
	    
	  }
	
	setTimeout(function(){ 
		for (var i =0; i<$scope.products.length;i++){
			if( $scope.headerIDS.indexOf(i) >= 0){
				var accordion = angular.element( document.querySelector( '#accordionproducts'+i ) );
				accordion.addClass('header');
				accordion.removeClass('accordion');	  
			}		
		}	   
    },2);
	
	});
	
	$scope.toggleAccordian = function(index){
		var accordion = angular.element( document.querySelector( '#accordionproducts'+index ) );
		var panel = angular.element( document.querySelector( '#panelproducts'+index ) );
		
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
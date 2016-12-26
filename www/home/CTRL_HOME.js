APP.CONTROLLERS.controller ('CTRL_HOME',['$scope',
    function($scope){
	$scope.groups = [];
	  for (var i=0; i<10; i++) {
	    $scope.groups[i] = {
	      name: i,
	      items: [],
	      show: false
	    };
	    for (var j=0; j<3; j++) {
	      $scope.groups[i].items.push(i + '-Sandeep' + j);
	    }
	  }
	  
	  /*
	   * if given group is the selected group, deselect it
	   * else, select the given group
	   */
	  $scope.toggleGroup = function(group) {
	    group.show = !group.show;
	  };
	  $scope.isGroupShown = function(group) {
	    return group.show;
	  };
	  
		
	}
])
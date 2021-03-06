// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var APP = {};
APP.DIRECTIVE = angular.module('allDirective',[]);
APP.CONTROLLERS = angular.module('allControllers',[]);
APP.SERVICES = angular.module('allServices',[]);
APP.DEPENDENCIES = ['allControllers',
                    'allServices',
                    'allDirective'
                    ];
APP.OTHERDEPENDENCIES = ['ionic','ngCordova'];
angular.module('starter', APP.DEPENDENCIES.concat(APP.OTHERDEPENDENCIES))
.config(['$urlRouterProvider','$stateProvider','$ionicConfigProvider',
         function($urlRouterProvider,$stateProvider,$ionicConfigProvider){
	$ionicConfigProvider.tabs.position('bottom');
	 // setup an abstract state for the tabs directive
				$stateProvider.state('tab',{
					url:'/tab',
					abstract: true,
					templateUrl:'tabs.html'	
					 
					
				}).state('tab.home',{
					url:'/home',
					views: {
						 'tab-home': {
						 templateUrl: 'home/home.html',
						 controller: 'CTRL_HOME'
						 }
					}	
					
				}).state('tab.yourdetails',{
					url:'/yourdetails',
					views: {
						 'tab-yourdetails': {
						 templateUrl: 'details/yourdetails.html',
						 controller: 'CTRL_YOURDETAILS'
						 }
					}	
					
				}).state('tab.contactus',{
					url:'/contactus',
					views: {
						 'tab-contactus': {
						 templateUrl: 'contactus/contactus.html',
						 controller: 'CTRL_CONTACTUS'
						 }
					}	
					
				}).state('tab.faq',{
					url:'/faq',
					views: {
						 'tab-faq': {
						 templateUrl: 'questions/questions.html',
						 controller: 'CTRL_QUESTIONS'
						 }
					}	
					
				}).state('tab.products',{
					url:'/products',
					views: {
						 'tab-products': {
						 templateUrl: 'products/products.html',
						 controller: 'CTRL_PRODUCTS'
						 }
					}	
					
				})
				$urlRouterProvider.otherwise('/tab/home');
			}
         ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

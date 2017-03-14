(function(wd){
	'use strict'
	
	app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/main');
		
		$stateProvider
		.state('main',{
			url:"/main",
			templateUrl:"pages/main/main.html?version="+wd.currVersion,
			resolve:{
				deps:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('pages/main/controllers/main.js?version='+wd.currVersion);
				}]
			}
		})
	}])
})(window)

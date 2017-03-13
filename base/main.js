(function(wd){
	'use strict'
	
	app.controller('appCtrl',['$scope',function($scope){
		$scope.app = {
                name: '新框架',
                version: '1.0.0',
            }

            if(!wd.currVersion){
                wd.localStorage.setItem('currVersion',$scope.app.version);
            }

            if(wd.currVersion && wd.currVersion != $scope.app.version){
                wd.localStorage.setItem('currVersion',$scope.app.version);
                wd.location.reload(true);
            }
	}]);
})(window)

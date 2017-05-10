module.controller('chineseCtrl',['$scope',function($scope){
	$scope.changeEnglish = function(e){
		window.location.replace('home_En.html'+location.hash)
	}
}])

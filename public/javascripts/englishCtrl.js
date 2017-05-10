module.controller('englishCtrl',['$scope',function($scope){
	$scope.changeChinese = function(e){
		window.location.replace('home_Ch.html'+location.hash)
	}
}])

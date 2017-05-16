module.controller('indexCtrl',['$scope','$http',function($scope,$http){
	$scope.newsList = [];
	$scope.changeChinese = function(e){
		if(window.language == 'chinese')
			window.location.replace('home_En.html'+location.hash)
		else
			window.location.replace('home_Ch.html'+location.hash)
	}
    var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		pagination: '.swiper-pagination'
	})
	$http.post('/plus-admin/home/news',{langueType:1,newsCount:10}).then(function(data){
		$scope.newsList = data.data.result
		if($scope.$$phaes)
			$scope.$digest()
	})
	$http.post('/plus-admin/newsWeb/detail',{id:4}).then(function(data){
		console.log(data)
		// document.body.innerHTML += data.data.result.content
	})
	$http.post('/plus-admin/newsWeb/queryPage',{langueType:1,"pageNo":1 ,"pageSize":20}).then(function(data){
		console.log(data)
	})
	$http.post('/plus-admin/home/product',{langueType:1,"pageNo":1 ,"pageSize":20}).then(function(data){
		console.log(data)
	})
}])

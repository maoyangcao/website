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

	$http.post('/plus-admin/home/product',{langueType:1}).then(function(data){
		$scope.homeProductList = Object.keys(data.data.result).map(function(key){
			data.data.result[key].pdName = key
			return data.data.result[key]
		});
	})
	
	$http.post('/plus-admin/product/assort/queryPage',{langueType:1,"pageNo":1 ,"pageSize":1}).then(function(data){
		console.log(data)
	})
}])

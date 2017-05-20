module.controller('productGroupCtrl',['$scope','$http',function($scope,$http){
		$scope.productGroupList =[]
	$scope.changeChinese = function(e){
		if(window.language == 'chinese')
			window.location.replace('home_En.html'+location.hash)
		else
			window.location.replace('home_Ch.html'+location.hash)
	}
	$scope.openDetail = function(item){
		item.show = !item.show
	}
	$scope.showGroups = function(item){
		$scope.productGroupList[item] = !$scope.productGroupList[item];
	}
	$scope.getNews = function(page){
		$http.post('/plus-admin/product/assort/queryPage',{langueType:1,"pageNo":page ,"pageSize":1}).then(function(data){
			$scope.productGroupList = data.data.result.itemList[0]
			$scope.totalPage = data.data.result.totalPage;
		})
	}
	$scope.getNews(1)
	$scope.page= 1;
}])

module.directive('news',function(){
	return {
		restrict:'E',
		scope:{
			content:'='
		},
		template:'<div></div>',
		link:function(scope,elem,attr){
			scope.$watch('content',function(news,old){
				if(news)
					elem[0].innerHTML = scope.content
			})
		}
	}
})
module.controller('newsCtrl',['$scope','$http',function($scope,$http){
	$scope.newsList =[]
	$scope.page= 1;
	$scope.getNews = function(page){
		$http.post('/plus-admin/newsWeb/queryPage',{langueType:1,"pageNo":page,"pageSize":10}).then(function(data){
			$scope.newsList = data.data.result.itemList
			$scope.totalPage = data.data.result.totalPage;
			if($scope.$$phaes)
				$scope.$digest()
		})
	}
	if(location.search.split('=')[1]!='null'){
		var id = location.search.split('=')[1]
		$http.post('/plus-admin/newsWeb/detail',{id:id}).then(function(data){
			 $scope.content = data.data.result.content
			 $scope.newsDetail = data.data.result;
		})
	}
	else
		$scope.getNews($scope.page)
	$scope.showNew = function(item){
		window.location.href='?id='+item.id+'#/news'
	}
}])

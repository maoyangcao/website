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
	console.log(location.search.split('=')[1])
	if(location.search.split('=')[1]!='null'){
		var id = location.search.split('=')[1]
		$http.post('/plus-admin/newsWeb/detail',{id:id}).then(function(data){
			 $scope.content = data.data.result.content
			 $scope.newsDetail = data.data.result;
		})
	}
	else
		$http.post('/plus-admin/newsWeb/queryPage',{langueType:1,"pageNo":1 ,"pageSize":20}).then(function(data){
			$scope.newsList = data.data.result.itemList
			if($scope.$$phaes)
				$scope.$digest()
		})
	$scope.showNew = function(item){
		window.location.href='?id='+item.id+'#/news'
	}
}])

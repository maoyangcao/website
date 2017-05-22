module.directive('pagequery',function(){
	return {
		restrict:'E',
		scope:{
			page:'=',
			allpage:'=',
			getnews:'&'
		},
		template:'<div class="pagequery">'
					+'<span ng-click="first()" ng-en="first page">首页</span>'
					+'<span ng-click="pre()" ng-en="previous page">上一页</span>'
					+'<span ng-repeat="num in pageList track by $index" ng-bind="num" ng-click="changePage(num)" ng-class={"true":"pagequery_select"}[num==page] ng-if="page-num ==1 || page-num == 0 ||page-num ==-1 "></span>'
					+'<span ng-click="next()" ng-en="next page">下一页</span>'
					+'<span ng-click="last()"ng-en="trailer page">尾页</span>'
				 +'</div>'
				 +'<style>'
				 +'.pagequery{text-align:center;padding:1rem;margin:1rem;}'
 				 +'.pagequery_select{background:#00A0E9 !important;color:#FFF !important}'
				 +'.pagequery span{display:inline-block;color:#00A0E9;background:#FFF;border:1px solid #ddd;transition:0.3s;padding:8px;margin:0px 1.4rem}'
				 +'.pagequery span:hover{background:#00A0E9;color:#FFF;cursor:pointer}'
				 +'</style>',
		 link:function(scope){
			scope.pageList = [];
			scope.$watch('allpage',function(news){
				if(news)
					for(var i=1; i<= scope.allpage; i++)
						scope.pageList.push(i)
			})
	 		scope.changePage = function (num){
				scope.page = num;
				scope.getnews()(scope.page)
			}
			scope.pre = function (){
				if(scope.page != 1)
					scope.page--;
				scope.getnews()(scope.page)
			}
			scope.next = function (){
				if(scope.page != scope.allpage)
					scope.page++;
				scope.getnews()(scope.page)
			}
			scope.first = function(){
				scope.page = 1;
				scope.getnews()(scope.page)
			}
			scope.last = function(){
				scope.page = scope.allpage;
				scope.getnews()(scope.page)
			}
		 }
	}
})


module.directive('ngHeight',function(){
	return{
		restrict:"A",
		scope:{
			ngHeight:'='
		},
		link:function(scope,elem,attr){
			var height = elem[0].clientHeight;
			scope.$watch('ngHeight',function(news){
				if(news)
					if(height<150)
						elem[0].style.height ='150px'
					else
						elem[0].style.height = height+50+'px'
				else
						elem[0].style.height ='0px'
			})
		}
	}
})

module.directive('ngHtml',function(){
	return{
		restrict:"A",
		scope:{
			ngHtml:'='
		},
		link:function(scope,elem,attr){
			scope.$watch('ngHtml',function(news){
				if(news)
					elem[0].innerHTML=scope.ngHtml
			})
		}
	}
})

module.directive('ngEn',function(){
	return{
		restrict:"A",
		scope:{
			ngEn:'@'
		},
		link:function(scope,elem,attr){
			if(window.language != 'chinese')
				elem[0].innerHTML = scope.ngEn
			scope.$watch('ngEn',function(news){
				if(window.language != 'chinese')
					elem[0].innerHTML = scope.ngEn
			})
		}
	}
})

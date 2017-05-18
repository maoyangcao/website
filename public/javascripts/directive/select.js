module.directive('ngselect',function(){
	return {
		restrict:'E',
		scope:{
			// title:'=',
			// list:'='
		},
		template:'<span>'
				 	+'<div ng-bind="select" class="selectItem"></div>'
					+'<div style="border-right:1px solid #ddd;border-left:1px solid #ddd;">'
						+'<div ng-repeat="item in list" ng-bind="item.key" class="selectItem selectItem_item" ></div>'
					+'</div>'
				 +'</span>'
				 +'<style>'
				 +'.selectItem{min-width:18rem;height:3.5rem;font-size:2rem;font-weight:bold;padding:0.5rem 2rem;border:1px solid #c9c9c9}'
				 +'.selectItem_item{border:0px;border-bottom:1px solid #ddd}'
				 +'</style>' ,
		 link:function(scope,elem){
			 scope.select = 'aaaa'
			 scope.list = [
				 {key:'aaa',value:'aaa'},
				 {key:'bbb',value:'bbb'},
				 {key:'ccc',value:'ccc'},
				 {key:'ddd',value:'ddd'}
			 ]
			 console.log(elem)
		 }
	}
})

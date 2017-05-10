module.controller('insideCtrl',['$scope',function($scope){
	$scope.changeChinese = function(e){
		if(window.language == 'chinese')
			window.location.replace('home_En.html'+location.hash)
		else
			window.location.replace('home_Ch.html'+location.hash)
	}
	var tap = ['inside','outside','sence']
	var tapId = ['insideId','outsideId','senceId']
	$scope.change = function(name){

		tap.forEach(function(item){
			if(item == name)
				document.getElementById(item).className = 'am-tab-panel  am-active am-in'
			else
				document.getElementById(item).className = 'am-tab-panel'
		})
		tapId.forEach(function(item){
			if(item.indexOf(name)>-1)
				document.getElementById(item).className = 'am-active'
			else
				document.getElementById(item).className = ''
		})
	}

}])

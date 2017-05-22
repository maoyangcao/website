module.controller('productCtrl',['$scope','getproduct',function(scope,getproduct){
	scope.selected = {};
	scope.productPrarm = {};
	scope.selectBox = false;
	scope.prarm = {}
	window.location.search.substr(1).split('&').forEach(function(item){
		scope.prarm[item.split('=')[0]] = item.split('=')[1]
	})
	scope.$on("changeproduct",function(event,product){
		scope.changeProduct({name:product})
	})
	function callback(data){
		Object.keys(data).forEach(function(item){
			scope[item] = data[item]
		})
		if(sessionStorage.getItem('productName'))
			scope.changeProduct({name:sessionStorage.getItem('productName')})
	}
	getproduct.init('reflector',callback)
	getproduct.init('led',callback)
	getproduct.init('lens',callback)
	getproduct.init('electricalSource',callback)

	scope.changeProduct = function(tar){
		scope.prarm.product = undefined
		scope.productList = scope.productList.map(function(item){
			item.name == tar.name ?
				item.active = true :
				item.active = false ;
			return item;
		})
		if(scope.selectBox)
			scope.selectBox = false;
		if(!scope.list.body[tar.name])
			getproduct.init(tar.name,callback)
	}

	scope.reload = function(product,prarm){
		scope.productList.every(function(item){
			if(item.name == product){
				item.filtration.forEach(function(key){
					if(!prarm[key.en_name])
						prarm[key.en_name] = undefined;
				})
				return false;
			}
			return true;
		})
		getproduct.select(product,prarm,callback)
	}
	scope.reset = function(product){
		scope.productPrarm = {};
		scope.productList.every(function(item){
			if(item.name == product){
				item.filtration.forEach(function(key){
						scope.productPrarm[key.en_name] = undefined;
				})
				return false;
			}
			return true;
		})
	}
	scope.getList = function(page){
		scope.productList.every(function(item){
			if(item.active){
				 getproduct.getList(item.name,page,callback)
				 return false;
			}
			return true;
		})
	}
	scope.showDetail = function(head,item){
		scope.selectedProduct = {
			item:item,
			head:head
		};
		document.getElementById('toogle').click()
	}
}])

module.controller('productCtrl',['$scope','getproduct',function(scope,getproduct){
	scope.selected = {}
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
		if(!scope.$$phase)
			scope.$digest()
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
	scope.choose = function(product,key,value){
		scope.productList = scope.productList.map(function(item){
			if(item.name == product.name){
				if(!item.selectedKey)
					item.selectedKey = {}
				if(!item.selectedKey[key]||item.selectedKey[key]!=value)
					item.selectedKey[key] = value;
				else
					item.selectedKey[key] = undefined;
				getproduct.select(product.name,item.selectedKey,callback)
			}
			return item;
		})
	}
	scope.closePic = function(){
		document.getElementById('product_pic').style.display = 'none'
	}
	scope.showPic = function(data){
		scope.selected =data;
		document.getElementById('product_pic').style.display = 'block'
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
	scope.showSelect = function(e,item){
		e.stopPropagation()
		console.log(document.getElementById(item.name).scrollHeight)
		if(document.getElementById(item.name).style.height == '0px' || document.getElementById(item.name).style.height == '')
			document.getElementById(item.name).style.height = document.getElementById(item.name).offsetTop +'px'
		else
			document.getElementById(item.name).style.height = '0px';
	}
	scope.showDetail = function(head,item){
		scope.selectedProduct = {
			item:item,
			head:head
		};
	}

	scope.showpic = function(img,imgList){
		console.log(img,imgList)
		if(imgList){
			scope.selectedPicList = imgList;
		    showImg();
		}
		else{
			scope.selectedPicList = [img];
			showImg()
		}

	}
	var swiper;

function showImg () {
    $('#swiper-close').show();
    $('#swiper-box').show(function () {
        initSwiper();
        if (!$('#swiper-box').hasClass('show')) {
            $('#swiper-box').addClass('show');
        }
    });
}

function hideImg () {
    $('#swiper-close').hide();
    $('#swiper-box').removeClass('show');
    $('#swiper-box').hide();
}

function initSwiper () {
    if (swiper) {
        return;
    }
    swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true
    });
}

$('#show').click(function () {
    showImg([
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494052552278&di=ef604cecf5413490b60b6e1a795f5114&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F18%2F20141118193632_aXQXB.jpeg',
        'https://f12.baidu.com/it/u=2873946516,3159127615&fm=72'
    ]);
});

$('#swiper-close').click(function () {
    hideImg();
})


}])

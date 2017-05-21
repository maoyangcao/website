module.controller('contactCtrl',['$scope',function($scope){
	$scope.changeChinese = function(e){
		if(window.language == 'chinese')
			window.location.replace('home_En.html'+location.hash)
		else
			window.location.replace('home_Ch.html'+location.hash)
	}
	setTimeout(function(){
		    var latlng = new google.maps.LatLng(22.584563, 113.947256);  
   
		    var mapOptions = {  
		        zoom: 16, //初始放大倍數  
		        center: latlng, //中心點所在位置  
		        mapTypeId: google.maps.MapTypeId.ROADMAP //正常2D道路模式  
		    };  
		   
		    var map = new google.maps.Map(  
		        document.getElementById("map_canvas"), mapOptions);  
		 
		    var marker = new google.maps.Marker({  
		        position: latlng,   
		        title: "一加一照明科技有限公司", 
		        map: map 
		    });   
	},2000)
}])

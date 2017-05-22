var module = angular.module('app',['ngRoute'])
module.controller('mainCtrl',['$scope','$http',function($scope,$http){
	if(location.hash == '/' || location.hash == '')
		location.replace('#/index')
	window.$scope = $scope
	$scope.language = window.language;
	if($scope.language == 'chinese')
		window.langueType = 1;
	else
		window.langueType = 2;
	$scope.changeLanguage = function(e){
		if($scope.language == 'chinese')
			window.location.replace('home_En.html'+location.hash)
		else
			window.location.replace('home_Ch.html'+location.hash)
	}
	$scope.changeProducts = function(item){
		sessionStorage.setItem('productName',item)
		if(window.location.hash == '#/product')
			$scope.$broadcast('changeproduct',item)
		else
			window.location.hash = '#/product'
	}
  var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		pagination: '.swiper-pagination'
	})
}])

module.config(function($routeProvider) {
	$routeProvider.when('/index',
	{
		templateUrl:'javascripts/templateHtml/index.html',
		controller:'indexCtrl'
	}).when('/product', {
        templateUrl:'javascripts/templateHtml/product.html',
        controller:'productCtrl'
	}).when('/about', {
        templateUrl:'javascripts/templateHtml/about.html',
        controller:'aboutCtrl'
	}).when('/contact', {
        templateUrl:'javascripts/templateHtml/contact.html',
        controller:'contactCtrl'
	}).when('/inside', {
        templateUrl:'javascripts/templateHtml/inside.html',
        controller:'insideCtrl'
	}).when('/news', {
        templateUrl:'javascripts/templateHtml/news.html',
        controller:'newsCtrl'
	}).when('/productGroup', {
        templateUrl:'javascripts/templateHtml/productGroup.html',
        controller:'productGroupCtrl'
	})
});

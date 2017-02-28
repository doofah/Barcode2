// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var barcodeApp = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

barcodeApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner, $http){
	$scope.scanBarcode = function(){
		$scope.orderID = "";
		$cordovaBarcodeScanner.scan().then(function(imageData){
			$scope.orderID = imageData.text;
			var link = 'http://staging.crafterscompanion.co.uk/warehouse/complete.php';
			$http.post(link, {user : $scope.userName, ordernum : $scope.orderID}).then(function (res){
				$scope.response = res.data;
			});
		}, function (error){
			console.log("An error happened " + error);
		});
		
		alert($scope.orderID);
		
	}
})

function setFields($scope){
	
}



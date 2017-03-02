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
		}, function (error){
			console.log("An error happened " + error);
		});
	}
	

	
	$scope.sendBarcode = function(){
        var link = 'https://staging.crafterscompanion.co.uk/warehouse/test.php';

        $http.post(link, {username : $scope.userName}).then(function (res){
            $scope.response = res.data;
        });
		alert($scope.userName);
		alert($scope.response);
    };
	
	
})




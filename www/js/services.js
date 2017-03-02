angular.module('services', [])

.factory('despatch', function($http) {
	
	var dispatchResponse = "";
	
	return {
		sendOrderDispatch : function(){
			$http.get("https://staging.crafterscompanion.co.uk/warehouse/test.php").then(function(response){
				dispatchResponse = response;
				return dispatchResponse;
			});
		}
	}
})
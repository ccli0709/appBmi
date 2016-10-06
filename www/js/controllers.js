angular.module('starter.controllers', [])

.controller(
		'DashCtrl',
		function($scope) {
			$scope.params = {
				height : 0,
				weight : 0,
				bmi : 0
			};

			$scope.calculateBmi = function() {
				$scope.params.bmi = $scope.params.weight
						/ Math.pow($scope.params.height / 100, 2);
			};
			$scope.calculateBmi();

		})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	// $scope.$on('$ionicView.enter', function(e) {
	// });

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends : true
	};
});

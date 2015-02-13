angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {

        $scope.dash = {};




    })

.controller('SettingCtrl', function($scope, $rootScope, SettingService) {
        $scope.settings = {
            address: SettingService.get('address', '192.168.0.12'),
            port: SettingService.get('port', '8080'),
            user: SettingService.get('user', ''),
            password: SettingService.get('password', '')
        };

        $rootScope.deselectSettings = function(){
            SettingService.set('address', $scope.settings.address);
            SettingService.set('port', $scope.settings.port);
            SettingService.set('user', $scope.settings.user);
            SettingService.set('password', $scope.settings.password);
        };
});

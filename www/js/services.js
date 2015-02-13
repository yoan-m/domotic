angular.module('starter.services', [])

.factory('DashService', function(DomoticzRemote) {
    function init(){
        DomoticzRemote.getSwitches().then(function(result){

        });
    }

  return {
        init: init
  }
})


.factory('SettingService', function($window) {



  return {
      set: function(key, value) {
          $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
          return $window.localStorage[key] || defaultValue;
      }
  }
});

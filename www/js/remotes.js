'use strict';

angular.module('starter.remotes', [])
    .factory('DomoticzRemote', function($http, SettingService) {

        function urlFactory(){
            var url = 'http://';
            url += SettingService.get('address');
            url += ':';
            url += SettingService.get('port');
            url += '/json.htm?';
            return url;
        }

        return {
            getSwitches: function () {
                return $http.get(urlFactory() + 'type=devices&filter=all&used=true&order=Name');
            },
            actionSwitch: function (id, value) {
                return $http.get(urlFactory() + 'type=command&param=switchlight&idx=' + id + '&switchcmd=' + value + '&level=0');
            }
        }
    });
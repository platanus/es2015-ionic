System.register(['ionic', 'css/styles.scss!', 'angular'], function(exports_1) {
    "use strict";
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            angular.module('starter', ['ionic'])
                .run(function ($ionicPlatform, $window) {
                $ionicPlatform.ready(function () {
                    if ($window.cordova && $window.cordova.plugins.Keyboard) {
                        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                        // for form inputs)
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        // Don't remove this line unless you know what you are doing. It stops the viewport
                        // from snapping when text inputs are focused. Ionic handles this internally for
                        // a much nicer keyboard experience.
                        cordova.plugins.Keyboard.disableScroll(true);
                    }
                    if ($window.StatusBar) {
                        StatusBar.styleDefault();
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=app.js.map
(function() {
    'use strict';
    var Routes = function($stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'app/partials/trip.html',
                            controller: 'tripCtrl'
                        }
                    }
                })
    }
angular.module('tripApp')
            .config(Routes);
})();

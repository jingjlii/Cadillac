/**
 * Created by Lijingjing on 16/9/1.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.carConfig', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('carConfig', {
                url: '/carConfig',
                templateUrl: 'app/pages/carConfig/carConfig.html',
                controller: 'CarConfigCtrl',
                title: '车辆配置',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 50
                }
            });
    }

})();

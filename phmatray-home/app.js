'use strict';

var app = angular
    .module('myApp', ['ngCookies', 'pascalprecht.translate'])
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$translate'];

function AppCtrl($translate) {
    /*jshint validthis: true */
    var vm = this;

    vm.useFrench = useFrench;
    vm.useEnglish = useEnglish;
    vm.useLeet = useLeet;
    vm.currentLang = currentLang;

    function useFrench() {
        $translate.use('fr');
    }

    function useEnglish() {
        $translate.use('en');
    }

    function useLeet() {
        $translate.use('leet');
    }

    function currentLang() {
        return $translate.use();
    }
}

app.config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/lang/',
        suffix: '.json'
    });
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('fr');
    $translateProvider.fallbackLanguage('fr');
    $translateProvider.useLocalStorage();
});
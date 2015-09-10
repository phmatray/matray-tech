'use strict';

var app = angular
    .module('myApp', ['ngCookies', 'pascalprecht.translate', 'angular-loading-bar'])
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$translate'];

function AppCtrl($translate) {
    /*jshint validthis: true */
    var vm = this;

    vm.useFrench = useFrench;
    vm.useEnglish = useEnglish;
    vm.useLeet = useLeet;
    vm.currentLang = currentLang;
    vm.getClass = getClass;

    function useFrench() {
        $translate.use('fr');
    }

    function useEnglish() {
        $translate.use('en');
    }

    function useLeet() {
        $translate.use('leet');
    }

    function getClass(lang) {
        var curLang = this.currentLang();
        var result = curLang === lang ? 'active' : '';
        return result;
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

app.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
});
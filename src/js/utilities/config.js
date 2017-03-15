function config ($stateProvider, $urlRouterProvider){

    $stateProvider

        .state('root', {
            templateUrl: 'templates/layout.tpl.html',
            controller: 'LayoutController as vm',
            abstract: true
        })






    $urlRouterProvider.otherwise('/home')

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export {config};

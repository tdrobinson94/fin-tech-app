//================= create config function ===========================//

function config ($stateProvider, $urlRouterProvider){

    //================= define ui routes ===========================//
    $stateProvider

        .state('root', {
            url: '/',
            templateUrl: 'templates/layout.tpl.html',
            controller: 'LayoutController as vm',
            abstract: true
        })






    //================= designate a home page ===========================//

    $urlRouterProvider.otherwise('/root')

};

//================= inject your dependencies ===========================//

config.$inject = ['$stateProvider', '$urlRouterProvider'];

//================= export file ===========================//

export {config};

//================= create config function ===========================//

function config ($stateProvider, $urlRouterProvider){

    //================= define ui routes ===========================//
    $stateProvider

        .state('root', {
            templateUrl: 'templates/layout.tpl.html',
            controller: 'LayoutController as vm',
            abstract: true
        })






    //================= designate a home page ===========================//

    $urlRouterProvider.otherwise('/home')

};

//================= inject your dependencies ===========================//

config.$inject = ['$stateProvider', '$urlRouterProvider'];

//================= export file ===========================//

export {config};

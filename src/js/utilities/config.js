//================= create config function ===========================//

function config ($stateProvider, $urlRouterProvider){

    //================= define ui routes ===========================//
    $stateProvider

        .state('root', {
            templateUrl: 'templates/layout.tpl.html',
            controller: 'LayoutController as vm',
            abstract: true
        })

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.tpl.html',
            controller: 'HomeController as vm'
        })






    //================= designate a home page ===========================//

    $urlRouterProvider.otherwise('/home')

};

//================= inject your dependencies ===========================//

config.$inject = ['$stateProvider', '$urlRouterProvider'];

//================= export file ===========================//

export {config};

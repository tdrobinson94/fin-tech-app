//================= import angular and router ===========================//

import angular from 'angular' ;
import 'angular-ui-router';
import 'angular-material';


//================= import config and constant ===========================//
import {config} from './utilities/config';




//================= import services ===========================//







//================= import controllers ===========================//







angular

    .module('app', ['ui.router', 'ngMaterial'])
    .config(config)
    

;

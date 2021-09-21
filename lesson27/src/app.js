import 'F:/JS/HomeWork_JS/lesson27/src/common/css/normalize.css'
import 'F:/JS/HomeWork_JS/lesson27/src/common/css/skeleton.css'
import 'F:/JS/HomeWork_JS/lesson27/src/common/css/dark-theme.css'
import 'F:/JS/HomeWork_JS/lesson27/src/styles.css'

import $ from 'jquery';
import Controller from 'F:/JS/HomeWork_JS/lesson27/src/controller/Controller';

$(() => {
    new Controller($('.container'));
})
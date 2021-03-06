import 'angular-clock.css';

import angular from 'angular';
import 'angular-clock';

import { sjTimeInfo } from './info';
import { sjTimeForm } from './form';

import i18nConfig from './component.i18n';
import { TimeAction, time, GET_TIME, UPDATE_TIME } from './component.state';
import TimeService from './component.service';
import TimeWindowComponent from './window.component';

const sjTime = angular.module('sanji.time', [
  'ds.clock',
  sjTimeInfo,
  sjTimeForm
])
  .config(i18nConfig)
  .factory('timeAction', TimeAction)
  .service('timeService', TimeService)
  .component('sanjiTimeWindow', TimeWindowComponent)
  .name;
export { sjTime, time, GET_TIME, UPDATE_TIME };

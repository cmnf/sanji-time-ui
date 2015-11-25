import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import TimeService from './component.service';
import TimeContainerController from './component-container.controller';
import TimeController from './component.controller';
import TimeContainerDirective from './component-container.directive';
import TimeDirective from './component.directive';
import TimeWindowDirective from './component-window.directive';

let app = angular.module('sanji.time', [sjCore]);
app.config(i18nConfig);
app.service('timeService', TimeService);
app.controller('TimeContainerController', TimeContainerController);
app.controller('TimeController', TimeController);
app.directive('sanjiTimeContainer', TimeContainerDirective.directiveFactory);
app.directive('sanjiTime', TimeDirective.directiveFactory);
app.directive('sanjiTimeWindow', TimeWindowDirective.directiveFactory);
export default app = app.name

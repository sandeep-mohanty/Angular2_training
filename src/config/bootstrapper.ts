///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {Demo_App} from "./demoapp";
import {ParentRouterComponent} from "../demo_components/components_for_routing/parentRouterComponent";

bootstrap(Demo_App,[HTTP_PROVIDERS]);
//bootstrap(ParentRouterComponent,[ROUTER_PROVIDERS]);
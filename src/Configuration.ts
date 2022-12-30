import { CreateAxiosDefaults } from "axios";
import { MattermostHeader } from "./schemes/client";

// interface MattermostConfiguration{
//     server: string;
//     baseURL: string;
//     headers: MattermostHeader;
//     configs: CreateAxiosDefaults<any>;
//     token: string;
// }

// const MATTERMOST_CONFIGURATION: MattermostConfiguration = {
//     server: '',
//     baseURL: 'api/v4',
//     headers: {},
//     configs: {},
//     token: ''
// }

export default class MattermostConfiguration{

    static server: string = '';

    static baseURL: string = 'api/v4';

    static headers: MattermostHeader = {};

    static configs: CreateAxiosDefaults<any> = {};

    static token : string = '';

    // static set server(value: string){
    //     MATTERMOST_CONFIGURATION.server = value;
    // }

    // static get server(){
    //     return MATTERMOST_CONFIGURATION.server;
    // }

    // static set headers(value: MattermostHeader){
    //     MATTERMOST_CONFIGURATION.headers = value;
    // }

    // static get headers(){
    //     return MATTERMOST_CONFIGURATION.headers;
    // }

    // static set baseURL(value: string){
    //     MATTERMOST_CONFIGURATION.baseURL = value;
    // }

    // static get baseURL(){
    //     return MATTERMOST_CONFIGURATION.baseURL;
    // }

    // static set configs(value: CreateAxiosDefaults<any>){
    //     MATTERMOST_CONFIGURATION.configs = value;
    // }

    // static get configs(){
    //     return MATTERMOST_CONFIGURATION.configs;
    // }

    // static set token(value: string){
    //     MATTERMOST_CONFIGURATION.token = value;
    // }

    // static get token(){
    //     return MATTERMOST_CONFIGURATION.token;
    // }

}
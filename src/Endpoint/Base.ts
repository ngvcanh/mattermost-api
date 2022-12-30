import axios, { AxiosInstance } from "axios";
import { EndpointQuery, MattermostHeader, MattermostResponse } from "../schemes/client";
import Configuration from '../Configuration';

export default class BaseEndpoint{

    instance!: AxiosInstance;

    constructor(instance?: AxiosInstance){
        if (instance){
            this.instance = instance;
        }
        else{
            this.createInstance();
        }
    }

    createInstance(){
        const urlParams: string[] = [];
        Configuration.server && urlParams.push(Configuration.server);
        Configuration.baseURL && urlParams.push(Configuration.baseURL);

        const baseURL = urlParams.join('/');

        this.instance = axios.create({
            baseURL,
            headers: {
                Accept: '*/*',
                Connection: 'keep-alive',
                'Content-Type': 'application/json',
                ...(!!Configuration.token && {
                    Authorization: `bearer ${ Configuration.token }`
                }),
                ...Configuration.headers
            },
            // responseType: 'arraybuffer',
            withCredentials: true,
            ...Configuration.configs
        });

        return this;
    }

    static create(instance?: AxiosInstance){
        return new this(instance);
    }

    protected request<DataType, BodyType = any>(
        url: string, 
        method: string, 
        body?: BodyType, 
        headers?: MattermostHeader,
        params?: EndpointQuery
    ): MattermostResponse<DataType>{
        
        const rsType = this.instance.defaults.responseType;

        return this.instance.request({
            url,
            method,
            data: method === 'GET' ? undefined : body,
            headers,
            params
        })
        .then(rs => {
            const success = rs.status >= 200 && rs.status < 400;
            let rsData = rs.data;

            if (rsType === 'arraybuffer'){
                rsData = JSON.parse(rsData.toString());
            }

            return {
                success,
                code: rs.status,
                headers: rs.headers,
                data: success ? rsData : null,
                text: rs.statusText,
                error: success ? null : rsData
            };
        })
        .catch(e => {console.log(e)
            let rsData = e.response.data;

            if (rsType === 'arraybuffer' && rsData){
                rsData = JSON.parse(rsData.toString());
            }

            return {
                success: false,
                code: e.response?.status ?? 503,
                data: null,
                headers: e.response?.headers ?? {},
                text: e.response?.statusText ?? 'Cannot send request',
                error: rsData ?? {
                    status_code: e.response?.status ?? 503,
                    message: e.response?.data.message ?? 'Cannot send request',
                    id: '',
                    request_id: '',
                }
            };
        });
    }

}

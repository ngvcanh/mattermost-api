import { AxiosInstance } from "axios";
import { ENDPOINT_URL } from "../constant";
import UserEndpoint from "./User";

export default class Endpoint{

    static URL = ENDPOINT_URL;

    static User = UserEndpoint;

    user: UserEndpoint;

    constructor(instance?: AxiosInstance){
        this.user = new UserEndpoint(instance);
    }

}
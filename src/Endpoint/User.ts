import BaseEndpoint from "./Base";
import formatPath from "../utils/formatPath";
import { MattermostHeader } from "../schemes/client";
import { ENDPOINT_URL } from "../constant";
import {
    UserAutocompleteQuery,
    UserAutocompleteResponse,
    UserCreateQuery,
    UserCreateRequest,
    UserGetByGroupChannelsIdsReqponse,
    UserGetByIdsQuery,
    UserGetQuery,
    UserLoginCWSRequest,
    UserLoginRequest,
    UserLogoutResponse,
    UserMeRequest,
    UserMeResponse,
    UserResponse,
    UserSearchRequest,
    UserStatsFilteredQuery,
    UserStatsResponse,
    UserUpdateRequest,
    UserUpdateResponse,
} from "../schemes/users";

export default class UserEndpoint extends BaseEndpoint{
    
    login(request: UserLoginRequest, headers?: MattermostHeader){
        return this.request<UserResponse>(
            ENDPOINT_URL.Users.LOGIN, 
            'POST', 
            request, 
            headers
        );
    }

    me(request: UserMeRequest, headers?: MattermostHeader){
        return this.request<UserMeResponse>(
            ENDPOINT_URL.Users.ME,
            'POST',
            request,
            headers
        );
    }

    loginCWS(request: UserLoginCWSRequest, headers?: MattermostHeader){
        return this.request(
            ENDPOINT_URL.Users.LOGIN_CWS,
            'POST',
            request,
            headers
        );
    }

    logout(headers?: MattermostHeader){
        return this.request<UserLogoutResponse>(
            ENDPOINT_URL.Users.LOGOUT,
            'POST',
            undefined,
            headers
        );
    }

    create(request: UserCreateRequest, query: UserCreateQuery = {}, headers?: MattermostHeader){
        return this.request<UserResponse>(
            ENDPOINT_URL.Users.CREATE,
            'POST',
            request,
            headers,
            query
        );
    }

    get(query: UserGetQuery = {}, headers?: MattermostHeader){
        return this.request<UserResponse[]>(
            ENDPOINT_URL.Users.GET,
            'GET',
            undefined,
            headers,
            query
        );
    }

    getById(user_id: string, headers?: MattermostHeader){
        return this.request<UserResponse>(
            formatPath(ENDPOINT_URL.Users.GET_BY_ID, { user_id }),
            'GET',
            undefined,
            headers
        )
    }

    getByIds(request: string[], query: UserGetByIdsQuery = {}, headers?: MattermostHeader){
        return this.request<UserResponse[]>(
            ENDPOINT_URL.Users.GET_BY_IDS,
            'POST',
            request,
            headers,
            query
        )
    }

    getByGroupChannelsIds(request: string[], headers?: MattermostHeader){
        return this.request<UserGetByGroupChannelsIdsReqponse>(
            ENDPOINT_URL.Users.GET_BY_GROUP_CHANNELS_IDS,
            'POST',
            request,
            headers
        )
    }

    getByUsernames(request: string[], headers?: MattermostHeader){
        return this.request<UserResponse[]>(
            ENDPOINT_URL.Users.GET_BY_USERNAMES,
            'POST',
            request,
            headers
        );
    }

    search(request: UserSearchRequest, headers?: MattermostHeader){
        return this.request<UserResponse[]>(
            ENDPOINT_URL.Users.SEARCH,
            'POST',
            request,
            headers
        );
    }

    autocomplete(query: UserAutocompleteQuery, headers?: MattermostHeader){
        return this.request<UserAutocompleteResponse>(
            ENDPOINT_URL.Users.AUTOCOMPLETE,
            'GET',
            undefined,
            headers,
            query
        )
    }

    known(headers?: MattermostHeader){
        return this.request<unknown[]>(
            ENDPOINT_URL.Users.KNOWN,
            'GET',
            undefined,
            headers
        );
    }

    stats(headers?: MattermostHeader){
        return this.request<UserStatsResponse>(
            ENDPOINT_URL.Users.STATS,
            'GET',
            undefined,
            headers
        );
    }

    statsFiltered(query: UserStatsFilteredQuery = {}, headers?: MattermostHeader){
        return this.request<UserStatsResponse>(
            ENDPOINT_URL.Users.STATS_FILTERED,
            'GET',
            undefined,
            headers,
            query
        );
    }

    delete(headers?: MattermostHeader){
        return this.request(
            ENDPOINT_URL.Users.DELETE,
            'DELETE',
            undefined,
            headers
        );
    }

    deactive(user_id: string, headers?: MattermostHeader){
        return 
    }

    update(user_id: string, request: UserUpdateRequest, headers?: MattermostHeader){
        return this.request<UserUpdateResponse>(
            formatPath(ENDPOINT_URL.Users.UPDATE, { user_id }),
            'PUT',
            request,
            headers
        );
    }

}
export interface UserLoginRequest{
    id?: string;
    login_id?: string;
    token?: string;
    password?: string;
    device_id?: string;
    ldap_only?: boolean;
}

export interface UserNotifyProps{
    email: string;
    push: string;
    desktop: string;
    desktop_sound: string;
    mention_keys: string;
    channel: string;
    first_name: string;
}

export type UserProps = Record<PropertyKey, any>;

export interface UserTimezone{
    useAutomaticTimezone: boolean;
    manualTimezone: string;
    automaticTimezone: string;
}

export interface UserResponse{
    id: string;
    create_at: number;
    update_at: number;
    delete_at: number;
    username: string;
    first_name: string;
    last_name: string;
    nickname: string;
    email: string;
    email_verified: boolean;
    auth_service: string;
    roles: string;
    locale: string;
    notify_props: UserNotifyProps;
    props: UserProps;
    last_password_update: number;
    last_picture_update: number;
    failed_attempts: number;
    mfa_active: boolean;
    timezone: UserTimezone;
    terms_of_service_id: string;
    terms_of_service_create_at: number;
}

export interface UserMeRequest{
    from: string;
    match_field: string;
    force: boolean;
}

export interface UserMeResponse{
    status_code: number;
    id: string;
    message: string;
    request_id: string;
    is_oauth?: boolean;
}

export interface UserLoginCWSRequest{
    login_id?: string;
    cws_token?: string;
}

export interface UserLogoutResponse{
    status: string;
}

export interface UserCreateQuery{
    t?: string;
    iid?: string;
}

export interface UserCreateRequest{
    email: string;
    username: string;
    first_name?: string;
    last_name?: string;
    nickname?: string;
    auth_data?: string;
    auth_service?: string;
    password?: string;
    locale?: string;
    props?: UserProps;
    notify_props?: UserNotifyProps;
}

export interface UserGetQuery{
    page?: number;
    per_page?: number;
    in_team?: string;
    not_in_team?: string;
    in_channel?: string;
    not_in_channel?: string;
    in_group?: string;
    group_constrained?: string;
    without_team?: string;
    active?: boolean;
    inactive?: boolean;
    role?: string;
    sort?: string;
    roles?: string;
    channel_roles?: string;
    team_roles?: string;
}

export interface UserGetByIdsQuery{
    since?: number;
}

export interface UserGetByGroupChannelsIdsReqponse{
    [id: string]: UserResponse;
}

export interface UserSearchRequest{
    term: string;
    team_id?: string;
    not_in_team_id?: string;
    in_channel_id?: string;
    not_in_channel_id?: string;
    in_group_id?: string;
    group_constrained?: boolean;
    allow_inactive?: boolean;
    without_team?: boolean;
    limit?: number;
}

export interface UserAutocompleteQuery{
    name: string;
    team_id: string;
    channel_id: string;
    limit: number;
}

export interface UserAutocompleteResponse{
    users: UserResponse[];
    out_of_channel: UserResponse[];
}

export interface UserStatsResponse{
    total_users_count: number;
}

export interface UserStatsFilteredQuery{
    in_team?: string;
    in_channel?: string;
    include_deleted?: boolean;
    include_bots?: boolean;
    roles?: string;
    channel_roles?: string;
    team_roles?: string;
}

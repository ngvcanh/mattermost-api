export interface MattermostError{
    status_code: number;
    id: string;
    message: string;
    request_id: string;
}

export interface StatusResponse{
    status: string;
}
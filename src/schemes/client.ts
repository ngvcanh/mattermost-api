import { MattermostError } from "./response";

export type MattermostHeader = Record<string, any>;

export type MattermostResponse<T> = Promise<{
    success: boolean;
    data: T | null;
    code: number;
    headers: MattermostHeader;
    text: string;
    error: MattermostError | null;
}>;

export type EndpointQuery = Record<string, any>;

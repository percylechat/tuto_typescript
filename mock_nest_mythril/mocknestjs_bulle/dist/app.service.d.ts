import { HttpAdapterHost } from '@nestjs/core';
declare class last_matches {
    first: string;
    second: string;
    third: string;
    constructor(username: string);
}
declare class profile_info {
    is_valid: boolean;
    username: string;
    avatar: string;
    status: string;
    ladder: number;
    is_friend: boolean;
    is_blocked: boolean;
    matches: last_matches;
}
export declare class Service_site {
    private adapterHost;
    constructor(adapterHost: HttpAdapterHost);
    check_login(user: string): string;
    check_join(user: string): string;
    go_ladder(): Map<string, number>;
    get_profile_info(user: string): profile_info;
    add_as_friend(user: string, UUID: string): boolean;
    remove_as_friend(user: string, UUID: string): boolean;
    add_as_blocked(user: string, UUID: string): boolean;
    remove_as_blocked(user: string, UUID: string): boolean;
    send_dm(user: string, UUID: string): string;
}
export {};

import { Service_site } from './app.service';
import { Request } from 'express';
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
export declare class Controller_login {
    private readonly appService;
    constructor(appService: Service_site);
    check_login(params: any): string;
}
export declare class Controller_join {
    private readonly appService;
    constructor(appService: Service_site);
    check_join(params: any): string;
}
export declare class Controller_ladder {
    private readonly appService;
    constructor(appService: Service_site);
    go_ladder(): Map<string, number>;
}
export declare class Controller_profile {
    private readonly appService;
    constructor(appService: Service_site);
    get_profile_info(params: any): profile_info;
    post_profile_info(params: any): profile_info;
}
export declare class Controller_send_dm {
    private readonly appService;
    constructor(appService: Service_site);
    send_dm(params: any, request: Request): string;
}
export declare class Controller_add_friend {
    private readonly appService;
    constructor(appService: Service_site);
    add_as_friend(params: any, request: Request): boolean;
}
export declare class Controller_add_blocked {
    private readonly appService;
    constructor(appService: Service_site);
    add_as_blocked(request: Request): boolean;
}
export declare class Controller_remove_friend {
    private readonly appService;
    constructor(appService: Service_site);
    remove_as_friend(request: Request): boolean;
}
export declare class Controller_remove_blocked {
    private readonly appService;
    constructor(appService: Service_site);
    remove_as_blocked(request: Request): boolean;
}
export {};

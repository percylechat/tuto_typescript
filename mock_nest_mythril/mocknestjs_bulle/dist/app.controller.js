"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller_remove_blocked = exports.Controller_remove_friend = exports.Controller_add_blocked = exports.Controller_add_friend = exports.Controller_send_dm = exports.Controller_profile = exports.Controller_ladder = exports.Controller_join = exports.Controller_login = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
class last_matches {
    constructor(username) {
        this.first = username + "won against Percy: 5 vs 4";
        this.second = username + "lost againt Claire: 2 vs 7";
        this.third = "";
    }
}
class profile_info {
}
let Controller_login = class Controller_login {
    constructor(appService) {
        this.appService = appService;
    }
    check_login(params) {
        let user = params.user;
        return this.appService.check_login(user);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], Controller_login.prototype, "check_login", null);
Controller_login = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_login);
exports.Controller_login = Controller_login;
let Controller_join = class Controller_join {
    constructor(appService) {
        this.appService = appService;
    }
    check_join(params) {
        let user = params.user;
        return this.appService.check_join(user);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], Controller_join.prototype, "check_join", null);
Controller_join = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_join);
exports.Controller_join = Controller_join;
let Controller_ladder = class Controller_ladder {
    constructor(appService) {
        this.appService = appService;
    }
    go_ladder() {
        return this.appService.go_ladder();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Map)
], Controller_ladder.prototype, "go_ladder", null);
Controller_ladder = __decorate([
    (0, common_1.Controller)('ladder'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_ladder);
exports.Controller_ladder = Controller_ladder;
let Controller_profile = class Controller_profile {
    constructor(appService) {
        this.appService = appService;
    }
    get_profile_info(params) {
        let user = params.user;
        console.log(params);
        return this.appService.get_profile_info(user);
    }
    post_profile_info(params) {
        console.log("post params");
        let user = params.user;
        console.log(params);
        return this.appService.get_profile_info(user);
    }
};
__decorate([
    (0, common_1.Get)(':user'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", profile_info)
], Controller_profile.prototype, "get_profile_info", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", profile_info)
], Controller_profile.prototype, "post_profile_info", null);
Controller_profile = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_profile);
exports.Controller_profile = Controller_profile;
let Controller_send_dm = class Controller_send_dm {
    constructor(appService) {
        this.appService = appService;
    }
    send_dm(params, request) {
        let user = params.user;
        let UUID = "ISME";
        console.log("you added " + user + "as friend");
        return this.appService.send_dm(user, UUID);
    }
};
__decorate([
    (0, common_1.Get)(':user'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], Controller_send_dm.prototype, "send_dm", null);
Controller_send_dm = __decorate([
    (0, common_1.Controller)('send_dm'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_send_dm);
exports.Controller_send_dm = Controller_send_dm;
let Controller_add_friend = class Controller_add_friend {
    constructor(appService) {
        this.appService = appService;
    }
    add_as_friend(params, request) {
        let user = params.user;
        let UUID = "ISME";
        console.log("you added " + user + "as friend");
        return this.appService.add_as_friend(user, UUID);
    }
};
__decorate([
    (0, common_1.Get)(':user'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Boolean)
], Controller_add_friend.prototype, "add_as_friend", null);
Controller_add_friend = __decorate([
    (0, common_1.Controller)('add_friend'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_add_friend);
exports.Controller_add_friend = Controller_add_friend;
let Controller_add_blocked = class Controller_add_blocked {
    constructor(appService) {
        this.appService = appService;
    }
    add_as_blocked(request) {
        let user = "${req.originalUrl}";
        let UUID = "ISME";
        return this.appService.add_as_blocked(user, UUID);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], Controller_add_blocked.prototype, "add_as_blocked", null);
Controller_add_blocked = __decorate([
    (0, common_1.Controller)('add_blocked'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_add_blocked);
exports.Controller_add_blocked = Controller_add_blocked;
let Controller_remove_friend = class Controller_remove_friend {
    constructor(appService) {
        this.appService = appService;
    }
    remove_as_friend(request) {
        let user = "${req.originalUrl}";
        let UUID = "ISME";
        return this.appService.remove_as_friend(user, UUID);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], Controller_remove_friend.prototype, "remove_as_friend", null);
Controller_remove_friend = __decorate([
    (0, common_1.Controller)('remove_friend'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_remove_friend);
exports.Controller_remove_friend = Controller_remove_friend;
let Controller_remove_blocked = class Controller_remove_blocked {
    constructor(appService) {
        this.appService = appService;
    }
    remove_as_blocked(request) {
        let user = "${req.originalUrl}";
        let UUID = "ISME";
        return this.appService.remove_as_blocked(user, UUID);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], Controller_remove_blocked.prototype, "remove_as_blocked", null);
Controller_remove_blocked = __decorate([
    (0, common_1.Controller)('remove_blocked'),
    __metadata("design:paramtypes", [app_service_1.Service_site])
], Controller_remove_blocked);
exports.Controller_remove_blocked = Controller_remove_blocked;
//# sourceMappingURL=app.controller.js.map
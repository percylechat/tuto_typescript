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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service_site = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
class last_matches {
    constructor(username) {
        this.first = username + " won against Percy: 5 vs 4";
        this.second = username + " lost againt Claire: 2 vs 7";
        this.third = "";
    }
}
class profile_info {
}
let Service_site = class Service_site {
    constructor(adapterHost) {
        this.adapterHost = adapterHost;
    }
    check_login(user) {
        return "ISME";
    }
    check_join(user) {
        return "ISME";
    }
    go_ladder() {
        let one = new Map();
        one.set("hello", 1);
        one.set("bebe", 2);
        return one;
    }
    get_profile_info(user) {
        let one = new profile_info;
        one.username = user;
        one.is_valid = true;
        one.avatar = "bebechat.jpg";
        one.ladder = 42;
        one.status = "online";
        one.is_friend = true;
        one.is_blocked = false;
        one.matches = new last_matches(one.username);
        return one;
    }
    add_as_friend(user, UUID) {
        return true;
    }
    remove_as_friend(user, UUID) {
        return true;
    }
    add_as_blocked(user, UUID) {
        return true;
    }
    remove_as_blocked(user, UUID) {
        return true;
    }
    send_dm(user, UUID) {
        return "ping";
    }
};
Service_site = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], Service_site);
exports.Service_site = Service_site;
//# sourceMappingURL=app.service.js.map
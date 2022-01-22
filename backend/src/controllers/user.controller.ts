import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";

@Controller('api/user')
export class UserController extends BaseController<User>{
    constructor(private readonly itemService: UserService){
        super();
    }

    getService(): BaseService<User> {
        return this.itemService;
    }
}
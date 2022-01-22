import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class UserService extends BaseService<User> {

    constructor(@InjectRepository(User) private personaRepo : Repository<User>) {
        super();
    }

    getRepository(): Repository<User> {
        return this.personaRepo;
    }

}
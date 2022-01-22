import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Item } from "../entities/item.entity";

@Injectable()
export class ItemService extends BaseService<Item> {

    constructor(@InjectRepository(Item) private personaRepo : Repository<Item>) {
        super();
    }

    getRepository(): Repository<Item> {
        return this.personaRepo;
    }

}
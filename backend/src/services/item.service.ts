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

    async modify(id: any){
        let variable = await this.getRepository().findOne(id);
        variable.checked=!variable.checked;
        this.getRepository().save(variable);
    }

    async modifyname(entity: Item){
        let variable = await this.getRepository().findOne(entity.id);
        variable.name = entity.name;
        this.getRepository().save(variable);
    }

    getRepository(): Repository<Item> {
        return this.personaRepo;
    }

}
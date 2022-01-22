import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Item } from "src/entities/item.entity";
import { ItemService } from "src/services/item.service";

@Controller('api/item')
export class ItemController extends BaseController<Item>{
    constructor(private readonly itemService: ItemService){
        super();
    }

    getService(): BaseService<Item> {
        return this.itemService;
    }
}
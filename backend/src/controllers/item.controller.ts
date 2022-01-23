import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Item } from "src/entities/item.entity";
import { ItemService } from "src/services/item.service";

@Controller('api/item')
export class ItemController extends BaseController<Item>{
    constructor(private readonly itemService: ItemService){
        super();
    }

    @Post('modify/:id')
    @HttpCode(HttpStatus.CREATED)
    async modify(@Param('id') id){
        let variable = await this.getService().findOne(id);
        variable.checked=!variable.checked;
        this.getService().save(variable);
    }

    @Post('modifyname')
    @HttpCode(HttpStatus.OK)
    async modifyname(@Body() entity: Item) : Promise<Item> {
        let variable = await this.getService().findOne(entity.id);
        variable.name = entity.name;
        return await this.getService().save(variable);
    }

    getService(): BaseService<Item> {
        return this.itemService;
    }
}
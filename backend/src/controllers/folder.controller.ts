import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Folder } from "src/entities/folder.entity";
import { FolderService } from "src/services/folder.service";

@Controller('api/folder')
export class FolderController extends BaseController<Folder>{
    constructor(private readonly itemService: FolderService){
        super();
    }

    getService(): BaseService<Folder> {
        return this.itemService;
    }
}
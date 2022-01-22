import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Folder } from "../entities/folder.entity";

@Injectable()
export class FolderService extends BaseService<Folder> {

    constructor(@InjectRepository(Folder) private personaRepo : Repository<Folder>) {
        super();
    }

    getRepository(): Repository<Folder> {
        return this.personaRepo;
    }

}
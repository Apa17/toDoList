import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FolderController } from "src/controllers/folder.controller";
import { ItemController } from "src/controllers/item.controller";
import { UserController } from "src/controllers/user.controller";
import { Folder } from "src/entities/folder.entity";
import { Item } from "src/entities/item.entity";
import { User } from "src/entities/user.entity";
import { FolderService } from "src/services/folder.service";
import { ItemService } from "src/services/item.service";
import { UserService } from "src/services/user.service";
import { PersonaController } from "./controllers/persona.controller";
import { Persona } from "./entities/persona.entity";
import { PersonaService } from "./services/persona.service";

@Module({
    imports: [TypeOrmModule.forFeature([Persona,Item, Folder, User])],
    providers: [PersonaService, ItemService, FolderService, UserService],
    controllers: [PersonaController, ItemController, FolderController, UserController]
})
export class ExtraModule{

}
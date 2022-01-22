import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Persona } from "src/entities/persona.entity";
import { PersonaService } from "src/services/persona.service";

@Controller('api/persona')
export class PersonaController extends BaseController<Persona> {

    constructor(private readonly personaService: PersonaService) {
        super();
    }

    getService(): BaseService<Persona> {
        return this.personaService;
    }

}
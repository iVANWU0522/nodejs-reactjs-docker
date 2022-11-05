import { Controller, Get } from '@nestjs/common';

import { SituationService } from '../domain/services/situation.service';

@Controller()
export class SituationController {
    constructor(private readonly situationService: SituationService) {}

    @Get()
    getHello(): string {
        return this.situationService.getHello();
    }
}

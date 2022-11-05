import { Module } from '@nestjs/common';

import { SituationService } from './domain/services/situation.service';
import { SituationController } from './interface/situation.controller';

@Module({
    imports: [],
    controllers: [SituationController],
    providers: [SituationService],
})
export class SituationModule { }

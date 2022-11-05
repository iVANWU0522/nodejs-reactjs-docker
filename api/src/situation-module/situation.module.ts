import { Module } from '@nestjs/common';

import { SituationService } from './situation.service';
import { SituationController } from './situation.controller';

@Module({
    imports: [],
    controllers: [SituationController],
    providers: [SituationService],
})
export class SituationModule { }

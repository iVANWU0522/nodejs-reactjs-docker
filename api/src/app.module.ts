import { Module } from '@nestjs/common';

import { SituationModule } from './situation-module/situation.module';

@Module({
    imports: [SituationModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

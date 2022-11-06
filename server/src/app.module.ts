import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { SituationModule } from './situation-module/situation.module';

@Module({
    imports: [SituationModule],
    controllers: [],
    providers: [AppService],
})
export class AppModule {}

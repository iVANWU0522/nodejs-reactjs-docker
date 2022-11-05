import { DataSource } from "typeorm";

import { Situation } from './situation-module/entity/situation.entity';
import { SituationStatistic } from './situation-module/entity/situation-statistic.entity';
import { SituationListView } from './situation-module/entity/situation-list.view';

export const AppDataSource = new DataSource({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '3306', 10) || 3306,
    database: process.env.DATABASE_NAME || 'situation',
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    synchronize: 'true' === process.env.DATABASE_SYNC || false,
    logging: 'true' === process.env.DATABASE_LOGGING || true,
    type: 'mysql',
    entities: [Situation, SituationStatistic, SituationListView],
});

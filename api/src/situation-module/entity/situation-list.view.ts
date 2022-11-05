import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity()
export class SituationListView {
    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    headcount_year_1: number;

    @ViewColumn()
    headcount_year_2: number;

    @ViewColumn()
    headcount_year_3: number;

    @ViewColumn()
    headcount_year_4: number;
}

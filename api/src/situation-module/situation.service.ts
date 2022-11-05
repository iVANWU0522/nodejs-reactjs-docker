import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyOptions } from 'typeorm';
import * as _ from 'lodash';

import { AppDataSource } from '../app.data.source';
import { Situation } from './entity/situation.entity';
import { TransformedSituation } from './interface/transformed-situation.interface';

interface FindOptions extends FindManyOptions<Situation> {
    sort?: Partial<Record<string, 'ASC' | 'DESC'>>;
}

@Injectable()
export class SituationService {
    private situationRepository = AppDataSource.getRepository(Situation);

    async findAll(): Promise<Array<any>> {
        return await this.situationRepository.find();
    }
   
    async paginate(options: IPaginationOptions, findOptions: FindOptions): Promise<Pagination<TransformedSituation>> {
        const { sort = {}, ...queries } = findOptions;

        const result = await paginate(this.situationRepository, options, {
            ...queries,
            order: sort,
        });

        let { items } = result;
        const transformedItems = items.map((item) => {
            return {
                id: item.id,
                name: item.name,
                headcount_year_1: _.sumBy(item.situationStatistics, 'headcount_year_1'),
                headcount_year_2: _.sumBy(item.situationStatistics, 'headcount_year_2'),
                headcount_year_3: _.sumBy(item.situationStatistics, 'headcount_year_3'),
                headcount_year_4: _.sumBy(item.situationStatistics, 'headcount_year_4'),
            };
        });

        return {
            ...result,
            items: transformedItems,
        }
    }
}

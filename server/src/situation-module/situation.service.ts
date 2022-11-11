import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyOptions } from 'typeorm';

import { AppDataSource } from '../app.data.source';
import { SituationListViewItem } from './dto/situation.pagination.response.dto';
import { SituationListView } from './entity/situation-list.view';

interface FindOptions extends FindManyOptions<SituationListView> {
    sort?: Partial<Record<string, 'ASC' | 'DESC'>>;
}

@Injectable()
export class SituationService {
    private situationRepository = AppDataSource.getRepository(SituationListView);

    async findAll(): Promise<Array<any>> {
        return this.situationRepository.find();
    }
   
    async paginate(options: IPaginationOptions, findOptions: FindOptions): Promise<Pagination<SituationListViewItem>> {
        const { sort = {}, ...queries } = findOptions;

        const result = await paginate(this.situationRepository, options, {
            ...queries,
            order: sort,
        });

        return result;
    }
}

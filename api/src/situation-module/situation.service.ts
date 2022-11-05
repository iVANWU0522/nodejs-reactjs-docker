import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyOptions } from 'typeorm';

import { AppDataSource } from '../app.data.source';
import { Situation } from './entity/situation.entity';

interface FindOptions extends FindManyOptions<Situation> {
    sort?: Partial<Record<string, 'ASC' | 'DESC'>>;
}

@Injectable()
export class SituationService {
    private situationRepository = AppDataSource.getRepository(Situation);

    async findAll(): Promise<Array<any>> {
        return await this.situationRepository.find();
    }
   
    async paginate(options: IPaginationOptions, findOptions: FindOptions): Promise<Pagination<Situation>> {
        const { sort = {}, ...queries } = findOptions;

        return await paginate(this.situationRepository, options, {
            ...queries,
            order: sort,
        });
    }
}

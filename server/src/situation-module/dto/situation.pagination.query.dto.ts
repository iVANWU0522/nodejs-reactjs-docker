import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { PaginationQueryDto } from './pagination.query.dto';

export class SituationPaginationQueryDto extends PaginationQueryDto {
    @ApiProperty({ example: 'Client Change' })
    @Type(() => String)
    readonly name: string;

    @ApiProperty({ example: 'createdAt' })
    @Type(() => String)
    readonly sort: string;
}
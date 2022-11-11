import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetadata } from './pagination-metadata.dto';

export class SituationListViewItem {
    @ApiProperty({ type: 'integer' })
        id: number;

    @ApiProperty({
        description: 'The name of the situation',
    })
        name: string;

    @ApiProperty({
        description: 'The sum of headcount_year_1 of all situation statistics',
    })
        headcount_year_1: number;

    @ApiProperty({
        description: 'The sum of headcount_year_2 of all situation statistics',
    })
        headcount_year_2: number;

    @ApiProperty({
        description: 'The sum of headcount_year_3 of all situation statistics',
    })
        headcount_year_3: number;

    @ApiProperty({
        description: 'The sum of headcount_year_4 of all situation statistics',
    })
        headcount_year_4: number;
}

export class SituationPaginationResponseDto {
    @ApiProperty({ type: [SituationListViewItem] })
        items: SituationListViewItem[];

    @ApiProperty({ type: PaginationMetadata })
        meta: PaginationMetadata;
}
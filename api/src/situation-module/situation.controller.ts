import { Controller, Get, Query } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiInternalServerErrorResponse,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { SituationService } from './situation.service';
import { SituationPaginationQueryDto } from './dto/situation.pagination.query.dto';
import { SituationPaginationResponseDto } from './dto/situation.pagination.response.dto';
import { ResponseDescription } from './enum/response-description';

@ApiTags('Situation')
@Controller('situations')
export class SituationController {
    constructor(
        private readonly SituationService: SituationService,
    ) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: ResponseDescription.OK,
        type: SituationPaginationResponseDto,
    })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiInternalServerErrorResponse({
        description: ResponseDescription.INTERNAL_SERVER_ERROR,
    })
    async findSituations(
        @Query() queryDto: SituationPaginationQueryDto,
    ): Promise<SituationPaginationResponseDto > {
        const { page = 1, itemsPerPage:limit = 2, name, sort } = queryDto;

        const sortObject = sort?.split(',').reduce((prev, value) => {
            const ordering = value[0] === '-' ? 'DESC' : 'ASC';
            const key = value[0] === '-' ? value.substring(1) : value;
            return {
                ...prev,
                [key]: ordering,
            };
        }, {});
    
        const options = { 
            page, 
            limit,
            route: '/situations',
            routingLabels: {
                limitLabel: 'itemsPerPage',
            },
        };

        const findOptions = {
            where: name ? { name: name } : {},
            sort: sortObject,
        };

        return await this.SituationService.paginate(options, findOptions) as any;
    };
}

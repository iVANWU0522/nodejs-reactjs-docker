import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationQueryDto {
    @ApiProperty({ required: false, default: 1, minimum: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    page = 1;


    @ApiProperty({ required: false, default: 2, minimum: 1 })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(20)
    @Type(() => Number)
    itemsPerPage = 2;
}

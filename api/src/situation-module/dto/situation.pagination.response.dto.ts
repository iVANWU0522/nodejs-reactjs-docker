import { PaginationMetadata } from "./pagination-metadata.dto";
import { Situation } from "../entity/situation.entity";

export class SituationPaginationResponseDto {
    data: Situation[];
    metadata: PaginationMetadata;
}
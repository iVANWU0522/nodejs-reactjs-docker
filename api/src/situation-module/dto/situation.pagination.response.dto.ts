import { PaginationMetadata } from "./pagination-metadata.dto";
import { TransformedSituation } from "../interface/transformed-situation.interface";
export class SituationPaginationResponseDto {
    data: TransformedSituation[];
    metadata: PaginationMetadata;
}
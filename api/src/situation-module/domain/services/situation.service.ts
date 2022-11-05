import { Injectable } from '@nestjs/common';

@Injectable()
export class SituationService {
    getHello(): string {
        return 'Hello World!';
    }
}

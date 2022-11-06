import { mutate } from 'swr';

import { PaginatedResource } from '../models/paginatedResource.model';

class ApiClient<T> {
    constructor(
        private readonly matchMutate: (matcher: string, ...args: unknown[]) => Promise<unknown[]>,
    ) { }

    find = async (url: string): Promise<PaginatedResource<T>> => {
        const response = await fetch(`${url}`);

        const result = await response.json() as PaginatedResource<T>;

        if (response.status >= 400) {
            throw result;
        }

        return result;
    };
}

export default ApiClient;

import { mutate } from 'swr';

import { PaginatedResource } from '../models/paginatedResource.model';

class ApiClient<T> {
    constructor(
        private readonly matchMutate: (matcher: string, ...args: unknown[]) => Promise<unknown[]>,
    ) { }

    find = async (url: string): Promise<PaginatedResource<T>> => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}${url}`);

        const result = await response.json() as PaginatedResource<T>;

        if (response.status >= 400) {
            throw result;
        }

        return result;
    };
}

export default ApiClient;

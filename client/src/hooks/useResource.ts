import { useState } from 'react';
import useSWR, { SWRResponse } from 'swr';

import ApiClient from '../clients/api.client';
import { PaginatedResource } from '../models/paginatedResource.model';
import useMatchMutate from './useMatchMutate';

/**
 * A resource is a list of records
 */

const useResource = <T>(
    path?: string,
    query?: Record<string, string>,
): SWRResponse<PaginatedResource<T>, Error> & {
    setQueryState: (query: Record<string, string>) => void,
    query: Record<string, string> | undefined,
} => {
    const [queryState, setQueryState] = useState(query);
    const matchMutate = useMatchMutate();

    const queryString = queryState ? `?${new URLSearchParams(queryState).toString()}` : '';
    const key = path && `${path}${queryString}`;

    const result = useSWR<PaginatedResource<T>, Error>(
        key,
        new ApiClient<T>(matchMutate).find,
    );

    return {
        ...result,
        setQueryState: (q) => {
            if (JSON.stringify(q || {}) !== JSON.stringify(queryState)) {
                setQueryState(q);
            }
        },
        query: queryState,
    };
};

export default useResource;

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'rc-pagination/assets/index.css';

import Pagination from 'rc-pagination';
import React, { PropsWithChildren, useState } from 'react';

import { PaginatedResource } from '../../models/paginatedResource.model';

const GridView = <T, >({
    data,
    query,
    onQueryChange,
} : PropsWithChildren<{
    data: PaginatedResource<T>,
    query?: Record<string, string>;
    onQueryChange: (query: Record<string, string>) => void;
}>) => {
    const [searchValue, setSearchValue] = useState(query?.name || '');

    const sortIcon = (sortingColumn: string) => {
        if (query?.sort === sortingColumn) {
            return '⬆';
        }
        if (query?.sort === `-${sortingColumn}`) {
            return '⬇';
        }
        return '️↕️';
    };

    const handleSort = (sortingColumn: string) => {
        if (query?.sort === sortingColumn) {
            onQueryChange({ ...query, sort: `-${sortingColumn}` });
        }

        if (query?.sort === `-${sortingColumn}`) {
            onQueryChange({ ...query, sort: sortingColumn });
        }

        onQueryChange({ ...query, sort: `-${sortingColumn}` });
    };

    return (
        <>
            <div className="search">
                <input
                    placeholder="Filter by Situation"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                    type="button"
                    className="search-button"
                    onClick={() => {
                        onQueryChange({ ...query, name: searchValue });
                    }}
                >
                    Apply
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <span>Situation </span>
                            <button type="button" onClick={() => handleSort('name')}>{sortIcon('name')}</button>
                        </th>
                        <th>
                            <span>HeadcouNt Yr 1 </span>
                            <button type="button" onClick={() => handleSort('headcount_year_1')}>{sortIcon('headcount_year_1')}</button>
                        </th>
                        <th>
                            <span>HeadcouNt Yr 2 </span>
                            <button type="button" onClick={() => handleSort('headcount_year_2')}>{sortIcon('headcount_year_2')}</button>
                        </th>
                        <th>
                            <span>HeadcouNt Yr 3 </span>
                            <button type="button" onClick={() => handleSort('headcount_year_3')}>{sortIcon('headcount_year_3')}</button>
                        </th>
                        <th>
                            <span>HeadcouNt Yr 4 </span>
                            <button type="button" onClick={() => handleSort('headcount_year_4')}>{sortIcon('headcount_year_4')}</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item: any) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.headcount_year_1 >= 1 ? item.headcount_year_1 : 'N.A.'}</td>
                            <td>{item.headcount_year_2 >= 1 ? item.headcount_year_2 : 'N.A.'}</td>
                            <td>{item.headcount_year_3 >= 1 ? item.headcount_year_3 : 'N.A.'}</td>
                            <td>{item.headcount_year_4 >= 1 ? item.headcount_year_4 : 'N.A.'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                pageSize={data.meta.itemsPerPage}
                onChange={(pageNumber) => onQueryChange({ ...query, page: String(pageNumber) })}
                current={data.meta.currentPage}
                total={data.meta.totalItems}
            />
        </>
    );
};

export default GridView;

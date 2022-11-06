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
    onQueryChange?: (query: Record<string, string>) => void;
}>) => {
    const [searchValue, setSearchValue] = useState('');

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
                        if (onQueryChange) {
                            onQueryChange({ ...query, name: searchValue });
                        }
                    }}
                >
                    Apply
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Situation</th>
                        <th>HeadcouNt Yr 1</th>
                        <th>HeadcouNt Yr 2</th>
                        <th>HeadcouNt Yr 3</th>
                        <th>HeadcouNt Yr 4</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item: any) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.headcount_year_1}</td>
                            <td>{item.headcount_year_2}</td>
                            <td>{item.headcount_year_3}</td>
                            <td>{item.headcount_year_4}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                pageSize={data.meta.itemsPerPage}
                onChange={(pageNumber) => onQueryChange && onQueryChange({ ...query, page: String(pageNumber) })}
                current={data.meta.currentPage}
                total={data.meta.totalItems}
            />
        </>
    );
};

export default GridView;

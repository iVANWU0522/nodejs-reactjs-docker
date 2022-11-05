import React from 'react';

import useResource from '../hooks/useResource';
import { SituationListView } from '../models/situationListView.model';
import { StyledGrid } from './styledGrid';

const ListSituations: React.FC = () => {
    const {
        data,
        setQueryState,
        error,
    } = useResource<SituationListView>('/situations');

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <StyledGrid>
            <h1>Situation Summary</h1>
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
                    {data.items.map((item) => (
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
        </StyledGrid>
    );
};

export default ListSituations;

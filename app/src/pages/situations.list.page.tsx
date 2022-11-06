import 'rc-pagination/assets/index.css';

import Pagination from 'rc-pagination';
import React from 'react';

import GridView from '../components/gridView/gridView';
import useResource from '../hooks/useResource';
import { SituationListView } from '../models/situationListView.model';

const ListSituations: React.FC = () => {
    const {
        data,
        setQueryState,
        query,
        error,
    } = useResource<SituationListView>('/situations');

    if (!data) {
        return <div>Loading...</div>;
    }

    const updatePage = (p:number) => {
        console.log('updatePage', p);
    };

    return (
        <>
            <div className="heading">Situation Summary</div>
            <GridView
                data={data}
                onQueryChange={(_query) => setQueryState({ ...query, ..._query })}
            />
        </>
    );
};

export default ListSituations;

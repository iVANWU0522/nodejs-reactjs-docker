import './App.css';

import React from 'react';
import {
    BrowserRouter, Route, Routes,
} from 'react-router-dom';

import ListSituations from './pages/situations.list.page';

const App: React.FC = () => (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="" element={<ListSituations />} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;

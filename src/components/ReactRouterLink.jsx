import React from 'react';

import NavigationBar from './NavigationBar/NavigationBar.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';
import Test from '../pages/Test/Test.jsx';
import Variants from '../pages/Variants.js';
import { dataArray } from '../dataArray/dataArray.js';

import { Routes, Route } from 'react-router-dom';
const ReactRouterLink = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route index element={<MainPage dataArray={dataArray[0]} />} />
                    <Route path="сlassic" element={<MainPage dataArray={dataArray[1]} />} />
                    <Route path="relevance" element={<MainPage dataArray={dataArray[2]} />} />
                    <Route path="clusterrelevance" element={<MainPage dataArray={dataArray[3]} />} />
                    <Route path="neuro" element={<Variants />} />
                    <Route path="statistics" element={<Test />} />
                </Route>
            </Routes>
        </div>
    );
};

export default ReactRouterLink;

import './App.css';
import React, { useEffect, useState } from 'react';
import Filters from './layouts/filters';
import RoadMap from './layouts/roadmap';
import Search from "./layouts/search";

function App() {

    const [filters, setFilters] = useState([]);

    const [features, setFeatures] = useState([
        {
            id: 1,
            title: 'Revenue Tracking',
            tag: 'Bug Reports',
            status: 'Open',
            votes: 16
        },
        {
            id: 3,
            title: 'Revenue Tracking 3',
            tag: 'Bug Reports',
            status: 'In Progress',
            votes: 4
        },
        {
            id: 4,
            title: 'Revenue Tracking 4',
            tag: 'Integrations',
            status: 'Done',
            votes: 3
        },
    ]);

    console.log(features);

    useEffect(() => {
        const mFilters = {};
        features.forEach(feature => {
            if (!mFilters[feature.tag]) mFilters[feature.tag] = 1;
            else mFilters[feature.tag]++;
        });
        const newFilters = [];
        for (const filter in mFilters) {
            newFilters.push({ name: filter, amount: mFilters[filter] });
        }
        setFilters(newFilters);
    }, [features]);

    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchText, setSearchText] = useState("");


    const handleFilterSelect = (filterName) => {
        if (selectedFilter === filterName) setSelectedFilter(null);
        else setSelectedFilter(filterName);
    };

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const notifyParentVotesChanged = (id, amount) => {
        const featuresCopy = [...features];
        const mElem = featuresCopy.find((elem) => elem.id === id);
        mElem.amount = amount;
        setFeatures(featuresCopy);
    }

    const allStatus = [...(new Set(features.map((feature) => feature.status)))];

    const filteredFeatures = selectedFilter
        ? features.filter((feature) => feature.tag === selectedFilter && feature.title.toLowerCase().includes(searchText.toLowerCase()))
        : features.filter((feature) => feature.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className='containerApp'>
            <Filters filters={filters} onSelectFilter={handleFilterSelect} selectedFilter={selectedFilter} />
            <Search searchText={searchText} onSearchChange={handleSearchInputChange} />
            <RoadMap notifyParentVotesChanged={notifyParentVotesChanged} features={filteredFeatures} status={allStatus} />
        </div>
    );
}

export default App;

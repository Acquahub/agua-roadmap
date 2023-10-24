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
            id: 2,
            title: 'Revenue Tracking 2',
            tag: 'Bug Reports',
            status: 'Open',
            votes: 2
        },
        {
            id:3,
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
        {
            id: 5,
            title: 'Revenue Tracking 5',
            tag: 'Integrations',
            status: 'In Progress',
            votes: 10
        },
        {
            id: 6,
            title: 'Revenue Tracking 6',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 20
        },
        {
            id: 7,
            title: 'Revenue Tracking',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 16
        },
        {
            id: 8,
            title: 'Revenue Tracking 2',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 2
        },
        {
            id: 9,
            title: 'Revenue Tracking',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 16
        },
        {
            id: 10,
            title: 'Revenue Tracking 2',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 2
        },
        {
            id: 11,
            title: 'Revenue Tracking',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 16
        },
        {
            id:12,
            title: 'Revenue Tracking 2',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 2
        },
        {
            id: 13,
            title: 'Bug Tracking',
            tag: 'Bug Reports',
            status: 'Done',
            votes: 16
        },
        {
            id: 14,
            title: 'Bug Tracking 2',
            tag: 'Bug Reports',
            status: 'Done',
            votes: 2
        },
        {
            id: 15,
            title: 'Bug Tracking 3',
            tag: 'Bug Reports',
            status: 'Done',
            votes: 4
        },
        {
            id:16,
            title: 'Bug Tracking 4',
            tag: 'Integrations',
            status: 'Done',
            votes: 3
        },
        {
            id:17,
            title: 'Bug Tracking 5',
            tag: 'Integrations',
            status: 'In Progress',
            votes: 10
        },
        {
            id:18,
            title: 'Bug Tracking 6',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 20
        },
        {
            id:19,
            title: 'Bug Tracking',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 16
        },
        {
            id:20,
            title: 'Bug Tracking 2',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 2
        },
        {
            id:21,
            title: 'Bug Tracking',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 16
        },
        {
            id: 22,
            title: 'Bug Tracking 2',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 2
        },
        {
            id: 23,
            title: 'Bug Tracking',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 16
        },
        {
            id:24,
            title: 'Bug Tracking 2',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 2
        },
        {
            id: 25,
            title: 'Test Tracking',
            tag: 'Bug Reports',
            status: 'In Progress',
            votes: 16
        },
        {
            id: 26,
            title: 'Test Tracking 2',
            tag: 'Bug Reports',
            status: 'In Progress',
            votes: 2
        },
        {
            id:27,
            title: 'Test Tracking 3',
            tag: 'Bug Reports',
            status: 'Done',
            votes: 4
        },
        {
            id: 28,
            title: 'Test Tracking 4',
            tag: 'Integrations',
            status: 'Done',
            votes: 3
        },
        {
            id: 29,
            title: 'Test Tracking 5',
            tag: 'Integrations',
            status: 'In Progress',
            votes: 10
        },
        {
            id: 30,
            title: 'Test Tracking 6',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 20
        },
        {
            id: 7,
            title: 'Test Tracking',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 16
        },
        {
            id: 31,
            title: 'Test Tracking 2',
            tag: 'Test',
            status: 'In Progress',
            votes: 2
        },
        {
            id: 32,
            title: 'Test Tracking',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 16
        },
        {
            id: 33,
            title: 'Test Tracking 2',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 2
        },
        {
            id: 34,
            title: 'Test Tracking',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 16
        },
        {
            id:35,
            title: 'Test Tracking 2',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 2
        },
    ]);

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
        <div className=' container containerApp'>
            <Filters filters={filters} onSelectFilter={handleFilterSelect} selectedFilter={selectedFilter} />
            <Search searchText={searchText} onSearchChange={handleSearchInputChange} />
            <RoadMap notifyParentVotesChanged={notifyParentVotesChanged} features={filteredFeatures} status={allStatus} />
        </div>
    );
}

export default App;

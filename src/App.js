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
            description: 'Add ability to track revenue lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tag: 'Bug Reports',
            status: 'Open',
            votes: 16
        },
        {
            id: 2,
            title: 'Revenue Tracking 2',
            description: 'Add ability to track revenue1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tag: 'Bug Reports',
            status: 'In Progress',
            votes: 2
        },
        {
            id:3,
            title: 'Revenue Tracking 3',
            description: 'Add ability to track revenue2',
            tag: 'Bug Reports',
            status: 'Done',
            votes: 4
        },
        {
            id: 4,
            title: 'Revenue Tracking 4',
            description: 'Add ability to track revenue3',
            tag: 'Integrations',
            status: 'Open',
            votes: 8
        },
        {
            id: 5,
            title: 'Revenue Tracking 5',
            description: 'Add ability to track revenue4',
            tag: 'Integrations',
            status: 'In Progress',
            votes: 10
        },
        {
            id: 6,
            title: 'Revenue Tracking 6',
            description: 'Add ability to track revenue5',
            tag: 'Integrations',
            status: 'Done',
            votes: 12
        },
        {
            id: 7,
            title: 'Revenue Tracking 7',
            description: 'Add ability to track revenue6',
            tag: 'Feature Requests',
            status: 'Open',
            votes: 14
        },
        {
            id: 8,
            title: 'Revenue Tracking 8',
            description: 'Add ability to track revenue7',
            tag: 'Feature Requests',
            status: 'In Progress',
            votes: 16
        },
        {
            id: 9,
            title: 'Revenue Tracking 9',
            description: 'Add ability to track revenue8',
            tag: 'Feature Requests',
            status: 'Done',
            votes: 18
        }
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
        mElem.votes = amount;
        setFeatures(featuresCopy);
    }

    const onFeatureCreate = (newFeature) => {
        const updatedFeatures = [...features, newFeature];
        setFeatures(updatedFeatures);
    };

    console.log('features',features)

    const allStatus = [...(new Set(features.map((feature) => feature.status)))];

    const filteredFeatures = selectedFilter
        ? features.filter((feature) => feature.tag === selectedFilter && feature.title.toLowerCase().includes(searchText.toLowerCase()))
        : features.filter((feature) => feature.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className=' container containerApp'>
            <Filters filters={filters} onSelectFilter={handleFilterSelect} selectedFilter={selectedFilter} />
            <Search searchText={searchText} onSearchChange={handleSearchInputChange} />
            <RoadMap notifyParentVotesChanged={notifyParentVotesChanged} features={filteredFeatures} status={allStatus} onFeatureCreate={onFeatureCreate} />
        </div>
    );
}

export default App;

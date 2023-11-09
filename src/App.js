import './App.css';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig.js';
import Filters from './layouts/filters';
import RoadMap from './layouts/roadmap';
import Search from './layouts/search';

function App() {

    const [selectedFilter, setSelectedFilter] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filters, setFilters] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const featuresCollection = collection(db, 'features');
            const featuresSnapshot = await getDocs(featuresCollection);
            const featureData = featuresSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFeatures(featureData);
        };

        fetchData();
    }, [features]);



    useEffect(() => {

            const mFilters = {};
            features.forEach((feature) => {
                if (!mFilters[feature.tag]) mFilters[feature.tag] = 1;
                else mFilters[feature.tag]++;
            });
            const newFilters = [];
            for (const filter in mFilters) {
                newFilters.push({ name: filter, amount: mFilters[filter] });
            }
            setFilters(newFilters);

    }, [features, ]);

    const handleFilterSelect = (filterName) => {
        if (selectedFilter === filterName) setSelectedFilter(null);
        else setSelectedFilter(filterName);
    };

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const notifyParentVotesChanged = async (id, amount) => {
        try {
            const featureRef = doc(db, process.env.REACT_APP_DATABASE_NAME, id);
            await updateDoc(featureRef, { votes: amount });


            const featuresCopy = [...features];
            const mElem = featuresCopy.find((elem) => elem.id === id);
            mElem.votes = amount;
            setFeatures(featuresCopy);
        } catch (error) {
            console.error("Error updating votes in database", error);
        }
    };

    const onFeatureCreate = async (newFeature) => {
        try {

            const docRef = await addDoc(collection(db, process.env.REACT_APP_DATABASE_NAME), newFeature);


            setFeatures([...features, { id: docRef.id, ...newFeature }]);
        } catch (error) {
            console.error("Could not create a new feature in the database:", error);
        }
    };

    const allStatus = [...new Set(features.map((feature) => feature.status))];

    const filteredFeatures = selectedFilter
        ? features.filter(
            (feature) =>
                feature.tag === selectedFilter &&
                feature.title.toLowerCase().includes(searchText.toLowerCase())
        )
        : features.filter((feature) =>
            feature.title.toLowerCase().includes(searchText.toLowerCase())
        );


    return (
        <div className="container containerApp">
            <Filters
                filters={filters}
                onSelectFilter={handleFilterSelect}
                selectedFilter={selectedFilter}
            />
            <Search searchText={searchText} onSearchChange={handleSearchInputChange} />
            <RoadMap
                notifyParentVotesChanged={notifyParentVotesChanged}
                features={filteredFeatures}
                status={allStatus}
                onFeatureCreate={onFeatureCreate}
            />
        </div>
    );
}

export default App;
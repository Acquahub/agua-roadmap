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

            const sortedFeatures = featureData.sort((a, b) => {
                const statusOrder = { "Open": 1, "In Progress": 2, "Done": 3 };
                return statusOrder[a.status] - statusOrder[b.status];
            });


            setFeatures(sortedFeatures);
        };

        fetchData();
    }, []);


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

    }, [features,]);

    const handleFilterSelect = (filterName) => {
        if (selectedFilter === filterName) setSelectedFilter(null);
        else setSelectedFilter(filterName);
    };

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const notifyParentVotesChanged = async (id, amount) => {
        console.log('New amount: ' + amount)

        try {
            const featuresCopy = [...features];
            const mElem = featuresCopy.find((elem) => elem.id === id);
            mElem.votes = amount;
            setFeatures(featuresCopy);

            console.log(featuresCopy);

            const featureRef = doc(db, 'features', id);
            await updateDoc(featureRef, { votes: amount });
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

    const onCommentPosted = async (feature, commentsList) => {
        feature.comments = commentsList;

        try {
            const featureRef = doc(db, process.env.REACT_APP_DATABASE_NAME, feature.id);
            await updateDoc(featureRef, { comments: commentsList });
    
            const indexToUpdate = features.findIndex((f) => f.id === feature.id);
    
            if (indexToUpdate !== -1) {
                features[indexToUpdate] = feature;
            } else {
                features.push(feature);
            }
    
            setFeatures([...features]);
        } catch (error) {
            console.error("Could not update feature in the database:", error);
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
                onCommentPosted={onCommentPosted}
            />
        </div>
    );
}

export default App;
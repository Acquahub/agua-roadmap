import './App.css';
import React, {useState} from 'react';
import Filters from './layouts/filters';
import RoadMap from './layouts/roadmap';

const filters = [
  { name: 'Feature Requests', amount: 20 },
  { name: 'Bug Reports', amount: 2 },
  { name: 'Integrations', amount: 10 },
];

const features = [
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
    status: 'Done',
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
    status: 'Test',
    votes: 16
  },
  {
    id: 10,
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 2
  },
  {
    id: 11,
    title: 'Revenue Tracking',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 16
  },
  {
    id:12,
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 2
  },
];

function App() {

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterSelect = (filterName) => {
    setSelectedFilter(filterName);
  };

  const filteredFeatures = selectedFilter
    ? features.filter((feature) => feature.tag === selectedFilter)
    : features;

  return (
    <div className='containerApp'>
      <Filters filters={filters} onSelectFilter={handleFilterSelect} />
      <RoadMap features={filteredFeatures} />
    </div>
  );
}

export default App;

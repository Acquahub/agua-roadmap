import './App.css';
import Filters from './layouts/filters';
import RoadMap from './layouts/roadmap';

const filters = [
  { name: 'Feature Requests', amount: 20 },
  { name: 'Bug Reports', amount: 2 },
  { name: 'Integrations', amount: 10 },
];

const features = [
  {
    title: 'Revenue Tracking',
    tag: 'Feature Requests',
    status: 'Open',
    votes: 16
  },
  {
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Open',
    votes: 2
  },
  {
    title: 'Revenue Tracking 3',
    tag: 'Feature Requests',
    status: 'Done',
    votes: 4
  },
  {
    title: 'Revenue Tracking 4',
    tag: 'Feature Requests',
    status: 'Done',
    votes: 3
  },
  {
    title: 'Revenue Tracking 5',
    tag: 'Feature Requests',
    status: 'In Progress',
    votes: 10
  },
  {
    title: 'Revenue Tracking 6',
    tag: 'Feature Requests',
    status: 'Open',
    votes: 20
  },
  {
    title: 'Revenue Tracking',
    tag: 'Feature Requests',
    status: 'Open',
    votes: 16
  },
  {
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Open',
    votes: 2
  },
  {
    title: 'Revenue Tracking',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 16
  },
  {
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 2
  },
  {
    title: 'Revenue Tracking',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 16
  },
  {
    title: 'Revenue Tracking 2',
    tag: 'Feature Requests',
    status: 'Test',
    votes: 2
  },
];

function App() {
  return (
    <div className='containerApp'>
      <Filters filters={filters} />
      <RoadMap features={features} />
    </div>
  );
}

export default App;

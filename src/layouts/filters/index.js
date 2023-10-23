import styles from './filters.module.css';
import SectionTitle from '../../components/sectionTitle';
import Filter from '../filter';


export default function Filters({ filters, onSelectFilter, selectedFilter }) {
  return (
    <div className={styles['container']}>
      <div style={{ marginLeft: 'var(--filter-margin)' }}>
        <SectionTitle title="Filters" />
      </div>  
      <div className={styles['filtersContainer']}>
        {filters.map((filter) => (
          <div key={filter.name} onClick={() => onSelectFilter(filter.name)} className="filter">

            <Filter
            key={filter.name} 
            title={filter.name}
            amount={filter.amount}
            onSelectFilter={onSelectFilter}
            selected={selectedFilter}
            />          
          </div>
        ))}
      </div>
    </div>
  )
}

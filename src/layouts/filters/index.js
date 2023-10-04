import styles from './filters.module.css';
import SectionTitle from '../../components/sectionTitle';
import Filter from '../filter';

export default function Filters({ filters }) {
  return (
    <div className={styles['container']}>
      <div style={{ marginLeft: 'var(--filter-margin)' }}>
        <SectionTitle title="Filters" />
      </div>
      <div className={styles['filtersContainer']}>
        {filters.map((filter) => {
          return (
            <Filter title={filter.name} amount={filter.amount} />
          );
        })}
      </div>
    </div>
  )
}

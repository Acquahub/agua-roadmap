import styles from './search.module.css';
import SectionTitle from '../../components/sectionTitle';
import SearchComponent from "../../components/search";

export default function Search({  searchText, onSearchChange }) {
    return (
        <div className={styles['container']}>
            <div style={{ marginLeft: 'var(--filter-margin)' }}>
                <SectionTitle title="Search Filter" />
            </div>
            <div className={styles['SearchContainer']}>
                <SearchComponent  searchText={searchText} onSearchChange={onSearchChange} />
            </div>
        </div>
    );
}

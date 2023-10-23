import styles from './filter.module.css';
import React from 'react';
import Subtitle from '../../components/subtitle';
import FeaturesAmount from '../../components/featuresAmount';

export default function Filter({ title, amount, onSelectFilter, selected }) {
    const isSelected = selected === title;

    return (
        <div onClick={() => onSelectFilter(title)} className={`${styles['container']} ${isSelected ? styles.selected : ''}`}>
            <div style={{ marginLeft: '8px' }}>
                <Subtitle title={title} />
            </div>
            <FeaturesAmount amount={amount} />
        </div>
    );
}


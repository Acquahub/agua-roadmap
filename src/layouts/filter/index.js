import styles from './filter.module.css';
import React from 'react';

import Subtitle from '../../components/subtitle';
import FeaturesAmount from '../../components/featuresAmount';

export default function Filter({  title, amount, onSelectFilter }) {

  return (
    <div className={styles['container']}>
      <Subtitle title={title} />
      <FeaturesAmount amount={amount} />
      <div onClick={() => onSelectFilter(title)}> </div>
    </div>
  )
}

import styles from './filter.module.css';

import Subtitle from '../../components/subtitle';
import FeaturesAmount from '../../components/featuresAmount';

export default function Filter({ title, amount }) {

  return (
    <div className={styles['container']}>
      <Subtitle title={title} />
      <FeaturesAmount amount={amount} />
    </div>
  )
}

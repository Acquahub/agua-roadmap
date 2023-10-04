import styles from './status.module.css';

import Subtitle from '../subtitle';

export default function Status({ title }) {

  return (
    <div className={styles['container']}>
      <Subtitle title={title} />
    </div>
  )
}

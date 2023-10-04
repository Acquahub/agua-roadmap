import styles from './featuresAmount.module.css';

export default function FeaturesAmount({ amount }) {

  return (
    <div className={styles['container']}>
      {amount}
    </div>
  )
}

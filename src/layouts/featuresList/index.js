import styles from './featuresList.module.css';

import Status from '../../components/status';

import Feature from '../feature';

export default function FeaturesList({ title, features }) {

  return (
    <div className={styles['container']}>
      <Status title={title} />
      <div style={{ marginTop: 'var(--featurelist-margin)' }}>
        {features.map(feature => {
          return (
            <Feature key={feature.id} title={feature.title} votes={feature.votes} tag={feature.tag} />
          )
        })}
      </div>
    </div>
  )
}

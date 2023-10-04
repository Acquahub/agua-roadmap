import styles from './roadmap.module.css';
import SectionTitle from '../../components/sectionTitle';

import FeaturesList from '../featuresList';

export default function RoadMap({ features }) {

  const statusFromFeatures = [...(new Set(features.map((feature) => feature.status)))];

  return (
    <div className={styles['container']}>
      <div style={{ marginLeft: 'var(--filter-margin)' }}>
        <SectionTitle title="Roadmap" />
      </div>
      <div className={styles['containerRoadmap']}>
        {
          statusFromFeatures.map((status) => {
            const featuresWithStatus = features.filter((feature) => feature.status === status);
            return (
              <FeaturesList title={status} features={featuresWithStatus} />
            );
          })
        }
      </div>
    </div>
  )
}

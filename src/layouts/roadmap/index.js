import styles from './roadmap.module.css';
import SectionTitle from '../../components/sectionTitle';
import React from 'react';
import FeaturesList from '../featuresList';
import Subtitle from "../../components/subtitle";

export default function RoadMap({ features, status, notifyParentVotesChanged }) {



  const statusFromFeatures = [...(new Set(features.map((feature) => feature.status)))];

  console.log(statusFromFeatures)
  console.log(features)
  console.log('status', status)

  if (statusFromFeatures.length === 0) {
    return (
      <div className={styles['container']}>
        <div style={{ marginLeft: 'var(--filter-margin)' }}>
          <SectionTitle title="Roadmap" />
        </div>
        <div className={styles['containerRoadmap']}>
          <div className={styles['container']}>
            <div className={styles['titleContainer']}>
              <div style={{ marginLeft: 'var(--feature-margin-left-from-button)' }}>
                <Subtitle title="No features" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (statusFromFeatures.length <= 2) {
    return (
      <div className={styles['container']}>
        <div style={{ marginLeft: 'var(--filter-margin)' }}>
          <SectionTitle title="Roadmap" />
        </div>
        <div className={styles['containerRoadmap']}>
          {
            status.map((status) => {
              const featuresWithStatus = features.filter((feature) => feature.status === status);
              return (
                <FeaturesList notifyParentVotesChanged={notifyParentVotesChanged} key={status} title={status} features={featuresWithStatus} />
              );
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className={styles['container']}>
      <div style={{ marginLeft: 'var(--filter-margin)' }}>
        <SectionTitle title="Roadmap" />
      </div>
      <div className={styles['containerRoadmap']}>
        {
          status.map((status) => {
            const featuresWithStatus = features.filter((feature) => feature.status === status);
            return (
              <FeaturesList notifyParentVotesChanged={notifyParentVotesChanged} key={status} title={status} features={featuresWithStatus} />
            );
          })
        }
      </div>
      <div className={styles['agua']} >
        <i style={{ marginRight: '5px' }} className="fa-solid fa-droplet"></i>
        Agua

      </div>
    </div>
  )


}

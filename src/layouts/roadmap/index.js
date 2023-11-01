import styles from './roadmap.module.css';
import SectionTitle from '../../components/sectionTitle';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FeaturesList from '../featuresList';
import Subtitle from "../../components/subtitle";
import CreateFeatureModal from "../../components/createFeatureModal";

export default function RoadMap({ features, status, notifyParentVotesChanged, onFeatureCreate }) {

    const [showFeatureForm, setShowFeatureForm] = useState(false);

    const handleShowFeatureForm = () => {
        setShowFeatureForm(true);
    };

    const handleCloseFeatureForm = () => {
        setShowFeatureForm(false);
    };

  const statusFromFeatures = [...(new Set(features.map((feature) => feature.status)))];



  if (statusFromFeatures.length === 0) {
    return (
      <div className={styles['container']}>
        <div style={{ marginLeft: 'var(--filter-margin)' }}>
          <SectionTitle title="Roadmap" />
        </div>
          <div className={styles['buttonContainer']}>
              <Button variant="outline-secondary" size={'sm'} onClick={handleShowFeatureForm}>
                  Create Feature
              </Button>
          </div>
        <div className={styles['containerRoadmap']}>
          <div className={styles['container']}>
            <div className={styles['titleContainer']}>
              <div style={{ marginLeft: 'var(--feature-margin-left-from-button)' }}>
                <Subtitle title="No features" />
                <CreateFeatureModal show={showFeatureForm} handleClose={handleCloseFeatureForm}  onFeatureCreate={onFeatureCreate}/>
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
          <div className={styles['buttonContainer']}>
              <Button variant="outline-secondary" size={'sm'} onClick={handleShowFeatureForm}>
                  Create Feature
              </Button>
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
          <FeaturesList notifyParentVotesChanged={notifyParentVotesChanged} title="In Progress" features={[]} />
          <FeaturesList notifyParentVotesChanged={notifyParentVotesChanged} title="Done" features={[]} />
          <CreateFeatureModal show={showFeatureForm} handleClose={handleCloseFeatureForm}  onFeatureCreate={onFeatureCreate}/>
        </div>
      </div>
    )
  }
  return (
    <div className={styles['container']}>
      <div style={{ marginLeft: 'var(--filter-margin)' }}>
        <SectionTitle title="Roadmap" />
      </div>
        <div className={styles['buttonContainer']}>
            <Button variant="outline-secondary" size={'sm'} onClick={handleShowFeatureForm}>
                Create Feature
            </Button>
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
          <CreateFeatureModal show={showFeatureForm} handleClose={handleCloseFeatureForm}  onFeatureCreate={onFeatureCreate}/>
      </div>
      <div className={styles['agua']} >
        <i style={{ marginRight: '5px' }} className="fa-solid fa-droplet"></i>
        Agua
      </div>
    </div>
  )


}

import styles from './featuresList.module.css';

import Status from '../../components/status';

import Feature from '../feature';

export default function FeaturesList({title, features}) {

    return (

            <div className={styles['cont']}>
                <Status title={title}/>

                <div className={styles['container']}>

                    <div>
                        {features.map(feature => {
                            return (
                                <Feature key={feature.id} title={feature.title} votes={feature.votes}
                                         tag={feature.tag}/>
                            )
                        })}
                    </div>
                </div>

            </div>

    )
}

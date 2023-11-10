import styles from './featuresList.module.css';

import Status from '../../components/status';

import Feature from '../feature';

export default function FeaturesList({ title, features, notifyParentVotesChanged }) {

    const sortedFeatures = features.slice().sort((a, b) => b.votes - a.votes);


    const receiveVotes = (id, amount) => {
        notifyParentVotesChanged(id, amount);
    }

    return (

        <div className={styles['cont']}>
            <Status title={title} />

            <div className={styles['container']}>

                <div>
                    {sortedFeatures.map(feature => {
                        return (
                            <Feature key={feature.id}
                                     notifyParentVotesChanged={(amount) => receiveVotes(feature.id, amount)}
                                     title={feature.title}
                                     votes={feature.votes}
                                     tag={feature.tag}
                                     description={feature.description}
                                     status={feature.status}/>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

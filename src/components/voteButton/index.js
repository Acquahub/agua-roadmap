import { useState } from 'react';
import styles from './voteButton.module.css';

export default function VoteButton({ votes }) {

  const [currentVotes, setCurrentVotes] = useState(parseInt(votes));
  const [userVoted, setUserVoted] = useState(false);

  const increaseVotes = () => {
    if (!userVoted) setCurrentVotes(currentVotes + 1);
    else setCurrentVotes(currentVotes - 1);
    setUserVoted(!userVoted);
  }

  return (
    <div onClick={() => increaseVotes()} className={styles['container']}>
      +{currentVotes}
    </div>
  )
}

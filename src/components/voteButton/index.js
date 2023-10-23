import { useState } from 'react';
import styles from './voteButton.module.css';

export default function VoteButton({ votes, notifyParentVotesChanged }) {

  const [currentVotes, setCurrentVotes] = useState(parseInt(votes));
  const [userVoted, setUserVoted] = useState(false);

  const increaseVotes = () => {
    let newVotesAmount;
    if (!userVoted) newVotesAmount = currentVotes + 1;
    else newVotesAmount = currentVotes - 1;
    setCurrentVotes(newVotesAmount);
    setUserVoted(!userVoted);
    notifyParentVotesChanged(newVotesAmount);
  }

  return (
    <div onClick={() => increaseVotes()} className={styles['container']}>

      <div>
        <i className="fa-solid fa-angle-up"></i>
      </div>

      <div>
        {currentVotes}
      </div>

    </div>
  )
}

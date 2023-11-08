import { useState } from 'react';
import styles from './voteButton.module.css';

export default function VoteButton({ votes, userVotedInit, notifyParentVotesChanged, notifyUserVoted }) {

  const [currentVotes, setCurrentVotes] = useState(parseInt(votes));
  const [userVoted, setUserVoted] = useState(userVotedInit);

    const toggleVote = () => {
        const newVotesAmount = userVoted ? currentVotes - 1 : currentVotes + 1;
        setCurrentVotes(newVotesAmount);
        setUserVoted(!userVoted);
        notifyParentVotesChanged(newVotesAmount);
        notifyUserVoted();
    };

    const buttonClass = userVoted ? styles.selected : '';

    return (
        <div onClick={() => toggleVote()} className={`${styles.container} ${buttonClass}`}>

          <div >
            <i className="fa-solid fa-angle-up"></i>
          </div>

          <div >
            {currentVotes}
          </div>

    </div>
  )
}

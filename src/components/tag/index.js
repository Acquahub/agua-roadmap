import styles from './tag.module.css';

export default function Tag({ tag }) {

  return (
    <div className={styles['container']}>
      {tag}
    </div>
  )
}

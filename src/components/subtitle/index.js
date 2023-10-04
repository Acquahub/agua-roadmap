import styles from './subtitle.module.css';

export default function Subtitle({ title }) {

  return (
    <div className={styles['title']}>
      {title}
    </div>
  )
}

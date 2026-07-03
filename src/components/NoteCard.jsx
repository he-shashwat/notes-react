import styles from './NoteCard.module.css'

function NoteCard({ note, onSelect }) {
  return (
    <div className={styles.card} onClick={() => onSelect(note.id)}>
      <div className={styles.cardTop}>
        <span className={styles.title}>{note.title}</span>
        {note.pinned && <span className={styles.pin}>📌</span>}
      </div>
      <p className={styles.preview}>{note.content}</p>
      <div className={styles.meta}>
        <span className={styles.category}>{note.category}</span>
        <span className={styles.date}>{note.createdAt}</span>
      </div>
    </div>
  )
}

export default NoteCard
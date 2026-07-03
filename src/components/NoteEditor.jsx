import styles from './NoteEditor.module.css'

function NoteEditor({ note, onUpdate, onDelete }) {
  if (!note) return (
    <div className={styles.empty}>
      <p>Select a note to view it</p>
    </div>
  )

  return (
    <div className={styles.editor}>
      <div className={styles.toolbar}>
        <button 
          className={styles.pinBtn}
          onClick={() => onUpdate(note.id, { pinned: !note.pinned })}
        >
          {note.pinned ? "Unpin" : "Pin"}
        </button>
        <select
          className={styles.categorySelect}
          value={note.category}
          onChange={e => onUpdate(note.id, { category: e.target.value })}
        >
          <option>Personal</option>
          <option>Study</option>
          <option>Work</option>
        </select>
        <button className={styles.deleteBtn} onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
      <input
        className={styles.titleInput}
        value={note.title}
        onChange={e => onUpdate(note.id, { title: e.target.value })}
      />
      <textarea
        className={styles.contentArea}
        value={note.content}
        onChange={e => onUpdate(note.id, { content: e.target.value })}
      />
    </div>
  )
}

export default NoteEditor
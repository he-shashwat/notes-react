
import NoteCard  from "./NoteCard.jsx";
import styles from './Sidebar.module.css'

function SideBar({notes,onSelect,onAdd,onSearch,search,selectedCategory,onCategoryChange}){
    const categories = ["All", "Personal", "Study", "Work"]
    return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Notes</h2>
        <button className={styles.addBtn} onClick={onAdd}>+ New Note</button>
      </div>
      <div className={styles.search}>
        <input 
          className={styles.searchInput}
          value={search} 
          onChange={e => onSearch(e.target.value)} 
          placeholder="Search notes..." 
        />
      </div>
      <div className={styles.categories}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`${styles.catBtn} ${selectedCategory === cat ? styles.active : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.notesList}>
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onSelect={onSelect} selectedId={null} />
        ))}
      </div>
    </div>
  )
}
export default SideBar
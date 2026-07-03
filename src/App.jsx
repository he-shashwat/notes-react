 import { useState,useEffect, } from "react";
import SideBar from "./components/SideBar.jsx";
import NoteEditor from "./components/NoteEditor.jsx";
import styles from './App.module.css'


 function  App(){
  const [notes, setNotes] = useState(() => {
  const saved = localStorage.getItem("notes")
  return saved ? JSON.parse(saved) : [
    { id: 1, title: "Walk the dog", content: "Take him to the park at 6pm", category: "Personal", pinned: true, createdAt: "2025-01-01" },
    { id: 2, title: "Finish homework", content: "Complete the DSP assignment", category: "Study", pinned: false, createdAt: "2025-01-02" }
  ]
})
  
   

    const [selectedId,setSelectedId]=useState(null);
    const selectedNote=notes.find(note=>note.id===selectedId);
    const [search,setSearch]=useState("");
    const [selectedCategory, setSelectedCategory] = useState("All")

     
    useEffect(()=>{
      localStorage.setItem("notes",JSON.stringify(notes))
      },[notes]);

    function addNote(){
      const newNote={
        id: Date.now(),
        title: "new note",
        content: "",
        category:"Personal",
        pinned: false,
        createdAt: new Date().toISOString().split("T")[0]
      }
      setNotes(n=>[...n,newNote])
      setSelectedId(newNote.id)
    }

    const filteredNotes = [...notes]
              .sort((a, b) => b.pinned - a.pinned)
              .filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
              .filter(note => selectedCategory === "All" || note.category === selectedCategory)
    function updateNote(id,changes){
      setNotes(n=>n.map(note=>
              note.id===id?{...note,...changes}:note

      ))
    }
    function deleteNote(id){
      setNotes(n=>n.filter(note=>note.id!=id))
      setSelectedId(null)
    }
    return(
      <div className={styles.app}>
      <SideBar notes={filteredNotes} 
      onSelect={setSelectedId}
       onAdd={addNote}
       onSearch={setSearch}
        search={search}
        selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}>
          
        
       </SideBar>
      {/* <NoteCard></NoteCard> */}
      <NoteEditor note={selectedNote} onUpdate={updateNote} onDelete={deleteNote}></NoteEditor>
      </div>
    )
 }
 export default App
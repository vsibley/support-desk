import { useSelector } from "react-redux"


function NoteItem({note}) {
    const {user} = useSelector((state) => state.auth)
  return (
    <div className="note" style={{
        backgroundColor: note.isOwner ? 'rgba(0.0.0.7)' : '#fff',
        color: note.isOwner ? '#fff' : '#000'
        }}>
        <h4>{user.name}</h4>
        <p>{note.text}</p>
        <div className="note-date">
            {new Date(note.createdAt).toLocaleDateString('en-US')}
        </div>
        </div>
  )
}

export default NoteItem
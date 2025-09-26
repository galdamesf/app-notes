import {NoteContainer} from "./Components/NoteContainer/NoteContainer.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import './App.css'

function App() {

    const notes = [
        {
            text: "Estudiar React",
            time: "10:00 AM",
            color: "cyan"
        },
        {
            text: "Estudiar React",
            time: "3:00 PM",
            color: "yellow"
        },
        {
            text: "Estudiar React",
            time: "5:12 PM",
            color: "pink"
        },
        {
            text: "Estudiar React",
            time: "7:00 AM",
            color: "cyan"
        }
    ]

  return (
    <div className="App">
        <Sidebar/>
        <NoteContainer notes={notes} />
    </div>
  )
}

export default App

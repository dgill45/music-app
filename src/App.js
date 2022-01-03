import {useState} from "react"
import Player from "./components/Player"


function App() {
  
  const [songs, setSongs] = useState([
    {
      title: "Countdown",
      artist: "Def Squad",
      img_src: "https://images.unsplash.com/photo-1512090421650-1ba94830f7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      src: "https://open.spotify.com/embed/track/6RDurH3O3KkCG0YRUOFF3O?utm_source=generator"
      },
    {
      title: "Power Forever",
      artist: "Rising Revolution",
      img_src: "https://images.unsplash.com/photo-1582568477561-2058e1486fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      src: "https://open.spotify.com/embed/artist/2uNqPI7aZs7bIC66t6hAIa?utm_source=generator" 
      },
    {
      title: "Wu-Tang Clan Ain't Nuthing ta F' Wit ",
      artist: "Wu-Tang Clan",
      img_src: "https://images.unsplash.com/photo-1538413051850-aa7c838f80b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      src: "https://open.spotify.com/embed/track/24vNw0Z0srb4zYXwrakw8E?utm_source=generator" 
      },
    {
      title: "The Negotiator",
      artist: "Kill the Druid",
      img_src: "https://images.unsplash.com/photo-1617537777277-c18c7c2896fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      src: "https://open.spotify.com/embed/track/72WTgVY78M7WYz3jyTWPWF?utm_source=generator"
      },

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1)
  return (
    
    <div className="App">
      <Player 
       song = {songs[currentSongIndex]}
       nextSong = {songs[nextSongIndex]} 
       />
    </div>
  );
}

export default App;

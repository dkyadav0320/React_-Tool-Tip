import { Tooltip } from "./Tooltip";
function App() {

  return <div className="App">
    <button>Notify</button>

    <Tooltip text={"React is use to make UI more attractive"}>
    <span class="material-symbols-outlined">feed</span>

      </Tooltip>


      <button>Notify</button>
      <Tooltip text={"Coding Ninja allow the individuals to learn Web Development from Scratch"}>
      <span class="material-symbols-outlined">lightbulb</span>

      </Tooltip>


      <button>Notify</button>
    <Tooltip text={"Practice Coding makes an individual Perfect"}>
    <span class="material-symbols-outlined">lightbulb_circle</span>

      </Tooltip>

  </div>
}

export default App

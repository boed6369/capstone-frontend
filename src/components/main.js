import { useEffect, useState } from "react"
import Index from "../pages"
import axios from 'axios'
import data from "../data"


function Main(props) {
  const armies = {
    armyname: 'Crusade',
    unit: 'Tech Priest Dominus',
    unit2: 'Skitarii',
    unit3: 'Fulfrite Electropriests',
    unit4: 'Sulferhounds',
    unit5: 'DunCrawler Oniger',
    armyname2: 'Sisters of Battle',
    unit6: 'Canoness',
    unit7: 'Battle Sisters',
    unit8: 'Sisters Repencia ',
    unit9: 'Zeriphim',
    unit10: 'Retributers',
  }
  const [army, setarmy] = useState([armies])
  console.log(armies)
  return (
    <div className="armys">
      <div className="Group">
        <h2>Army Name:{armies.armyname}</h2>
        <h1>HQs</h1>
        <h3>{armies.unit}</h3>
        <h1>Troops</h1>
        <h3>{armies.unit2}</h3>
        <h1>Elites</h1>
        <h3>{armies.unit3}</h3>
        <h1>Fast Attack</h1>
        <h3>{armies.unit4}</h3>
        <h1>Heavy Support</h1>
        <h3>{armies.unit5}</h3>
      </div>
      <div className="Group">
        <h1>Army Name:{armies.armyname2}</h1>
        <h1>HQs</h1>
        <h3>{armies.unit6}</h3>
        <h1>Troops</h1>
        <h3>{armies.unit7}</h3>
        <h1>Elites</h1>
        <h3>{armies.unit8}</h3>
        <h1>Fast Attack</h1>
        <h3>{armies.unit9}</h3>
        <h1>Heavy Support</h1>
        <h3>{armies.unit10}</h3>
      </div>
      <div className="newArmy">
        <h1>New Army</h1>
        <label for="name">Enter Army Name:</label>
        <input type="text" id="name" name="name" /><br></br>
        <label for="unit">Enter Unit Name:</label>
        <input type="text" id="unit" name="unit" /><br></br>
        <p>Unit Abilites</p>
        <textarea type="text" id="abilites" name="abilites" />
      </div>
      <div className="newArmy">
        <h1>New Unit</h1>
        <label for="name" list="list">Add to which army?</label>
        <datalist id="list">
        <option value="amry1">{armies.armyname2}</option>
        </datalist>
        <input type="text" id="name" name="name" /><br></br>
        <label for="unit">Enter Unit Name:</label>
        <input type="text" id="unit" name="unit" /><br></br>
        <p>Unit Abilites</p>
        <textarea type="text" id="abilites" name="abilites" />
      </div>
    </div>
  )
}

export default Main
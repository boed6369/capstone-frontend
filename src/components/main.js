import { useEffect, useState } from "react"
import Index from "../pages"
import axios from 'axios'


function Main(props) {
  const [army, setArmy] = useState(null);

  //   useEffect(() => {
  //       async function getArmy() {
  //         try {
  //           const army = await fetch('http://localhost:8000/')
  //           .then(response => response.json())
  //           console.log(army)
  //         } catch (error) {
  //           console.log(error)
  //         }
  //       }
  //      getArmy();
  //  }, []);
  async function getData() {
    try {
      const data = await axios.get('https://capston-backend.herokuapp.com/')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  getData()
  return (
    <div>
      <h1>Main</h1>
      <h1><Index /></h1>
    </div>
  )
}

export default Main
import { use } from "react"
import Apppp from "../Apppp/Apppp"

const Apps = ({ appdatas }) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {
        appdatas.map(appdata => appdata.id < 9 && <Apppp appdata={appdata}></Apppp>)
      }
    </div>
  )
}

export default Apps
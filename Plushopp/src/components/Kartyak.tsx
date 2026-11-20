import { usePlussContext } from "../contexts/PlussContext"
import Kartya from "./Kartya"

export default function Kartyak(){

    const {plussList, load, error} = usePlussContext()

    if(load){
    return(
        <p>Termékek betöltése...</p>
    )
  }
  
  if(error){
    <p>
        return(
            {error}
        )
    </p>
  }

    return(
        <div>
            {plussList.map((adat) => {
                return(
                    <Kartya
                        adat= {adat}
                        key= {adat.id}
                    />
                )
            })}
        </div>
    )
}
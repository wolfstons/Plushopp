import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { plussType } from "../types/plussType"
import { getPluss } from "../services/PlussService"

interface PlussContextType{
    plussList: plussType[]
    load: boolean
    error: string | null
}

const PlussContext = createContext<PlussContextType | undefined>(undefined)

export function PlussProvider({children}:{children:ReactNode}){
    const [plussList, setPlussList] = useState<plussType[]>([])
    const [load, setLoad] = useState<boolean>(true) 
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        getPluss().then(data => {
            setPlussList(data)
            setError(null)
        })
        .catch(()=>{
            setError("Nem sikerült betölteni az adatokat")
        })
        .finally(()=> {
            setLoad(false)
        })
    }, []) /* mellékhatásokat kezeli */


    return(
        <PlussContext.Provider value={{plussList, load, error}}>
            {children}
        </PlussContext.Provider>
    )
}

export function usePlussContext(){
    const context = useContext(PlussContext)
    if (context === undefined){
        throw new Error(
            "Csak a plussprovideren belül használható"
        )
    }
    return context
}
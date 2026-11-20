import type { plussType } from "../types/plussType"

const url = '127.0.0.1:8000/api'

export function getPluss(){
    return fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to fetch products")
            }
            return response.json() as Promise<plussType[]>
        })
        
}
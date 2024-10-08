"use client"

import { useState } from "react"

export default function Form() {

    const [nome, setNome] = useState("")

    return(
        <div>
            <h2>Nome: {nome}</h2>
            <form>
                <input type="text" value={nome} onChange={(e) => {
                    setNome(e.target.value)
                }}/>
            </form>
        </div>
    )
}
'use client'

import { useState } from "react";

export default function Contador() {

    const [contador, setContador] = useState(0)

    return(
        <div>
            <h2>Contador: {contador}</h2>
            <input type="button"
            value="contar"
            onClick={() => 
                setContador(contador + 1)
            } />
        </div>
    );
}
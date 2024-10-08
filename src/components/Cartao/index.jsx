import { Clock, Soup } from "lucide-react";
import Image from "next/image";

export default function Cartao({props}) {
    return(
        <div className="m-4 rounded border-2 border-solid border-rose-400 max-w-[387px]">
            <Image className="bg-cover bg-center" src="/assets/images/ovo_pepino.png" width={387} height={297} alt="Prato de ovo com pepino"/>
            <h2 className="p-2 bg-rose-300 text-gray-800">
                {props.titulo}
            </h2>
            <div className="p-2 text-xs flex items-center gap-2">
                <Clock />
                {props.tempo} minutos
            </div>
            <div className="p-2 text-xs flex items-center gap-2">
                <Soup />
                serve {props.serve} pessoas
            </div>
        </div>
    ) 
}
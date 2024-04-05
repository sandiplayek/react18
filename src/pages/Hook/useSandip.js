import { useState } from "react";
export default function useSandip(vvv){
    let [countt,setCountt] =useState(vvv);
    const incrementt =() =>{
        setCountt(countt+1);
    }
    const decrementt =() =>{
        setCountt(countt-1);
    }
    return [countt,incrementt,decrementt];    
}
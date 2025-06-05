import { useGlobalState } from "@/hooks/useGlobalState"
import { useEffect } from "react";

export default function Cart(){
    const [cart, setCart] = useGlobalState("carrinho");

    useEffect(() => {
        async function fetchCart(){
            try{
                const response = await fetch("http://localhost:3001/carrinho")
            }catch(error){
                console.log(error)
            }
        }
    })

    return (
        <>
        
        </>
    )
}
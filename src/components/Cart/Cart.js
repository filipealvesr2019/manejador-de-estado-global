"use client"
import { useGlobalState } from "@/hooks/useGlobalState"
import { useEffect } from "react";

export default function Cart(){
    const [cart, setCart] = useGlobalState("carrinho");

    useEffect(() => {
        async function fetchCart(){
            try{
                const response = await fetch("http://localhost:3001/carrinho");
                const data = await response.json();
                setCart(data)

            }catch(error){
                console.log(error)
            }
        }
        fetchCart();
    }, [setCart]);

    if (!cart || cart.produtos?.length === 0){
        return (
            <p>O Carrinho esta Vazio.</p>
        )
    }

    return (
        <>
        <h2>Carrinho</h2>
        </>
    )
}
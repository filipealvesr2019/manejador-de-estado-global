"use client"
import { useGlobalState } from "@/hooks/useGlobalState";
import { useEffect } from "react";

export default function ProductList(){
    const [produtos, setProdutos] = useGlobalState("produtos");

    useEffect(() => {
        fetch("http://localhost:3001/produtos")
        .then(res => res.json())
        .then(setProdutos)
        .catch(err => console.log(err));
    }, []);

    const adicionarAoCarrinho = async (produtoId) => {
        await fetch("http://localhost:3001/carrinho", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ produtoId, quantidade: 1 })
        });

        const res = await fetch("http://localhost:3001/carrinho");
        const data = await res.json();
        const total = data.produtos.reduce((acc, p) => acc + p.quantidade, 0);
        const [_, setCarrinhoCount] = useGlobalState("carrinho");
        setCarrinhoCount(total)
    }
    return (
        <div>
            {produtos?.map(p => (
                <div key={p._id}>
                    <h2>{p.nome}</h2>
                    <p> R$ {p.preco}</p>
                    <button onClick={() => adicionarAoCarrinho(p._id)}>Adicionar</button>
                </div>
            ))}
        </div>
    )
}
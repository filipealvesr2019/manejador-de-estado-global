export default function ProductList(){
    const [produtos, setProdutos] = useGlobalState("produtos");

    useEffect(() => {
        fecth("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(setProdutos)
    }, []);

    const adicionarAoCarrinho = async (produtoId) => {
        await fetch("http://localhost:3000/carrinho", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ produtoId, quantidade: 1 })
        })
    }
    return (
        <div>
        
        </div>
    )
}
export default function AddCardButton(){
    const [cartCount, setCartCount] = useGlobalState("cartCount");

    const addToCart = () => {
        const newCount = (cartCount || 0) + 1;
        setCartCount(newCount);
    };

    return (
        <button onClick={addToCart}>
            Adicionar ao Carrinho
        </button>
    )
}
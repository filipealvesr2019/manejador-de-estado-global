export default function ProductList(){

    useEffect(() => {
        fecth("http://localhost:3000/api/products")
        .then(res => res.json())
        .then()
    }, [])
    return (
        <div>
        
        </div>
    )
}
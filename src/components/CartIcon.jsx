import styles from './CartIcon.module.css'
export default function CartIcon(){
   const [cartCount] = useGlobalState("cartCount");


    return (
        <div className={styles.CartIcon}>
            🛒
        </div>
    )
}
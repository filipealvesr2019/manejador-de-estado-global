"use client"
import { useGlobalState } from '@/hooks/useGlobalState';
import styles from './CartIcon.module.css'
export default function CartIcon(){
   const [cartCount] = useGlobalState("cartCount");


    return (
        <div className={styles.CartIcon}>
            🛒
            <span className={styles.badge}>
                {cartCount || 0}
            </span>
        </div>
    )
}
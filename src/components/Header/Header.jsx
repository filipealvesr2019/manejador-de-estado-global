
"use client";

import CartIcon from "../CartIcon";
import styles from './Header.module.css'

export default function Header(){
    return (
        <header className={styles.container}>
            <div className={styles.div}>
            <span>Logo</span>
            <div>
                <CartIcon />
            </div>

            </div>
        </header>
    )
}
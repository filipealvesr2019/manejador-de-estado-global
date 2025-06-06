
"use client";

import Link from "next/link";
import CartIcon from "../CartIcon";
import styles from './Header.module.css'

export default function Header(){
    return (
        <header className={styles.container}>
            <div className={styles.div}>
            <span>Logo</span>
            <Link href={"/cart"}>
                <CartIcon />
            </Link>

            </div>
        </header>
    )
}
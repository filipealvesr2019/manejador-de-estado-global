import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import AddCardButton from "@/components/AddCardButton";
import ProductList from "@/components/Products/ProductList";

export default function Home() {
  return (
    <div className={styles.page}>
    <Header />
    <main>
      <h1>Produto</h1>
      <AddCardButton />  
      <ProductList />     
    </main>
    </div>
  );
}

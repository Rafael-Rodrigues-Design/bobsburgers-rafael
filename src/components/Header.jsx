import styles from './Header.module.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
            <Link to="/">Bob's Burgers Characters</Link>
            </h1>
        </header>
    )
}
import styles from "./Search.module.css"

export function Search({ total, search }) {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input
                    placeholder="search"
                    type="text"
                    onChange={search}
                />
            </form>
            <div className={styles.total}>{total} characters found</div>
        </div>
    )
}
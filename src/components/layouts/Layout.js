import styles from './index.module.css'
const Layout = () => {
    return (
        <main className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav className={styles.sidebar__nav}>
                    <ul>
                        <li>Home</li>
                        <li>Transaction</li>
                    </ul>
                </nav>
            </aside>
            <section></section>
        </main>
    )
}

export default Layout
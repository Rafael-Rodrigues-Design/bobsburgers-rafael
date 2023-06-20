import { Link } from 'react-router-dom'
import styles from './CharacterCard.module.css'

export function CharacterCard({ id, image, name }) {
    return (
        <Link to={`/character/${id}`}>
            <div className={styles.card}>

                <div className={styles.cardImage} style={{backgroundImage: `url(${image})`}}></div>

                <div className={styles.cardName}>
                    {name}
                </div>
            </div>
        </Link>
    )
}
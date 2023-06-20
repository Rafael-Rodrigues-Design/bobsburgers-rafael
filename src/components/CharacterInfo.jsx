import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import styles from "./CharacterInfo.module.css"

export function CharacterInfo() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })

    }, [id])


    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <div className={styles.container}>

                    <div className={styles.imageAndTitle}>

                        <div className={styles.image} style={{ backgroundImage: `url(${character.image})` }}>
                        </div>

                        <div className={styles.name}>
                            {character.name}
                        </div>
                    </div>

                    <div className={styles.characterInfo}>
                        <div>
                            <section>
                                <div className={styles.info}>
                                    Gender
                                </div>
                                <div>
                                    {character.gender}
                                </div>
                            </section>

                            <section>
                                <div className={styles.info}>
                                    Age
                                </div>
                                <div>
                                    {character.age}
                                </div>
                            </section>

                            <section>
                                <div className={styles.info}>
                                    Occupation
                                </div>
                                <div>
                                    {character.occupation}
                                </div>
                            </section>

                            <section>
                                <div className={styles.info}>
                                    First episode
                                </div>
                                <div>
                                    {character.firstEpisode}
                                </div>
                            </section>

                            <section>
                                <div className={styles.info}>
                                    Voiced by
                                </div>
                                <div>
                                    {character.voicedBy}
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
import { useEffect, useState } from "react"
import { CharacterCard } from "./CharacterCard";

import styles from "./CharactersList.module.css"
import { Search } from "./Search";

export function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch("https://bobsburgers-api.herokuapp.com/characters")
            .then(response => response.json())
            .then(data => {
                const sortedCharacters = data.sort((a, b) => a.name.localeCompare(b.name))

                setCharacters(sortedCharacters)
                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    } else {
        return (
            <>
                <Search
                    total={filteredCharacters.length}
                    search={getSearchValue}
                />
                <div className={styles.container}>
                    {filteredCharacters.map(character => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            image={character.image}
                            name={character.name}
                        />
                    ))}
                </div>
            </>
        )
    }
}
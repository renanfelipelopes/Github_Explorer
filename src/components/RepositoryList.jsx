import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/renanflow/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []); //nao esquecer o segundo parametro, se nao houver, o useEffect vai entrar num loop infinito

    return (
        <section className="repository-list">
            <h1>Lista de repositorio</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}
import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    // setRepositories([1, 2, 3]);

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
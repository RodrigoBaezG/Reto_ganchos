import useFetchUsers from './hooks/useFetchUsers.jsx';
import './Cards.css';

function Cards() {

    const [users, setUsers] = useFetchUsers('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="cards-container">
            {users.map(user => (
                <div key={user.id} className="card">
                    <h1>{user.name}</h1>
                    <h2>{user.company.catchPhrase}</h2>
                </div>
            ))}
        </div>
    );

}

export default Cards;
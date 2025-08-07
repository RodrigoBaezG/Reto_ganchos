import { useState, useEffect } from 'react';

function useFetchUsers(url) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        }

        fetchUsers();
    }, [url]);

    return [users, setUsers];
}

export default useFetchUsers;
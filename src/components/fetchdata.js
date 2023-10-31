import Axios from "axios";
import { useEffect, useState } from "react";

export function FetchData() {
    const [data, setUserData] = useState([]);
    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
        .then(response => {
            const data = response.data.users;
            setUserData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
            <table className="table table-dark mt-4 text-center">
                    <tr className="bg-dark">
                        <th>S.No</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                    <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img height={"30px"} src={user.image}/></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    );
}
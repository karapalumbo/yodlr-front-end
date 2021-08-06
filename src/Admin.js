import { useEffect, useState } from "react";
import UserApis from "../src/api/api";

function Admin() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    listAllUsers();

    async function listAllUsers() {
      let allUsers = await UserApis.getAllUsers();
      setUsers(allUsers);
    }
  }, []);

  return (
    <div>
      <h1>Yodlr Users</h1>

      {users && (
        <div className="users">
          {users.map((user) => (
            <div>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;

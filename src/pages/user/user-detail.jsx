import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
  const params = useParams();
  const userId = params?.userId || null;

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await res.json();
      setUser(data);
    }
    fetchUser();
  },[userId])

  if(!userId) return <>Not found</>

  return (
    <div>
      <h4>UserDetail</h4>
      Phone: {user?.phone} <br />
    </div>
  )
}

export default UserDetail
import React from 'react'
import BasicButton from '../../components/basic-button';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pageQueryString = searchParams.get('_page');
  const limitQueryString = searchParams.get('_limit');
  const [users, setUser] = React.useState([]);
  const [page, setPage] = React.useState(pageQueryString || 1);
  const [limit, setLimit] = React.useState(limitQueryString || 3);
 
  React.useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`);
      const data = await res.json();
      setUser(data)
    }
    fetchUsers();
  }, [page, limit])

  function goToDetail(userId) {
    navigate(`/user/profile/${userId}`)
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </th>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td>
                <BasicButton  text="View" onClick={() => goToDetail(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="flex items-center justify-end">
        <div 
          className="flex items-center justify-center cursor-pointer px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            setPage(prevState => prevState - 1);
            navigate(`${location.pathname}?_page=${page - 1}&_limit=3`)
          }}
        >
          Previous
        </div>
        <div className='ml-2'>{page}</div>
        <div 
          className="flex items-center justify-center cursor-pointer px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            setPage(prevState => prevState + 1);
            navigate(`${location.pathname}?_page=${page + 1}&_limit=3`)
            // pass query string 
            // /user/profile?_page=1&_limit=3
            // user/profile?_page=${page + 1}&limit=3
          }}
        >
          Next
        </div>
      </div>

      <br />

  </div>
  )
}

export default UserProfile
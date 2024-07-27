import { Link, Outlet } from 'react-router-dom';

function User() {
  // const [type, setType] = React.useState('profile');
  

  // function changePage(type) {
  //   setType(type);
  // }

  return (
    <div>
      <h1>User</h1>
      First Name: Anh Nhat <br />
      Last Name: Vo <br />
      Email: anhnhat@gmail.com <br />
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <Link
            to="/user/profile" 
            aria-current="page" 
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 cursor-pointer"
            // onClick={() => changePage('profile')}
          >
            Profile
          </Link>
        </li>
        <li className="me-2">
          <Link 
            to="/user/account" 
            aria-current="page" 
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 cursor-pointer"
            // onClick={() => changePage('account')}
          >
            Account
          </Link>
        </li>
      </ul>

      <Outlet />

      {/* {type === 'profile' && <UserProfile />}
      {type === 'account' && <UserAccount />} */}

    </div>
  )
}

export default User
import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
// Results data filtered using categories
const ListElements = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <p className="right-100 absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="block px-4 py-2 text-sm text-gray-700">
        <Link to={routes.settings()}>Settings</Link>
      </div>
      <div className="block px-4 py-2 text-sm text-gray-700">
        <button onClick={logOut}>Log Out</button>
      </div>
    </p>
  )
}

function Dropdown() {
  const [display, setDisplay] = React.useState(false)
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const handleClick = () => {
    display == false ? setDisplay(true) : setDisplay(false)
  }

  return (
    <div>
      <button
        type="button"
        className="items-left flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={handleClick}
      >
        Welcome, {isAuthenticated ? currentUser.email : 'Nobody'}
      </button>
      {display ? <ListElements /> : ''}
    </div>
  )
}

export default Dropdown

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
// Results data filtered using categories
const ListElements = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <p className="absolute right-5 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:right-10">
      {isAuthenticated ? (
        <div className={'border-b px-4 py-2'}>
          <p className={'font-mono font-thin lowercase'}>signed in as</p>
          <p className={'font-bold uppercase'}>{currentUser.email}</p>
        </div>
      ) : (
        <Link
          to={routes.login()}
          className={'block border-b px-4 py-2 text-sm text-gray-700'}
        >
          <i className="fa-solid fa-user-tie mr-2"></i>Login
        </Link>
      )}
      <div className="block lg:hidden">
        <nav className={'py-4'}>
          <ul
            className={'ml-1 flex flex-col gap-4 font-serif text-sm font-bold'}
          >
            <li className={'mx-3 inline-block'}>
              <Link to={routes.general()}>General</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.business()}>Business</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.entertainment()}>Entertainment</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.health()}>Health</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.science()}>Science</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.sports()}>Sports</Link>
            </li>
            <li className={'mx-3 inline-block'}>
              <Link to={routes.technology()}>Technology</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isAuthenticated ? (
        <div className={'border-t'}>
          <div className="block px-4 py-2 text-sm text-gray-700">
            <Link to={routes.settings()}>Settings</Link>
          </div>
          <div className="block px-4 py-2 text-sm text-gray-700">
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </p>
  )
}

function Dropdown() {
  const [display, setDisplay] = React.useState(false)
  const { isAuthenticated } = useAuth()
  const handleClick = () => {
    display === false ? setDisplay(true) : setDisplay(false)
  }

  return (
    <div>
      <button
        type="button"
        className="items-left flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={handleClick}
      >
        {isAuthenticated ? (
          <div className={'flex items-center'}>
            <i className="fa-regular fa-circle-user md:fa-2xl fa-xl mr-1"></i>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        ) : (
          <div className={'block lg:hidden'}>
            <div className={'flex items-center'}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        )}
      </button>
      {display ? <ListElements /> : ''}
    </div>
  )
}

export default Dropdown

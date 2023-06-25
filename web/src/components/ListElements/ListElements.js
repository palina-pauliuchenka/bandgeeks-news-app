// import { Link, routes } from '@redwoodjs/router';
// import { useAuth } from 'src/auth';
//
// const ListElements = () => {
//   const { currentUser, logOut } = useAuth();
//
//   const navigationLinks = [
//     { key: 'general', label: 'General' },
//     { key: 'business', label: 'Business' },
//     { key: 'entertainment', label: 'Entertainment' },
//     { key: 'health', label: 'Health' },
//     { key: 'science', label: 'Science' },
//     { key: 'sports', label: 'Sports' },
//     { key: 'technology', label: 'Technology' },
//   ];
//
//   return (
//     <div className="absolute md:right-10 right-5 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//       {currentUser && (
//         <div className="border-b px-4 py-2">
//           <p className="font-mono font-thin lowercase">signed in as</p>
//           <p className="font-bold uppercase">{currentUser.email}</p>
//         </div>
//       )}
//       <div className="lg:hidden block">
//         <nav className="border-b py-4">
//           <ul className="flex flex-col gap-4 ml-1 font-serif text-sm font-bold">
//             {navigationLinks.map((link) => (
//               <li key={link.key} className="mx-3 inline-block">
//                 <Link to={routes[link.key]()}>{link.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       {currentUser && (
//         <div className="block px-4 py-2 text-sm text-gray-700">
//           <Link to={routes.settings()}>Settings</Link>
//         </div>
//       )}
//       {currentUser && (
//         <div className="block px-4 py-2 text-sm text-gray-700">
//           <button onClick={logOut}>Log Out</button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default ListElements;

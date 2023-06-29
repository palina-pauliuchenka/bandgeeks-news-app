import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useQuery, gql } from '@apollo/client'
import GeneralPage from '../news/GeneralPage/GeneralPage'
import BusinessPage from '../news/BusinessPage/BusinessPage'

const UserPreferences = gql`
query grabUserPreferences($userId: String!) {
  fetchUser(id:$userId) {
    newsGeneral
    newsBusiness
  }
}
`;

const HomePage = () => {
  const { currentUser } = useAuth();
  const userName = currentUser ? currentUser.email : ''; // this was just a test. I kept it here incase I ever need to access this 

const{ data } = useQuery(UserPreferences, {
  variables: { userId: userName },
});

const userPref = data?.fetchUser || {};

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>

        <div>
          
            {currentUser ? (
            <> 
            {userPref.newsGeneral && <GeneralPage numberOfArticles = {5} />}
            {userPref.newsBusiness && <BusinessPage numberOfArticles = {5}/>}
            </>
              ) : ( <GeneralPage numberOfArticles = {5}/> )}

        </div>
      </main>
    </>
  )
}

export default HomePage

import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useEffect, useState } from 'react'
import GeneralPage from '../news/GeneralPage/GeneralPage'

const HomePage = () => {
  const { currentUser } = useAuth();
  const userName = currentUser ? currentUser.email : '';

  const { generalPref } = useAuth();

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>

        <div className="relative w-full h-[calc(100vh-100px)]">
          
            {currentUser ? (
            <> <GeneralPage numberOfArticles = {5} /> </>
              ) : ( <GeneralPage numberOfArticles = {5}/> )}

        </div>
      </main>
    </>
  )
}

export default HomePage

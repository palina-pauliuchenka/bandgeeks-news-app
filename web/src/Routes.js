// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

// START --- IMPORTING ALL NEWS PAGES
import { useAuth } from 'src/auth'
import NewsLayout from 'src/layouts/NewsLayout/NewsLayout'
// END --- IMPORTING ALL NEWS PAGES

// START --- IMPORTING ACCOUNT PAGES
import ForgotPasswordPage from 'src/pages/account/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from 'src/pages/account/LoginPage/LoginPage'
import ResetPasswordPage from 'src/pages/account/ResetPasswordPage/ResetPasswordPage'
import SignupPage from 'src/pages/account/SignupPage/SignupPage'

// import { useAuth } from './auth'
// END --- IMPORTING ACCOUNT PAGES

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/bubbles" page={BubblesPage} name="bubbles" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NewsLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={NewsLayout}>
          <Route path="/settings" page={SettingsPage} name="settings" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

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
import NewsLayout from "src/layouts/NewsLayout/NewsLayout";
import TechnologyPage from "src/pages/news/TechnologyPage/TechnologyPage";
import SportsPage from "src/pages/news/SportsPage/SportsPage";
import SciencePage from "src/pages/news/SciencePage/SciencePage";
import HealthPage from "src/pages/news/HealthPage/HealthPage";
import EntertainmentPage from "src/pages/news/EntertainmentPage/EntertainmentPage";
import BusinessPage from "src/pages/news/BusinessPage/BusinessPage";
import GeneralPage from "src/pages/news/GeneralPage/GeneralPage";
// END --- IMPORTING ALL NEWS PAGES

// START --- IMPORTING ACCOUNT PAGES
import SignupPage from "src/pages/account/SignupPage/SignupPage";
import LoginPage from "src/pages/account/LoginPage/LoginPage";
import ForgotPasswordPage from "src/pages/account/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "src/pages/account/ResetPasswordPage/ResetPasswordPage";

import {useAuth} from "src/auth";

// import { useAuth } from './auth'
// END --- IMPORTING ACCOUNT PAGES

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NewsLayout}>
        <Route path="/technology" page={TechnologyPage} name="technology" />
        <Route path="/sports" page={SportsPage} name="sports" />
        <Route path="/science" page={SciencePage} name="science" />
        <Route path="/health" page={HealthPage} name="health" />
        <Route path="/entertainment" page={EntertainmentPage} name="entertainment" />
        <Route path="/business" page={BusinessPage} name="business" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/general" page={GeneralPage} name="general" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import AdminLayout from './components/layouts/AdminLayout';
import { LoginPage } from './pages/Auth/LoginPage';
import { AppMessages } from './pages/AppMessages';
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - Veterinarian app"
          defaultTitle="Veterinarian app"
        >
          <meta name="description" content="A Veterinarian application" />
        </Helmet>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminLayout} />
          <Redirect from={'/'} to={'/login'} />
          <Route component={NotFoundPage} />
        </Switch>
        <AppMessages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

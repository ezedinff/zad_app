import AdminLayout from 'app/components/layouts/AdminLayout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {/* <span>HomePage container</span> */}
      <AdminLayout />
      {/* <Switch>
            { routes.map((route) => <Route  key={route.path} path={`${path}/${route.path}`} component={Page}/> ) }
          </Switch> */}
    </>
  );
}

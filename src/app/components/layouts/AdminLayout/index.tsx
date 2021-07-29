import * as React from 'react';
import styles from './styles';
import {
  CssBaseline,
  Hidden,
  Paper,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import Navigator from '../../navigation/Drawer';
import Header from '../../navigation/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import { drawerWidth } from 'utils/constants';
import routes from 'app/routes';
export interface AdminLayoutProps extends WithStyles<typeof styles> {}
const AdminLayout = (props: AdminLayoutProps) => {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
      <div className={classes.app}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <main className={classes.main}>
          <Switch>
            {routes.map(route =>
              route.path && route.component ? (
                <Route
                  key={route.path}
                  path={`${route.path}`}
                  component={route.component}
                />
              ) : (
                route.children &&
                route.children.map(chiRoute => (
                  <Route
                    key={chiRoute.path}
                    path={`${chiRoute.path}`}
                    component={chiRoute.component}
                  />
                ))
              ),
            )}
            <Redirect to={'/admin/dashboard'} from={'/'} />
          </Switch>
          {/* { routes.map((route) => <Route  key={route.path} path={`${route.path}`} component={Page}/> ) } */}
        </main>
        <footer className={classes.footer}>{/* <Copyright /> */}</footer>
      </div>
    </div>
  );
};
export default withStyles(styles)(AdminLayout);

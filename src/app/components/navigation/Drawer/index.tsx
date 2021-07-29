import React, { useState } from 'react';
import clsx from 'clsx';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Omit } from '@material-ui/types';
import styles from './styles';
import routes from 'app/routes';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import ScrollArea from 'react-scrollbar';
import Logo from 'assets/logo.png';
export interface NavigatorProps
  extends Omit<DrawerProps, 'classes'>,
    WithStyles<typeof styles> {}

const NavigatorLink = ({
  id,
  classes,
  location,
  path,
  icon,
  active,
  children,
}) => {
  var [isOpen, setIsOpen] = useState(false);
  if (!children) {
    return (
      <ListItem
        key={id}
        button
        component={RouterLink}
        to={path}
        selected={path === location.pathname}
        className={clsx(
          classes.item,
          path === location.pathname ? classes.itemActiveItem : '',
        )}
      >
        <ListItemIcon className={clsx(classes.itemIcon)}>{icon}</ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemPrimary,
          }}
        >
          {id}
        </ListItemText>
      </ListItem>
    );
  }
  return (
    <>
      {' '}
      <ListItem
        key={id}
        button
        onClick={() => setIsOpen(!isOpen)}
        disableRipple
        className={clsx(
          classes.item,
          path === location.pathname ? classes.itemActiveItem : '',
        )}
      >
        <ListItemIcon className={clsx(classes.itemIcon)}>{icon}</ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemPrimary,
          }}
        >
          {id}
        </ListItemText>
        <ListItemIcon className={clsx(classes.itemIcon)}>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ListItemIcon>
      </ListItem>
      {children && (
        <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(childrenLink => (
              <NavigatorLink
                key={childrenLink.id}
                id={childrenLink.id}
                location={location}
                classes={classes}
                path={childrenLink.path}
                icon={childrenLink.icon}
                active={childrenLink.active}
                children={childrenLink.children}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;
  const location = useLocation();
  return (
    <Drawer variant="permanent" {...other}>
      <ListItem className={clsx(classes.itemCategory, classes.logo)}>
      ZAD Backery
      </ListItem>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <List color="default" disablePadding>
          {routes.map(({ id, path, icon, active, children }) => (
            <NavigatorLink
              key={id}
              id={id}
              location={location}
              classes={classes}
              path={path}
              icon={icon}
              active={active}
              children={children}
            />
          ))}
          {/* <Divider className={classes.divider} /> */}
        </List>
      </ScrollArea>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);

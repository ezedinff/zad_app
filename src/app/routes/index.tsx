import React from 'react';
import {
  ShoppingCartOutlined,
  ShoppingBasketOutlined,
  GroupWorkOutlined,
  TrendingDownOutlined,
  SettingsOutlined,
  DashboardOutlined,
} from '@material-ui/icons';
import { AdminPage } from 'app/pages/Admin/AdminPage';
import DashboardPage from 'app/pages/Admin/Dashboard';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
interface CustomRoute {
  id: string;
  icon?: React.ReactNode;
  path?: string;
  active: boolean;
  component?: React.ComponentType<any>;
  children?: CustomRoute[];
  roles: string[];
}
const routes: CustomRoute[] = [
  {
    id: 'Dashboard',
    icon: <DashboardOutlined />,
    path: '/admin/dashboard',
    active: true,
    component: DashboardPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Products',
    icon: <ShoppingBasketOutlined />,
    path: '/admin/products',
    active: false,
    component: AdminPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Sales',
    icon: <ShoppingCartOutlined />,
    path: '/admin/sales',
    active: false,
    component: AdminPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Product Ingredients',
    icon: <GroupWorkOutlined />,
    path: '/admin/product-ingredients',
    active: false,
    component: AdminPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Expenses',
    icon: <TrendingDownOutlined />,
    path: '/admin/expenses',
    active: false,
    component: AdminPage,
    roles: ['admin', 'manager'],
  },
  {
    id: 'Settings',
    icon: <SettingsOutlined />,
    path: '/admin/settings',
    active: false,
    component: Container,
    roles: ['admin', 'manager'],
  }
];
export default routes;

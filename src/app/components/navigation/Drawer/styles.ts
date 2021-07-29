import { createStyles, Theme } from '@material-ui/core/styles';
const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    itemActiveItem: {
      color: '#17a2b8',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    logo: {
      marginBottom: '48px',
      fontSize: 24,
      color: '#17a2b8',
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    nestedList: {
      paddingLeft: theme.spacing(2) + 30,
    },
  });

export default styles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  textError: {
    color: '#f44336',
  },
  textLabel: {
    pointerEvents: 'all',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      paddingRight: 5,
    },
  },
  messageCount: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 12,
  },
  helperText: {
    display: 'flex',
    fontWeight: 'normal',
  },
  textGrow: {
    flexGrow: 1,
  },
}));

export default useStyles;

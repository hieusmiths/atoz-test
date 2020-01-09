import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {},
});

function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleClick(path) {
    props.history.push(path);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Resolve"
        icon={<RestoreIcon />}
        onClick={() => handleClick('/resolve-webpack')}
      />
      <BottomNavigationAction
        label="Formik"
        icon={<FavoriteIcon />}
        onClick={() => handleClick('/formik')}
      />
      <BottomNavigationAction label="Http" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
SimpleBottomNavigation.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(SimpleBottomNavigation);

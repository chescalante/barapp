import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import User from "../assets/icons/User";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: ({ hasPhoto }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: hasPhoto ? "none" : "3px solid #232326",
    fontWeight: 800,
    textTransform: "uppercase",
    width: 32,
    height: 32,
  }),
}));

const LoginButton = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading: isAuthLoading,
    user,
  } = useAuth0();

  const classes = useStyles({ hasPhoto: user?.picture ? true : false });

  return (
    <>
      {!isAuthenticated && (
        <IconButton
          disabled={isAuthLoading}
          color="inherit"
          onClick={() => loginWithRedirect()}
        >
          <User />
        </IconButton>
      )}
      {isAuthenticated && (
        <IconButton color="inherit" component={Link} to={"/account"}>
          <Avatar
            className={classes.avatar}
            src={user.picture}
            alt={user.nickname}
          >
            {user.name[0]}
          </Avatar>
        </IconButton>
      )}
    </>
  );
};

export default LoginButton;

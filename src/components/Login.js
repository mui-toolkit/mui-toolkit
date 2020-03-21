import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({}));

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container direction="column">
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2">Log In</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ maxWidth: "20em" }}
          justify="center"
          alignItems="center"
        >
          <Grid item container justify="center">
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Button>
            <input type="submit" value="Log In" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;

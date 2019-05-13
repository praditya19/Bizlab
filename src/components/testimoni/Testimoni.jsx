import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    height: "100%",
    margin: 10
  }
});

function FullWidthGrid(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Container>
      <center>
        <div style={{ background: "#ffcf03" }} className={classes.root}>
          <br />
          <h1 style={{ textAlign: "center" }}>Testimoni</h1>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              {" "}
              <Card className={classes.card}>
                <CardContent>
                  <img
                    style={{ width: 35 }}
                    src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
                  />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Ilham
                  </Typography>
                  <p>
                    "Sangat menarik sekali, karena disini kita diajarkan apa
                    yang diluar sana mungkin tidak diajarkan, sangat bermanfaat
                    sekali acaranya. JIka temen-temen ada yang mau belajar
                    bisnis, temen-temen bisa belajar melalui bizlab ini"
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <Card className={classes.card}>
                <CardContent>
                  <img
                    style={{ width: 35 }}
                    src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
                  />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Renita
                  </Typography>
                  <p>
                    "Bermanfaat sekali, apalagi saat ini banyak anak muda yang
                    mau wirausaha, bermanfaat banget tips-tipsnya. Jika
                    temen-temen mau tau informasi belajar di bizlab bisa ikuti
                    instagramnya."
                  </p>
                  <br />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </center>
    </Container>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);

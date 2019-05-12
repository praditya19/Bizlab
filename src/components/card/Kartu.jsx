import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Kartu(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={{ background: "white" }} className={classes.root}>
      <h1 style={{ paddingBottom: 10 }}>Why Bizlab?</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Popular In-demand Skills
                </Typography>
                <img
                  src="https://www.computer-course-center.com/assets/img/gallery/40adb40d8366669ed30217bb72bb1c29.jpg"
                  height="150px"
                  alt="logo"
                />
                <p style={{ textAlign: "left" }} variant="h5">
                  Bizlab menghadirkan kelas-kelas belajar keterampilan kekinian
                  yang sedang banyak dibutuhkan perusahaan dan pekerjaan
                  freelance jadi nunggu apalagi ayo Bergabung.
                  <br />
                </p>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Online to Offline Workshop
                </Typography>
                <img
                  src="https://www.renate-europe.net/wp-content/uploads/2018/07/hhh.jpg"
                  height="150px"
                  alt="logo"
                />
                <p style={{ textAlign: "left" }} variant="h2">
                  Kamu bisa mengatur kapan saja ingin belajar melalui internet
                  atau memutuskan untuk belajar lebih intensif dari trainer di
                  ruang dan waktu yang disepakati.
                </p>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Upgrade Your Brand
                </Typography>
                <img
                  src="https://edwardsco.com/wp-content/uploads/2016/12/EDW0002_NCCS_1024x680_NCCS_Group2.jpg"
                  height="150px"
                  alt="logo"
                />
                <p style={{ textAlign: "left" }} variant="h2">
                  Bizlab hadir sebagai platform aktualisasi karena kami percaya
                  bahwa edukasi adalah media komunikasi terbaik menyampaikan
                  pesan sebuah branding.
                </p>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Kartu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Kartu);

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Vidio from "../vidiopembelajaran/vidio";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Kartu from "../card/Kartu";
import Testimoni from "../testimoni/Testimoni";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
}));

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#911fd3" }}>
        <Toolbar>
          <img
            style={{ width: 35 }}
            src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
          />
          <Typography style={{ marginLeft: 20 }}>Home</Typography>
          <Typography style={{ marginLeft: 20 }}>Cari Kelas</Typography>
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              marginLeft: 100
            }}
            component={Link}
            to="/login"
          >
            Masuk
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div style={{ background: "#524c40" }} className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              style={{ color: "black" }}
              variant="h5"
              gutterBottom
              align="center"
              paragraph
            >
              Belajar Keahlian Terkini
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="textSecondary"
              paragraph
            >
              Pilih kelas belajar keterampilan profesional terkini
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button style={{ background: "#f5e900" }} variant="outlined">
                    Coba Sekarang
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <br />
        <center>
          <h1>Kelas yang Tersedia</h1>
        </center>
        <Button style={{ float: "right" }} component={Link} to="/vidio">
          View All
        </Button>
        <br />
        <Vidio />
        <Kartu />
        <Testimoni />
        <br />
        <br />
        {""}
        <div style={{ background: "#524c40" }} className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              style={{ color: "black" }}
              variant="h5"
              gutterBottom
              align="center"
              paragraph
            >
              Belajar Keahlian Terkini
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="textSecondary"
              paragraph
            >
              Pilih kelas belajar keterampilan profesional terkini
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    borderRadius={16}
                    style={{ background: "#f5e900" }}
                    variant="outlined"
                    component={Link}
                    to="/login"
                  >
                    Daftar Sekarang
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <footer className={(classes.footer, classes.layout)}>
        <Grid container spacing={4}>
          {footers.map(footer => (
            <Grid style={{ marginLeft: 100 }} item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>

              {footer.description.map(item => (
                <Typography
                  key={item}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <hr />
        <p style={{ marginLeft: 20 }}>@copyright Bizlab</p>
      </footer>
    </React.Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Kartu from "../card/Kartu";
import Testimoni from "../testimoni/Testimoni";
import Vidio from "../vidiopembelajaran/vidio";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  "@global": {
    strong: {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  btn: {
    background: "#f5e900",
    borderRadius: 50,
    width: "100%",
    color: "white"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://1.bp.blogspot.com/-kT5WUAqGmww/WCV8yClzxGI/AAAAAAAAAJQ/PpS8ERxr_e0X1D3Z88YIkd_fsxYi8LQQgCLcB/s1600/IMG_20161111_150912.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
}));

const footers = [
  {
    title: "Kategori Course",
    description: [
      "All Category",
      "Business",
      "Digital Marketing",
      "Personal Development"
    ]
  },
  {
    title: "Sosial Media Kami",
    description: ["Facebook", "Instagram"]
  }
];

export default function Blog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ backgroundColor: "#911fd3" }}>
        <Toolbar className={classes.toolbar}>
          <img
            style={{ width: 35 }}
            src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
          />
          <Typography style={{ marginLeft: 20 }}>Home</Typography>
          <Typography style={{ marginLeft: 20 }}>Cari Kelas</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Main featured post */}
        <Paper className={classes.mainFeaturedPost}>
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
            />
          }
          <div className={classes.overlay} />
          <Grid container>
            <Container style={{ textAlign: "center" }} maxWidth="sm">
              <div className={classes.mainFeaturedPostContent}>
                <h3
                  component="h1"
                  variant="h3"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Belajar Keahlian Terkini
                </h3>
                <p variant="h5" color="inherit" align="center" paragraph>
                  Pilih kelas belajar keterampilan profesional terkini
                </p>{" "}
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  className={classes.btn}
                >
                  Coba Sekarang
                </Button>
              </div>
            </Container>
          </Grid>
        </Paper>
        <br />
        <center>
          <h1>Kelas yang Tersedia</h1>
        </center>
        <br />
        <Vidio />
        <Kartu />
        <br />
        <br />
        <Testimoni />
        <br />
        <br />
        <Container>
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: "none" }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Container style={{ textAlign: "center" }} maxWidth="sm">
                <div className={classes.mainFeaturedPostContent}>
                  <h3
                    component="h1"
                    variant="h3"
                    color="inherit"
                    align="center"
                    gutterBottom
                  >
                    Daftar Menjadi Trainer
                  </h3>
                  <p variant="h5" color="inherit" align="center" paragraph>
                    klik untuk daftar mendaftar jadi trainer di Bizlab
                  </p>
                  <Button variant="contained" className={classes.btn}>
                    Daftar Sekarang
                  </Button>
                </div>
              </Container>
            </Grid>
          </Paper>
        </Container>
      </main>
      <Container>
        <footer className={(classes.footer, classes.layout)}>
          <Grid container spacing={2}>
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary">
                  {footer.title}
                </Typography>
                {footer.description.map(item => (
                  <p key={item} variant="subtitle1" color="textSecondary">
                    {item}
                  </p>
                ))}
              </Grid>
            ))}
          </Grid>

          <hr />
          <p style={{ marginLeft: 20 }}>@copyright Bizlab</p>
        </footer>
      </Container>
    </div>
  );
}

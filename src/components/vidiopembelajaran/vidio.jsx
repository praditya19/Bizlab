import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
const styles = theme => ({
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
  container: {
    maxWidth: 800,
    margin: 0
  },
  plyr: {
    borderRadius: 4,
    marginBottom: 15
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div style={{ background: "#efefef" }} className={classes.root}>
      <Container>
        <Button style={{ float: "right" }} component={Link} to="/course">
          View All
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://ehcdn.org/media/cache/wide800/uploads/story/image/5844f3c26dab4.JPG"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Membuat Prioritas Pekerjaan dengan Einshower Matrix
                </Typography>
              </CardContent>
              <br />
              {""}
              <CardActions>
                <br />
                <p variant="h5" gutterBottom color="primary">
                  Evarisma Zahra
                </p>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://klinikanakkesulitanbelajar.files.wordpress.com/2013/02/photo-0104.jpg"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Memahamai Dasar Financial Pribadi dan Usaha
                </Typography>
              </CardContent>
              <br />
              {""}
              <CardActions>
                <br />
                <p variant="h5" gutterBottom color="primary">
                  Khaled Hadi Pranowo
                </p>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://anton.nawalapatra.com/wp-content/uploads/2013/05/Kerja-Kelompok.jpg"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Menentukan Value Proposition Sebuah Produk
                </Typography>
              </CardContent>
              <br />
              <CardActions>
                <br />
                <p variant="h5" gutterBottom color="primary">
                  Aditya Putra
                </p>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://www.magz.restubpr.com/wp-content/uploads/2017/02/ams2.jpg"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>Belajar Analisa Data dengan SPSS</Typography>
              </CardContent>
              <br />
              <br />
              <CardActions>
                <br />

                <p variant="h5" gutterBottom color="primary">
                  Erna Fransiska
                </p>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br />
        <h3 variant="h6" style={{ textAlign: "left", marginLeft: 10 }}>
          Workshop
        </h3>
        <h1 variant="h6" style={{ textAlign: "center" }}>
          Not Found
        </h1>
        <br />
      </Container>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);

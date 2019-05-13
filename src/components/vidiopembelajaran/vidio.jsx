import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div style={{ background: "#efefef" }} className={classes.root}>
      <Container>
        <Button style={{ float: "right" }} component={Link} to="/vidio">
          View All
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>
                  Membuat Prioritas Pekerjaan Einsenhower Matrix
                </Typography>
              </CardContent>
              <br />
              <CardActions>
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
                image="https://source.unsplash.com/random"
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
                image="https://source.unsplash.com/random"
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
                image="https://source.unsplash.com/random"
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

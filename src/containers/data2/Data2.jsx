import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Plyr from "react-plyr";
import Button from "@material-ui/core/Button";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  "@global": {
    strong: {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2019/05/dewaweb-blog-mengenal-business-model-canvas-dan-value-propotion-canvas-untuk-membangun-sebuah-startup.png)",
    backgroundSize: "cover",
    height: 300,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
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
    marginLeft: 30,
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
    backgroundColor: "white"
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  judul: {
    fontSize: 25
  },
  detail: {
    textAlign: "justify"
  },
  h3: {
    marginBottom: 30
  },
  p: {
    color: "#6c757d"
  },
  P: {
    color: "#6c757d",
    textDecoration: "line-through"
  },
  btn: {
    background: "green",
    color: "white",
    height: 50,
    width: 150,
    fontSize: 15
  },
  bttn: {
    background: "#ffcf03",
    color: "white",
    height: 50,
    width: 150,
    fontSize: 15,
    border: 0
  },
  review: {
    borderRadius: "50%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
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
const messages = [
  {
    id: 1,
    primary: "Dion Aditya",
    secondary: "inida",
    person:
      "https://lh5.googleusercontent.com/-_4Ivqp5lZyg/AAAAAAAAAAI/AAAAAAAAADs/pe2k-zEHYKY/photo.jpg"
  },
  {
    id: 2,
    primary: "Dion Aditya",
    secondary: `bjbjb`,
    person:
      "https://lh5.googleusercontent.com/-_4Ivqp5lZyg/AAAAAAAAAAI/AAAAAAAAADs/pe2k-zEHYKY/photo.jpg"
  },
  {
    id: 3,
    primary: "Bizlab",
    secondary: "oke deh",
    person: "https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
  }
];
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ backgroundColor: "white" }}>
        <Toolbar className={classes.toolbar}>
          <img
            style={{ width: 35 }}
            src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
          />
          <Button style={{ marginLeft: 20 }} component={Link} to="/">
            Home
          </Button>
          <Button style={{ marginLeft: 20 }} component={Link} to="/course">
            Cari Kelas
          </Button>
        </Toolbar>
      </AppBar>
      <br />
      <Container maxWidth="lg">
        <main>
          {
            <Grid item xs={12} sm={3}>
              <Card component={Link} to="/">
                <Plyr type="youtube" videoId="saBX7XwBLC4" />
              </Card>
            </Grid>
          }

          <div />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Container />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4} className={classes.cardGrid} />
          <h3>Menentukan Value Proposition Sebuah Produk</h3>

          <Toolbar>
            <img
              style={{ width: 35, margin: 10 }}
              src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
            />
            <p>Aditya Putra</p>
          </Toolbar>

          <Container>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={8} style={{ background: "white" }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Tentang" />
                  <Tab label="Review" />
                </Tabs>
                {value === 0 && (
                  <TabContainer>
                    <h4 className={classes.judul} gutterBottom>
                      Sylabus
                    </h4>
                    <ul className={classes.detail}>
                      <li>Pengantar (00.00 - 04.25)</li>
                      <li>Apa itu Value (04.25 - 06.40)</li>
                      <li>Kebutuhan vs Keinginan ( 06.40 - 10.00) </li>
                      <li>Value vs Customer Segment ( 10.00 - 10.50)</li>
                      <li>Value Proposition (10.50 - 13.34)</li>
                      <li>Elemen Value Proposition ( 00.00 - 06.00)</li>
                      <li>Contoh Value Proposition (06.00 - 12.00)</li>
                      <li>
                        Kombinasi customer segment &amp; Customer Jobs ( 12.00 -
                        14.49)
                      </li>
                      <li>Customer Segment (14.49 - 15.10)</li>
                      <li>Customer Jobs ( 15.10 - 16.20)</li>
                      <li>Customer Pain (16.20 - 16.50)</li>
                      <li>Customer Gain (16.50 - 19.10 )</li>
                      <li>Konsep Produk (19.10 - 21.40)</li>
                      <li>Pain Reliever ( 21.40 - 23.00)</li>
                      <li>Syarat value proposition (23.00 - 24.00)</li>
                      <li>Kesimpulan (24.00 - 26.44)</li>
                    </ul>
                    {""}
                    <h4 className={classes.judul} gutterBottom>
                      About Class
                    </h4>
                    <p className={classes.detail}>
                      Membangun sebuah produk yang akan selalu diingat dan
                      digunakan oleh pelanggan, menuntut kamu untuk menciptakan
                      value proposition yang kuat dari produk tersebut. Value
                      proposition adalah nilai atau manfaat yang ditawarkan
                      kepada pelangganmu nanti. Hal inilah yang akan menarik
                      pelanggan untuk membeli produk yang kamu tawarkan agar
                      bisnis yang kamu miliki mampu bersaing dipasar bisnis
                      lainnya. Cara menentukan value proposition menjadi salah
                      satu hal yang kamu harus pahami. Untuk itu dengan melihat
                      video dari Bizlab kamu akan diajarkan cara menentukan
                      value proposition dari bisnismu.
                    </p>
                  </TabContainer>
                )}
                {value === 1 && (
                  <TabContainer>
                    {messages.map(({ id, primary, secondary, person }) => (
                      <React.Fragment key={id}>
                        <ListItem button>
                          <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={primary}
                            secondary={secondary}
                          />
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </TabContainer>
                )}
                <Divider />
              </Grid>

              {/* End main content */}
              {/* Sidebar */}

              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <h5>Menentukan Value Proposition Sebuah Produk</h5>
                  {""}
                  <p className={classes.p}>By Aditya Putra</p>
                  <hr />
                  <p className={classes.p}>Price</p>
                  <p className={classes.P}>Rp&nbsp;80.000,00</p>
                  <p>Rp&nbsp;70.000,00</p>
                  <Container>
                    <center>
                      <button className={classes.btn}>Daftar Course</button>
                    </center>
                  </Container>
                </Paper>
              </Grid>

              {/* End sidebar */}
            </Grid>
          </Container>
        </main>
      </Container>
      <br />
      <br />
      {/* Footer */}
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
      {/* End footer */}
    </div>
  );
}

export default SimpleTabs;

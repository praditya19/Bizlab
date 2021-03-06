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
import Button from "@material-ui/core/Button";
import Plyr from "react-plyr";
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
                <Plyr type="youtube" videoId="suGXZ1869qc" />
              </Card>
            </Grid>
          }

          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Container />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4} className={classes.cardGrid} />
          <h3>Membuat Prioritas Pekerjaan dengan Eisenhower Matrix</h3>

          <Toolbar>
            <img
              style={{ width: 35, margin: 10 }}
              src="https://miro.medium.com/max/3150/1*LMy90jpx18PR8VY9LJoP-g.png"
            />
            <p>Evarisma Zahra</p>
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
                      <li>Pengantar Matriks Eisenhower (00.00 - 01.30)</li>
                      <li>
                        Implementasi perbedaan antara tugas yang penting dan
                        mendesak (01.30 - 10.10)
                      </li>
                      <li>Manfaat Matriks Eisenhower (10.10 - 10.30)</li>
                      <li>
                        Menentukan urutan tugas yang penting dan mendesak (10.30
                        -13.45)
                      </li>
                      <li>
                        Mengadopsi Matriks dalam kehidupan (13.45 - 15.07)
                      </li>
                    </ul>
                    {""}
                    <h4 className={classes.judul} gutterBottom>
                      About Class
                    </h4>
                    <p className={classes.detail}>
                      Dikejar deadline, tidak produktif, dan tidak mencapai
                      target adalah mimpi buruk yang mungkin kamu alami.
                      Sebenarnya hal ini terjadi karena kesalahan kamu dalam
                      mengatur waktu, yang membuat kamu selalu merasa waktu
                      berjalan sangat cepat. Kunci agar kamu bisa memaksimalkan
                      24 jam waktu yang tersedia dengan baik dapat dipelajari
                      dengan memahami metode Matriks Eisenhower. Melalui video
                      ini kamu akan mempelajari metode yang tepat dalam mengatur
                      waktumu dalam satu hari. Jadi, ayo mulai hidup kamu
                      menjadi lebih produktif dengan melihat video ini.
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
                  <h5>Membuat Prioritas Pekerjaan dengan Eisenhower Matrix</h5>
                  {""}
                  <p className={classes.p}>By Evarisma Zahra</p>
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

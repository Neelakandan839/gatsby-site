import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import "../style/style.css";

import landing_img from "../images/landing_img.webp";
import aminities_img from "../images/aminities.webp";
import tag_img from "../images/tag.webp";
import location from "../images/location_1.webp";
import location_advantages from "../images/location_advantages.gif";
import download_brochure from "../images/download-brochure.png";
import master_plan from "../images/master-plan.png";
import floor_plan from "../images/floor-plan.png";
import map from "../images/map.webp";
import alliance_logo from "../images/alliance_logo.png";
import urbanrise_logo from "../images/urbanrise_logo.webp";
import revolutionone_logo from "../images/revolutionone_logo.png";
import gallery_img1 from "../images/gal1.webp";
import gallery_img2 from "../images/gal2.webp";
import gallery_img3 from "../images/gal3.webp";
import gallery_img4 from "../images/gal4.webp";
import gallery_img5 from "../images/gal5.webp";
import gallery_img6 from "../images/gal6.webp";
import gallery_img7 from "../images/gal7.webp";
import gallery_img8 from "../images/gal8.webp";
import gallery_img9 from "../images/gal9.webp";

const galleryImgList = [
  gallery_img1,
  gallery_img2,
  gallery_img3,
  gallery_img4,
  gallery_img5,
  gallery_img6,
  gallery_img7,
  gallery_img8,
  gallery_img9,
];

const planList = [
  {
    img: download_brochure,
    name: "Download brochure",
  },
  {
    img: master_plan,
    name: "download master plan",
  },
  {
    img: floor_plan,
    name: "download floor plan",
  },
];

const Img = styled("img")({
  margin: "0",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#DFF0D8",
  },
}));

function createData(config, price, emi) {
  return { config, price, emi };
}

const rows = [
  createData("2 BHK - R", "₹ 40.83 Lacs", "₹ 24,500"),
  createData("2 BHK - L", "₹ 46.61 Lacs", "₹ 28,000"),
  createData("3 BHK", "₹ 48.18 Lacs", "₹ 29,000"),
];

const HomePage = () => {
  return (
    <Grid container style={{ margin: 0, height: "100vh" }}>
      <Grid
        container
        item
        xs={8}
        style={{
          background: "#F5F5F5",
          height: "100%",
        }}
      >
        <Grid
          container
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12}>
            <Img
              style={{ width: "100%", height: "100%" }}
              alt="complex"
              src={landing_img}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              component="p"
              style={{ textAlign: "center", padding: "30px 0" }}
            >
              A modern lifestyle in a metropolitan city places high demands on
              our living spaces. Busy work schedules and exhausting commute have
              taken their toll on the people we care about the most. At
              Revolution One, we strive to redefine this aspect of modern day
              living by implementing innovative solutions to create a premium
              living community which offers the right environment and the
              perfect living space equipped with luxury lifestyle amenities to
              facilitate a life of comfort, ease and luxury that you truly
              deserve.
            </Typography>
          </Grid>
        </Grid>
        <Amenities />
        <Gallery />
        <Location />
        <Downloads />
        <Contact />
        <Footer />
      </Grid>
      <Enquiry />
    </Grid>
  );
};

export default HomePage;

const Enquiry = () => {
  return (
    <Grid
      container
      xs={4}
      style={{
        height: "100%",
        background: "#382706",
        position: "fixed",
        right: 0,
        alignContent: "flex-start",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Enquire Now 1234
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={9}
        style={{ background: "#834E31", borderRadius: "5px", padding: "20px" }}
      >
        <Grid item xs={12}>
          <InputLabel
            style={{
              padding: "10px 0",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
            htmlFor="outlined-basic1"
          >
            Name*
          </InputLabel>
        </Grid>
        <TextField
          type="text"
          id="outlined-basic1"
          style={{ background: "#ffffff", width: "100%", borderRadius: "5px" }}
          InputProps={{
            sx: {
              height: "40px",
            },
          }}
          variant="outlined"
        />
        <Grid item xs={12}>
          <InputLabel
            style={{
              padding: "10px 0",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
            htmlFor="outlined-basic2"
          >
            Phone Number*
          </InputLabel>
        </Grid>
        <TextField
          type="number"
          id="outlined-basic2"
          hiddenLabel
          style={{ background: "#ffffff", width: "100%", borderRadius: "5px" }}
          InputProps={{
            sx: {
              height: "40px",
            },
          }}
          variant="outlined"
        />
        <Grid item xs={12}>
          <InputLabel
            style={{
              padding: "10px 0",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
            htmlFor="outlined-basic3"
          >
            Email*
          </InputLabel>
        </Grid>
        <TextField
          type="email"
          id="outlined-basic3"
          hiddenLabel
          style={{ background: "#ffffff", width: "100%", borderRadius: "5px" }}
          InputProps={{
            sx: {
              height: "40px",
            },
          }}
          variant="outlined"
        />
        <Grid item xs={12} style={{ paddingTop: "30px" }}>
          <Button
            style={{
              width: "100%",
              height: "50px",
              background: "#FBB70F",
              textTransform: "capitalize",
              color: "#000000",
              fontWeight: "bold",
              fontSize: "14px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ padding: "20px", background: "#ffffff", margin: "30px 0" }}
      >
        <Grid item xs={4}>
          <Img
            style={{ width: "100%", height: "100%" }}
            alt="revolutionone_logo"
            src={revolutionone_logo}
          />
        </Grid>
        <Grid
          container
          item
          xs={8}
          style={{
            paddingLeft: "20px",
            alignContent: "flex-start",
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h2"
              style={{
                padding: "5px 0",
                fontSize: "24px",
                color: "#000000",
              }}
            >
              For more details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              style={{
                padding: "0 0 5px 0",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              +91 7669199797
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                width: "50%",
                height: "40px",
                borderRadius: "20px",
                background: "#0072BE",
                textTransform: "capitalize",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "14px",
              }}
              variant="contained"
            >
              Download Brochure
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Amenities = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={10} style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            width: "32%",
            borderBottom: "2px solid #3c3c3c",
            fontWeight: "bolder",
            letterSpacing: "6px",
            color: "#3c3c3c",
          }}
        >
          AMENITIES
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="h2"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "18px",
            color: "#595959",
          }}
        >
          The best in class amenities for a balanced life
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{ textAlign: "center", padding: "10px 0" }}
        >
          Revolution One comes with best in the market NextGen amenities to give
          you the ultimate experience of luxury living within the safe and
          secured environment of the Gated Community. When you choose Revolution
          One, you gift yourself and your family the unparalleled pleasure of
          living close to nature. Equipped with a lush green and beautifully
          manicured 3.5 acres of Green Park, the premium Gated Community
          facilitates a stress-free living connected to the pristine beauty of
          nature.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{ textAlign: "center", padding: "10px 0" }}
        >
          The plethora of Next Gen Amenities includes like a wide range of Park
          amenities like Walking/Jogging Trail, Outdoor game courts, Outdoor gym
          and workout area, ladies kitty corner, senior citizens hangout area,
          and other trendsetting facilities like Co-working spaces, Work from
          Park, young entrepreneur’s start-up corner, and much more.
          Comprehending the challenges faced by Parents in providing their kids
          with quality coaching and skill development training, the Next Gen
          Homes at Revolution one are equipped with a Skill-development Hub,
          Genius, which offers a variety of coaching classes like dance, music,
          drawing, marshal arts, cookery, and much more, all in the comforts of
          the Gated Community.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{ textAlign: "center", padding: "10px 0" }}
        >
          The star clubhouse of the community is a gateway to luxury living
          offering many luxury features like swimming pool, indoor game courts,
          fully equipped indoor gym, and a wide range of rooftop amenities like
          party and barbeque area, gaming zone, co-working spaces, and much
          more.
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ width: "100%", padding: "0 10px" }}>
        <Img
          style={{ width: "100%", height: "100%" }}
          alt="aminities_img"
          src={aminities_img}
        />
      </Grid>
      <Grid
        item
        xs={8}
        style={{ margin: "30px 0", width: "100%", overflow: "hidden" }}
      >
        <Img
          style={{ width: "100%", height: "100%" }}
          alt="tag_img"
          src={tag_img}
        />
      </Grid>
      <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    background: "#333333",
                    color: "#ffffff",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                >
                  Configuration
                </TableCell>
                <TableCell
                  style={{
                    background: "#333333",
                    color: "#ffffff",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  style={{
                    background: "#333333",
                    color: "#ffffff",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  EMI
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.config}>
                  <TableCell
                    style={{ border: "1px solid #ddd" }}
                    component="th"
                    scope="row"
                  >
                    {row.config}
                  </TableCell>
                  <TableCell
                    style={{ border: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    style={{ border: "1px solid #ddd" }}
                    align="center"
                  >
                    {row.emi}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          position: "relative",
          margin: "30px 0",
          height: "350px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Img
          alt="animated_gif"
          src="https://www.jubileeresidences.com/promos/google/aug-dsp-2020/images/book_site_visit.gif"
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
        />
        <Grid
          container
          xs={12}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            background: "rgba(255, 193, 7, 0.32941176470588235)",
            alignContent: "flex-start",
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              style={{
                textAlign: "center",
                padding: "20px 0 10px 0",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Book a FREE Site visit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="p"
              style={{
                textAlign: "center",
                padding: "0 0 10px 0",
                color: "#33333",
              }}
            >
              Hurry up Few units only available...
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              style={{
                background: "#9BA11E",
                borderRadius: "20px",
                fontSize: "14px",
                color: "#000000",
                textTransform: "capitalize",
                fontWeight: "bold",
                height: "40px",
              }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Gallery = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={10} style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            width: "32%",
            borderBottom: "2px solid #3c3c3c",
            fontWeight: "bolder",
            letterSpacing: "6px",
            color: "#3c3c3c",
          }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="h2"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "18px",
            color: "#595959",
          }}
        >
          Live in the heart of Padur - the gateway to Chennai
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{ textAlign: "center", padding: "10px 0" }}
        >
          The beautifully designed, skilfully planned, and built New Gen Homes
          at Revolution one is custom made for the Next Gen owners. With a
          trendy and modern layout, these homes ensure optimal utilization of
          space and minimalistic design that makes them ideal to live and
          maintain. Incorporating stylish elements, premium fittings, and an
          alluring aesthetic they make for the perfect living spaces.
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        {galleryImgList.map((item) => (
          <Grid item key={item} xs={4} style={{ padding: "20px" }}>
            <Box
              style={{
                padding: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Img
                style={{ width: "100%", height: "100%" }}
                alt={item}
                src={item}
                loading="lazy"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Location = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={10} style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            width: "32%",
            borderBottom: "2px solid #3c3c3c",
            fontWeight: "bolder",
            letterSpacing: "6px",
            color: "#3c3c3c",
          }}
        >
          LOCATION
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="h2"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "18px",
            color: "#595959",
          }}
        >
          LOCATION IS KEY TO A CONVENIENT LIFE
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{ textAlign: "center", padding: "10px 0" }}
        >
          Location is key to a Convenient Life and Revolution One stands as a
          fitting example of it. Situated in the thriving IT-Corridor of the
          city, OMR, this futuristic Gated Community boasts the perfect social
          infrastructure for living. Situated in the neighbourhood of numerous
          IT parks, educational institutions, medical centres, shopping malls,
          and entertainment centres, Revolution one also enjoys excellent
          connectivity to the other parts of the city, making it the ideal
          choice for comfortable living and excellent property value
          appreciation.
        </Typography>
      </Grid>
      <Grid container item xs={12} style={{ padding: "20px", width: "100%" }}>
        <Img
          style={{ width: "100%", height: "100%" }}
          alt="location"
          src={location}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ padding: "20px", width: "100%", overflow: "hidden" }}
      >
        <Img
          style={{ width: "100%", height: "100%" }}
          alt="location_advantages"
          src={location_advantages}
        />
      </Grid>
    </Grid>
  );
};

const Downloads = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#222222",
      }}
    >
      <Grid item xs={10} style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            fontWeight: "bolder",
            letterSpacing: "6px",
            color: "#ffffff",
          }}
        >
          DOWNLOADS
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="p"
          style={{
            textAlign: "center",
            padding: "10px 0",
            color: "#ffffff",
          }}
        >
          Make your dream Apartment in OMR by downloading our floor plans and
          enliven your dream home in no time!
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px 0",
        }}
      >
        {planList.map((item) => (
          <Grid
            container
            item
            key={item.name}
            xs={2}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              style={{
                padding: "30px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Img
                style={{ width: "100%", height: "100%" }}
                alt={item.img || ""}
                src={item.img || ""}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#9BA11E",
                  borderRadius: "20px",
                  fontSize: "14px",
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  height: "40px",
                  width: "200px",
                }}
              >
                {item.name || ""}
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Contact = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{
        padding: "50px 20px",
      }}
    >
      <Grid item xs={7} style={{ width: "100%", overflow: "hidden" }}>
        <Img style={{ width: "100%", height: "100%" }} alt="map" src={map} />
      </Grid>
      <Grid
        container
        item
        xs={5}
        style={{ paddingLeft: "30px", alignContent: "flex-start" }}
      >
        <Grid item xs={4} style={{ width: "100%", overflow: "hidden" }}>
          <Img
            style={{ width: "100%", height: "100%" }}
            alt="revolutionone_logo"
            src={revolutionone_logo}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h1"
            style={{
              padding: "10px 0",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            REVOLUTION ONE
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h2"
            style={{
              fontSize: "18px",
              color: "#3c3c3c",
            }}
          >
            OMR Main Road, Padur,
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h3"
            style={{
              fontSize: "18px",
              color: "#3c3c3c",
            }}
          >
            Chennai, Tamil Nadu 603103
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h1"
            style={{
              padding: "20px 0",
              fontSize: "32px",
              borderBottom: "2px solid #3c3c3c",
              fontWeight: "bolder",
              letterSpacing: "6px",
              color: "#3c3c3c",
            }}
          >
            +91 7669199797
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <Grid item xs={4} style={{ width: "100%", overflow: "hidden" }}>
            {" "}
            <Img
              style={{ width: "100%", height: "100%" }}
              alt="alliance_logo"
              src={alliance_logo}
            />
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Img
              style={{ width: "100%", height: "100%" }}
              alt="urbanrise_logo"
              src={urbanrise_logo}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  return (
    <Grid
      container
      item
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#222222",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="p"
          style={{
            padding: "20px 30px",
            fontSize: "12px",
            color: "#D8A75B",
          }}
        >
          Disclaimer "{" "}
          <Typography
            component="span"
            style={{
              padding: "10px 0",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#D8A75B",
            }}
          >
            "I authorize Revolution One and its representatives to Call, SMS,
            Email or WhatsApp me about their products and offers. This consent
            overrides any registration for DNC / NDNC."
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="p"
          style={{
            padding: "10px 30px",
            color: "#ffffff",
          }}
        >
          © 2022 Alliance Revolution One | All Rights Reserved |
          TN/01/BUILDING/0015/2019 | www.tnrera.in
        </Typography>
      </Grid>
    </Grid>
  );
};

import React, { Fragment } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Services = () => {
  return (
    <div>
      <Heading isHeading={true}>Our Services</Heading>
      <p>
        Our dedicated team has over 65 years of experience working with cooking
        appliances and providing excellent customer service.
      </p>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Box sx={{ minWidth: 275 }}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      be
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Heading3 isHeading={true}>Brands we specialise in</Heading3>
      <p>
        AGA, BEKO, Belling, Bertazzoni, Britannia , Cannon, FALCON, Flavel,
        Godin, Hotpoint , Ilve, La Cornue , Lacanche, Lamona, Leisure, Mercury,
        New World , Rangemaster and Stoves.
      </p>
    </div>
  );
};

export default Services;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.primary};
`;

const Heading3 = styled.h3`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.primary};
`;

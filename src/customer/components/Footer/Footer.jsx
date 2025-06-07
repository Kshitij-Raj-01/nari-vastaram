import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        columns={12}
        sx={{
          bgcolor: "black",
          color: "white",
          textAlign: "center",
          py: 3,
          mt: 10,
          justifyContent: "space-evenly",
        }}
      >
        <Grid span={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partner
            </Button>
          </div>
        </Grid>
      
        <Grid span={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid span={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Term
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        sx={{
          bgcolor: "black",
          color: "white",
          textAlign: "center",
          py: 3,
          justifyContent: "center"
        }}
      >
      <Grid className='pt-10' item xs={12}>
      <Typography variant="body2" component='p' align="center">
          &copy; 2023 My company. All rights reserved.
      </Typography>
      <Typography variant="body2" component='p' align="center">
          Made with love by Me
      </Typography>
      </Grid>
      </Grid>
    </div>
  );
};

export default Footer;


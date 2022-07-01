import { Container, Grid } from "@mui/material";
import Image from "next/image";
const Images = ({ trending }) => {
  console.log(trending, "trasdasdedn");
  return (
    <Container maxWidth="xl">
      <Grid container>
        {trending?.photos?.map((image) => {
          return (
            <Grid key={image?.id} item xs={12} md={6} lg={4}>
              <div
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  src={image?.src?.original}
                  layout="fill"
                  alt="image"
                  objectFit="contain"
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Images;

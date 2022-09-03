import { Carousel } from "@mantine/carousel";
import { Paper } from "@mantine/core";
import { Layout } from "../components/Layout";

const CarouselComponent = () => {
  const colorList = ["red", "blue", "lime", "orange", "pink", "skyblue"];

  return (
    <Layout title="Carousel">
      <Carousel
        slideSize="40%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="start"
      >
        {colorList.map((color) => {
          return (
            <Carousel.Slide key={color}>
              <Paper
                p="xl"
                m="sm"
                radius="md"
                sx={{ backgroundColor: color }}
                style={{ height: "200px" }}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Layout>
  );
};

export default CarouselComponent;

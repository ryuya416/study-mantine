import { Box, Grid } from "@mantine/core";
import { Layout } from "../components/Layout";

const GroupDemo = () => {
  return (
    <Box>
      <Layout title="グループ">
        <Grid>
          <Grid.Col
            sx={{
              background: "red",
            }}
            span={4}
          >
            1
          </Grid.Col>
          <Grid.Col
            sx={{
              background: "blue",
            }}
            span={4}
          >
            2
          </Grid.Col>
          <Grid.Col
            sx={{
              background: "yellow",
            }}
            span={4}
          >
            3
          </Grid.Col>
        </Grid>
      </Layout>
      <Grid grow>
        <Grid.Col
          span={4}
          sx={{
            background: "red",
          }}
        >
          1
        </Grid.Col>
        <Grid.Col
          span={4}
          sx={{
            background: "yellow",
          }}
        >
          2
        </Grid.Col>
        <Grid.Col
          span={4}
          sx={{
            background: "peru",
          }}
        >
          3
        </Grid.Col>
        <Grid.Col
          span={4}
          sx={{
            background: "greenyellow",
          }}
        >
          4
        </Grid.Col>
        <Grid.Col
          span={4}
          sx={{
            background: "blue",
          }}
        >
          5
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default GroupDemo;

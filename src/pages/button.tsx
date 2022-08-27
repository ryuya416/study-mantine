import { Layout } from "../components/Layout";
import { Button } from "@mantine/core";
import { IconDatabase } from "@tabler/icons";

const ButtonDemo = () => {
  return (
    <Layout title="ボタン">
      <Button radius="xl" size="md">
        Settings
      </Button>
      <Button
        leftIcon={<IconDatabase />}
        variant="white"
        sx={{
          backgroundColor: "greenyellow",
        }}
      >
        Connect to database
      </Button>
      <Button.Group>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
      </Button.Group>
    </Layout>
  );
};

export default ButtonDemo;

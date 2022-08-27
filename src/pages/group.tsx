import { Button, Group } from "@mantine/core";
import { Layout } from "../components/Layout";

const GroupDemo = () => {
  return (
    <Layout title="グループ">
      <Group position="center" spacing="sm">
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
      </Group>
    </Layout>
  );
};

export default GroupDemo;

import { Stack, Button } from "@mantine/core";

const stackDemo = () => {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        height: 300,
      })}
    >
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
  );
};

export default stackDemo;

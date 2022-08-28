import {
  Checkbox,
  NativeSelect,
  PasswordInput,
  Radio,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Layout } from "../components/Layout";

const InputDemo = () => {
  return (
    <Layout title="チェックボックス">
      <Checkbox label="同意しますか？" radius="xs" size="xs" />
      <Checkbox.Group
        defaultValue={["react"]}
        orientation="vertical"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      >
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Checkbox.Group>
      <NativeSelect
        data={["React", "Vue", "Angular", "Svelte"]}
        placeholder="Pick one"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      />
      <PasswordInput
        placeholder="Password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        withAsterisk
      />
      <Text mt={24}>ラジオボタン</Text>
      <Radio.Group
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>
      <Text mt={24}>テキストエリア</Text>
      <Textarea
        placeholder="Your comment"
        label="Your comment"
        radius="md"
        withAsterisk
      />
      <Text mt={24}>テキストインプット</Text>
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
    </Layout>
  );
};

export default InputDemo;

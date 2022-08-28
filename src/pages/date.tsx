import { Calendar, DatePicker } from "@mantine/dates";
import { Layout } from "../components/Layout";
import { useState } from "react";

const Date = () => {
  const [value, setValue] = useState(null);
  return (
    <Layout title="Date">
      <DatePicker placeholder="Pick date" label="Event date" withAsterisk />
      <Calendar value={value} onChange={setValue} />
    </Layout>
  );
};

export default Date;

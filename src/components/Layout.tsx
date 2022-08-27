import { FC, ReactNode } from "react";
import Head from "next/head";
import { Box } from "@mantine/core";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = "Mantine" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        // minheight: "100vh",
        innerHeight: "100vh",
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <Box
        sx={{
          // flex: "1 1 auto",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem",
          display: "flex",
        }}
      >
        {children}
      </Box>
      <footer></footer>
    </Box>
  );
};

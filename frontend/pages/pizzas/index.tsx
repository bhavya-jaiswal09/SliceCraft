import { GetServerSideProps } from "next";
import { Box, Grid, Container } from "@mui/material";
import axios from "axios";

import PizzaCard from "../../src/components/pizzaCard";
import { Pizza } from "../../src/Types";
import Layout from "../../src/components/layout";

type HomeProps = {
  pizzas: Pizza[];
};

export default function Pizzas({ pizzas }: HomeProps) {
  return (
    <Layout title="Menu">
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Grid container spacing={4}>
          {pizzas && pizzas.length > 0 ? (
            pizzas.map((pizza) => (
              <PizzaCard info={pizza} key={pizza.id} />
            ))
          ) : (
            <Box sx={{ color: "white", padding: "40px", fontSize: "1.5rem" }}>
              No pizzas found. Check back soon!
            </Box>
          )}
        </Grid>
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const backendUrl =
      process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    const { data, status } = await axios.get(`${backendUrl}/pizzas`);

    if (status !== 200) {
      return { props: { pizzas: [] } };
    }

    return { props: { pizzas: data } };
  } catch (error) {
    console.error("Failed to fetch pizzas:", error);
    return { props: { pizzas: [] } };
  }
};

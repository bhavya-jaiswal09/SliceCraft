import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import Layout from "../../src/components/layout";
import ProfileForm from "../../src/components/profileForm";

export default function Profile() {
  const router = useRouter();
  return (
    <Layout title="Profile">
      <Container
        maxWidth="xl"
        sx={{
          alignItems: "center",
          minHeight: "calc(100vh - 87px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // gap: "10px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <ProfileForm />
      </Container>
    </Layout>
  );
}

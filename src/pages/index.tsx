import Container from "@mui/material/Container";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Container>
  );
}

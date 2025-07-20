import { Container, Box, Card, CardContent } from "@mui/material";

export const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Card elevation={3}>
          <CardContent>{children}</CardContent>
        </Card>
      </Box>
    </Container>
  );
};

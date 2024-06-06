import { Container, Text, VStack, Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useSupabaseAuth, SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Home Page</Text>
        <Text>This is a simple React app with a basic structure.</Text>
        <Box width="100%" maxW="md" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
          {!session ? (
            <SupabaseAuthUI />
          ) : (
            <VStack spacing={4}>
              <Text>You are logged in!</Text>
              <Button colorScheme="blue" width="full" onClick={logout}>Logout</Button>
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
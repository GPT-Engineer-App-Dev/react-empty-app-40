import { Container, Text, VStack, Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Home Page</Text>
        <Text>This is a simple React app with a basic structure.</Text>
        <Box width="100%" maxW="md" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
          <VStack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" width="full">Login</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Website</Heading>
        <Flex>
          <Text mx={2}>Home</Text>
          <Text mx={2}>About</Text>
          <Text mx={2}>Contact</Text>
        </Flex>
      </Flex>
      <Container centerContent maxW="container.md" minH="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading>Welcome to My Website</Heading>
          <Text>This is the main content area. Start adding your content here.</Text>
        </VStack>
      </Container>
      <Flex as="footer" bg="blue.500" color="white" p={4} justifyContent="center" alignItems="center">
        <Text>&copy; 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
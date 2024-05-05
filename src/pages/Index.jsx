import { Container, VStack, Text, Box, Image, Link, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1tZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ5NTA5MDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" mb={4} />
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate Full Stack Developer with a knack for building scalable web applications and working with cutting-edge technologies. With a background in computer science, I have a solid foundation in coding and software development.</Text>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MHx8fHwxNzE0OTUwOTA3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Project One
              </Text>
              <Text fontSize="md">An innovative project that leverages AI to enhance user experience.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvamVjdHxlbnwwfHx8fDE3MTQ5NTA5MDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Project Two
              </Text>
              <Text fontSize="md">A cloud-based solution that improves efficiency for businesses worldwide.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <VStack spacing={3}>
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="mailto:johndoe@example.com">
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

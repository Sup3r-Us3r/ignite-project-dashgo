import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mayderson Mello</Text>
          <Text color="gray.300" fontSize="small">
            maydersonmello@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Mayderson Mello" src="https://github.com/Sup3r-Us3r.png" />
    </Flex>
  );
}

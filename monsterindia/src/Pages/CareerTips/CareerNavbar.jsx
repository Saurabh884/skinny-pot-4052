import React from 'react'
import {Box, Flex, HStack, Text} from '@chakra-ui/react'

const CareerNavbar = () => {
  return (
   <Box width="100%">
      <Box>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <Text><h3>JOB SEARCH</h3></Text>
        </HStack>
        <HStack>
          <Text>WORK FROM HOME JOBS</Text>
        </HStack>
        </Flex>
      </Box>
   </Box>
  )
}

export default CareerNavbar
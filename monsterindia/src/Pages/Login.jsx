// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
//   Input,
// } from "@chakra-ui/react";
// import { Navigate } from "react-router-dom";

// export function Login() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     alert("Login succesfull");
//     navigate("./");
//     window.location.reload();
//   };

//   ////

//   return (
//     <>
//       <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         Login
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//         // className="main"
//         style={{ border: "10px solid blue" }}
//       >
//         <DrawerOverlay />
//         <DrawerContent className="main">
//           <h1>Welcome!</h1>

//           <DrawerCloseButton />
//           <DrawerHeader>Please Login to continue</DrawerHeader>

//           <DrawerBody style={{ border: "1px solid black" }}>
//             <Input placeholder="Enter Mobile " />
//             <Button colorScheme="teal" marginTop="10px" onClick={handleLogin}>
//               Continue
//             </Button>
//           </DrawerBody>
//           {/* ////////// */}
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

//////////
//////////
//////////
//////////

/////////*****************************************************************************************************************************************************************************************************************

//////////
//////////
//////////

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  const loginHandler = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/", { replace: true });
        } else {
          //err
        }
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        style={{ border: "10px solid black" }}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} margin-left={"40px"} className="head">
            Welcome!
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Log in using your Monster credentials{" "}
            <Link color={"blue.400"}></Link>
          </Text>
        </Stack>
        <Box
        // rounded={"lg"}
        // bg={useColorModeValue("white", "gray.700")}
        // boxShadow={"lg"}
        // p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              {/* <FormLabel>Username</FormLabel> */}
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="E-mail/Mobile"
              />
            </FormControl>

            <FormControl id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={"blue.400"}>Forgot password</Link>
              </Stack>
              <Button
                bg={"purple.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={loginHandler}
                isLoading={isLoading}
              >
                Login
              </Button>
            </Stack>

            <Stack pt={6}>
              <div>
                <span>Or,</span>{" "}
                <span style={{ color: "blue", cursor: "pointer" }}>
                  {" "}
                  Login via OTP
                </span>
              </div>

              <h1>OR</h1>

              {/* <Text align={"center"}>
                  <RouterLink to="/signup" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text> */}
            </Stack>
          </Stack>
          <Box class="reg" border="1px solid grey" >
            <Heading as="h3" size="md">
              New to Monster?
            </Heading>
            <Text fontSize="xl" marginTop="10px" >Create your profile now and be visible to the top recruiters in the world</Text>
            <Button colorScheme="purple" marginTop="10px" marginBottom="10px"
          // class="btn"
          >Register with us</Button>
          </Box>
         
        </Box>
      </Stack>
    </Flex>
  );
}

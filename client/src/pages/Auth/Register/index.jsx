import React from "react";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchRegister } from "../../../api";
import { useAuthContext } from "../../../contexts/AuthContext";
function Register() {
    const { login } = useAuthContext();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const registerResponse = await fetchRegister({
                    email: values.email,
                    password: values.password,
                });
                login(registerResponse);
            } catch (error) {
                bag.setErrors({ general: error.response.data.message });
            }
        },
    });
    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
                <Box pt={10}>
                    <Box textAlign="center">
                        <Heading>Register Now</Heading>
                    </Box>
                    <Box my={5}>
                        {formik.errors.general && (
                            <Alert status="error">
                                {formik.errors.general}
                            </Alert>
                        )}
                    </Box>
                    <Box textAlign="left" my={5}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={
                                        formik.touched.email &&
                                        formik.errors.email
                                    }
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isInvalid={
                                        formik.touched.password &&
                                        formik.errors.password
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password Confirm</FormLabel>
                                <Input
                                    name="passwordConfirm"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordConfirm}
                                    isInvalid={
                                        formik.touched.passwordConfirm &&
                                        formik.errors.passwordConfirm
                                    }
                                />
                            </FormControl>
                            <Button
                                mt={4}
                                width="full"
                                colorScheme="pink"
                                variant="outline"
                                type="submit"
                            >
                                Register
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export default Register;

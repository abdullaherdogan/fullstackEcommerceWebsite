import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import React from "react";
import addSchema from "./validations";
import { message } from "antd";
import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "react-query";
function NewProduct() {
    const queryClient = useQueryClient();
    const newProductMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries("admin:products"),
    });
    const handleSubmit = async (values, bag) => {
        message.loading({ content: "Loading...", key: "product_create" });
        const newValues = {
            ...values,
            photos: JSON.stringify(values.photos),
        };
        newProductMutation.mutate(newValues, {
            onSuccess: () => {
                message.success("Product Added");
            },
        });
    };
    return (
        <Formik
            initialValues={{
                title: "",
                description: "",
                price: "",
                photos: [],
            }}
            onSubmit={handleSubmit}
            validationSchema={addSchema}
        >
            {({
                handleSubmit,
                errors,
                touched,
                handleChange,
                handleBlur,
                values,
                isSubmitting,
            }) => (
                <>
                    <Box>
                        <Box my={5} textAlign="left">
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        disabled={isSubmitting}
                                        isInvalid={
                                            touched.title && errors.title
                                        }
                                    />
                                    {touched.title && errors.title && (
                                        <Text color="red">{errors.title}</Text>
                                    )}
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        disabled={isSubmitting}
                                        isInvalid={
                                            touched.description &&
                                            errors.description
                                        }
                                    />
                                    {touched.description &&
                                        errors.description && (
                                            <Text color="red">
                                                {errors.description}
                                            </Text>
                                        )}
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Price</FormLabel>
                                    <Input
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        disabled={isSubmitting}
                                        isInvalid={
                                            touched.price && errors.price
                                        }
                                    />
                                    {touched.price && errors.price && (
                                        <Text color="red">{errors.price}</Text>
                                    )}
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Photos</FormLabel>
                                    <FieldArray
                                        name="photos"
                                        render={(arrayHelpers) => (
                                            <div>
                                                {values.photos &&
                                                    values.photos.map(
                                                        (photo, i) => (
                                                            <div key={i}>
                                                                <Input
                                                                    name={`photos.${i}`}
                                                                    value={
                                                                        photo
                                                                    }
                                                                    disabled={
                                                                        isSubmitting
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    width="3xl"
                                                                />
                                                                <Button
                                                                    type="button"
                                                                    colorScheme="red"
                                                                    onClick={() =>
                                                                        arrayHelpers.remove(
                                                                            i
                                                                        )
                                                                    }
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </div>
                                                        )
                                                    )}
                                                <Button
                                                    colorScheme="blue"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        arrayHelpers.push("")
                                                    }
                                                >
                                                    Add a Photo Url
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </FormControl>
                                <Box display="flex" justifyContent="flex-end">
                                    <Button
                                        type="submit"
                                        colorScheme="whatsapp"
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </>
            )}
        </Formik>
    );
}

export default NewProduct;

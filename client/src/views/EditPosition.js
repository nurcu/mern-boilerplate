import {
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    FormHelperText,
    Button,
    useToast
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PositionDataService from "../services/position.service"


export default function EditPosition(props) {
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset } = useForm();
    const toast = useToast();

    // behavior
    const loc = props.location.pathname;
    const id = loc.lastIndexOf('/') === 0 ? null : loc.substring(loc.lastIndexOf('/') + 1);
    // user state for form
    const [position, setPosition] = useState();


    // effect runs on component mount
    useEffect(() => {
        if (id) {
            PositionDataService.get(id)
                .then(
                    res => {
                        setPosition(res.data.data);
                    }
                ).catch(
                    error => console.log(error)
                );
        }
        else {
            setPosition(
                {
                    portfolio: "",
                    protocol: "",
                    asset: "",
                    assetName: "",
                    assetType: "token"
                }
            );
        }
    }, [id]);

    // effect runs when user state is updated
    useEffect(() => {
        reset(position);
    }, [position, reset]);

    const onSubmit = (data) => {
        if (id) {
            PositionDataService.update(id, data)
            .then(res => {
                if (res.data && res.data.success) {
                    toast({title: "Record updated", status: "success", duration: 3000, isClosable: true});
                } else {
                    toast({description: res.data.message, status: "warning", duration: 3000, isClosable: true});
                    console.error(res.data);
                }
            }).catch(err =>
                {
                    if (err.response && err.response.data){
                        toast({description: err.response.data.message, status: "error", duration: 3000, isClosable: true});
                    }
                    console.error(err);
                });
        }
        else {
            PositionDataService.create(data)
            .then(res => {
                if (res.data && res.data.success) {
                    toast({title: "Record created", status: "success", duration: 3000, isClosable: true});
                } else {
                    toast({description: res.data.message, status: "warning", duration: 3000, isClosable: true});
                    console.error(res.data);
                }
            }).catch(err =>
                {
                    if (err.response && err.response.data){
                        toast({description: err.response.data.message, status: "error", duration: 3000, isClosable: true});
                    }
                    console.error(err);
                });
        }
        props.history.push('/positions');
    }

    return (
        <div>
            {position &&
                <VStack>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="portfolio" isRequired>
                            <FormLabel>portfolio</FormLabel>
                            <Input name="portfolio" type="text" {...register("portfolio", { required: "Please enter portfolio" })} placeholder="Portfolio" />
                            <FormHelperText>portfolio of the position.</FormHelperText>
                        </FormControl>
                        <FormControl id="protocol">
                            <FormLabel>protocol</FormLabel>
                            <Input name="protocol" type="text" {...register("protocol", { required: "Please enter protocol" })} placeholder="protocol" />
                            <FormHelperText>protocol of the position.</FormHelperText>
                        </FormControl>
                        <FormControl id="asset">
                            <FormLabel>asset</FormLabel>
                            <Input name="asset" type="text" {...register("asset", { required: "Please enter asset" })} placeholder="asset" />
                            <FormHelperText>asset of the position.</FormHelperText>
                        </FormControl>
                        <FormControl id="assetName">
                            <FormLabel>assetName</FormLabel>
                            <Input name="assetName" type="text" {...register("assetName", { required: "Please enter assetName" })} placeholder="assetName" />
                            <FormHelperText>assetName of the position.</FormHelperText>
                        </FormControl>
                        <FormControl id='assetType'>
                            <FormLabel as='legend'>Asset Type</FormLabel>
                            <RadioGroup>
                                <HStack spacing='24px'>
                                    <Radio value='token' {...register("assetType")}>Token</Radio>
                                    <Radio value='pool' {...register("assetType")}>Pool</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText>Select the asset type.</FormHelperText>
                        </FormControl>
                        <div className="form-group">
                            <Button
                                borderRadius="md"
                                bg="cyan.600"
                                _hover={{ bg: "cyan.200" }}
                                variant="ghost"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                borderRadius="md"
                                bg="cyan.300"
                                _hover={{ bg: "cyan.100" }}
                                variant="ghost"
                                onClick={() => reset()}
                            >
                                Reset
                            </Button>
                        </div>
                    </form>
                </VStack>
            }
            {!position &&
                <div className="text-center p-3">
                    <span className="spinner-border spinner-border-lg align-center"></span>
                </div>
            }
        </div>
    )
}
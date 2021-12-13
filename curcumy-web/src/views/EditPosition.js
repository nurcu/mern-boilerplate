import React, { Component } from "react";
import PositionDataService from "../services/position.service"
import {Link} from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    HStack,
   // FormErrorMessage,
    FormHelperText,
    Button
} from '@chakra-ui/react';

class EditPosition extends Component {
    constructor(props) {
        super(props);

        // setting up function
        this.onChangePortfolio = this.onChangePortfolio.bind(this);
        this.onChangeProtocol = this.onChangeProtocol.bind(this);
        this.onChangeAsset = this.onChangeAsset.bind(this);
        this.onChangeAssetName = this.onChangeAssetName.bind(this);
        this.onChangeAssetType = this.onChangeAssetType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // setting up state
        this.state = {
            portfolio: '',
            protocol: '',
            asset: '',
            assetName: '',
            assetType: ''
        }
    }

    onChangePortfolio(e) {
        this.setState({ portfolio: e.target.value })
    }

    onChangeProtocol(e) {
        this.setState({ protocol: e.target.value })
    }

    onChangeAsset(e) {
        this.setState({ asset: e.target.value })
    }

    onChangeAssetName(e) {
        this.setState({ assetName: e.target.value })
    }

    onChangeAssetType(e) {
        this.setState({ assetType: e.target.value })
    }

    componentDidMount() {
        if (this.props.match.params) {
            PositionDataService.get(this.props.match.params.id)
                .then(res => {
                    this.setState(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }



    onSubmit(e) {
        e.preventDefault();

        if (this.props.match.params) {

            PositionDataService.update(this.props.match.params.id, this.state)
            .then(res => {
                if (res.status === 500) {
                    console.log(res.data);
                } else if (res.status === 200 && res.data.success === true) {
                    console.log(res.data.id);
                } else if (res.status === 200 && res.data.success !== true) {
                    console.log("Error updated new data because : " + res.data.error);
                } else {
                    console.log("Server error with : " + res.data);
                }
            }).catch(err => console.warn(err));
        }
        else {
            PositionDataService.create(this.state)
                .then(response => {
                    if (response.status === 500) {
                        console.log(response.data);
                    } else if (response.status === 200 && response.data.success === true) {
                        console.log(response.data.id);
                    } else if (response.status === 200 && response.data.success !== true) {
                        console.log("Error inserted new data because : " + response.data.error);
                    } else {
                        console.log("Server error with : " + response.data);
                    }
                })
                .catch(err => console.warn(err));
        }
        this.props.history.push('/positions');
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <FormControl id="Portfolio">
                    <FormLabel>Portfolio :</FormLabel>
                    <Input type="text" value={this.state.portfolio} onChange={this.onChangePortfolio} />
                </FormControl>

                <FormControl id="Protocol">
                    <FormLabel>Protocol :</FormLabel>
                    <Input type="text" value={this.state.protocol} onChange={this.onChangeProtocol} />
                </FormControl>

                <FormControl id="Asset">
                    <FormLabel>Asset :</FormLabel>
                    <Input type="text" value={this.state.asset} onChange={this.onChangeAsset} />
                </FormControl>

                <FormControl id="AssetName">
                    <FormLabel>Asset Name :</FormLabel>
                    <Input type="text" value={this.state.assetName} onChange={this.onChangeAssetName} />
                </FormControl>

                <FormControl>
                    <FormLabel>Asset Type :</FormLabel>
                    <RadioGroup defaultValue='Itachi'>
                        <HStack spacing='24px'>
                            <Radio value='token'>Token</Radio>
                            <Radio value='pool'>Pool</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormHelperText>Select if the asset is a simple token or a token pool / liquidity pool.</FormHelperText>
                </FormControl>
                    <Button size="lg" type="submit">Save</Button>
                    <Link to={"/positions"}>Cancel</Link>
            </form>
        );
    }
}

export default EditPosition
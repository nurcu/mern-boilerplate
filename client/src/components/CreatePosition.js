import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PositionDataService from "../services/position.service"
import {Link} from "react-router-dom";

class CreatePosition extends Component {
    constructor(props) {
        super(props);
        this.saveLabel = "Add";

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
        this.setState({portfolio: e.target.value})
    }

    onChangeProtocol(e) {
        this.setState({protocol: e.target.value})
    }

    onChangeAsset(e) {
        this.setState({asset: e.target.value})
    }

    onChangeAssetName(e) {
        this.setState({assetName: e.target.value})
    }

    onChangeAssetType(e) {
        this.setState({assetType: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        PositionDataService.create(this.state).
        then(response => {
            if (response.status === 500) {
                console.log(response.data);
            } else if (response.status === 200 && response.data.success === true) {
                console.log(response.data.id);
            } else if (response.status === 200 && response.data.success !== true) {
                console.log("Error inserted new data because : "+response.data.error);
            } else {
                console.log("Server error with : "+response.data);
            }
        })
         .catch(err => console.warn(err));

        this.setState({
            portfolio: '',
            protocol: '',
            asset: '',
            assetName: '',
            assetType: ''
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Fullname">
                        <Form.Label>Portfolio :</Form.Label>
                        <Form.Control type="text" value={this.state.portfolio} onChange={this.onChangePortfolio} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Protocol :</Form.Label>
                        <Form.Control type="text" value={this.state.protocol} onChange={this.onChangeProtocol} />
                    </Form.Group>

                    <Form.Group controlId="NRP">
                        <Form.Label>Asset :</Form.Label>
                        <Form.Control type="text" value={this.state.asset} onChange={this.onChangeAsset} />
                    </Form.Group>

                    <Form.Group controlId="Username">
                        <Form.Label>Asset Name :</Form.Label>
                        <Form.Control type="text" value={this.state.assetName} onChange={this.onChangeAssetName} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Asset Type :</Form.Label>
                        <Form.Control as="select" className="custom-select select2" value={this.state.assetType} onChange={this.onChangeAssetType}>
                            <option value=""></option>
                            <option value="token">Token</option>
                            <option value="pool">Pool</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" size="lg" block="block" type="submit">{this.saveLabel}}</Button>
                    <Link to={"/list-position"} className="btn btn-danger btn-block">Cancel</Link>
                </Form>

            </div>
        );
    }
}

export default CreatePosition
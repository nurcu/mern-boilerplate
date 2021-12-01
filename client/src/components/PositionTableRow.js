import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PositionDataService from "../services/position.service";

class PositionTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePosition = this.deletePosition.bind(this)
    }

    deletePosition() {
        PositionDataService.delete(this.props.obj._id)
            .then(res => {
                console.log('Position Account successfully deleted with : '+res.data);
            })
            .catch(err => console.warn(err));
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.portfolio}</td>
                <td>{this.props.obj.protocol}</td>
                <td>{this.props.obj.asset}</td>
                <td>{this.props.obj.assetName}</td>
                <td>{this.props.obj.assetType}</td>
                <td>
                    <Link className="btn btn-sm btn-primary" to={"/edit-position/"+this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deletePosition} size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
}

export default PositionTableRow
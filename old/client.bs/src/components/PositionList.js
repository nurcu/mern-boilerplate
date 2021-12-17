import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import PositionTableRow from "./PositionTableRow";
import PositionDataService from "../services/position.service"

class PositionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        PositionDataService.getAll()
            .then(res => {
                this.setState({
                    rows: res.data.data
                });
            })
            .catch(err => console.log(err))
    }

    DataTable() {
        return this.state.rows.map((res, i) => {
            return <PositionTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Portfolio</th>
                            <th>Protocol</th>
                            <th>AssetName</th>
                            <th>AssetType</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default PositionList
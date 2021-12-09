import React, { Component } from "react";
import PositionDataService from "../services/position.service";
import DataTable from "../components/DataTable";


class Positions extends Component {
  constructor(props) {
      super(props); 
      this.columns = [
        {
          Header: "Portfolio",
          accessor: "portfolio"
        },
        {
          Header: "Protocol",
          accessor: "protocol"
        },
        {
          Header: "AssetName",
          accessor: "assetName",
        },
        {
          Header: "AssetType",
          accessor: "assetType"
        }
      ];
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

  render() {
      return (
        <DataTable columns={this.columns} data={this.state.rows}/>
      );
  }
}

export default Positions;
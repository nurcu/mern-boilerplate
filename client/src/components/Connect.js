import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import {RiWallet3Line} from "react-icons/ri"

export default class Connect extends Component {
  render(){
      return <Button><RiWallet3Line/>&emsp;Connect your wallet</Button>;
  }
}
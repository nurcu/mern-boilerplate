import React, { Component } from "react";
import { Button, } from "react-bootstrap";

export default class IconButton extends Component {
    render (){
        const {icon, label} = this.props;
        return (
                <Button className={{'borderRadius':'20px', 'width': '200px'}}>
                {icon}&emsp;{label} 
                </Button>  
            );
    }
}
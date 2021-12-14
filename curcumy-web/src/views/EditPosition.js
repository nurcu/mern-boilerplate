import {
    HStack,
    Stack,
    Stat,
    StatHelpText,
    StatLabel
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PositionDataService from "../services/position.service"


export default function EditPosition(props) {
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset } = useForm();

    // user state for form
    const [position, setPosition] = useState(null);

    const retrieveData = () => {
        if (props.match.params && props.match.params.id) {
            if (props.match.params.id !== "*") {
                return PositionDataService.get(props.match.params.id);
            }
        }
    }

    // effect runs on component mount
    useEffect(() => {
        retrieveData()
            .then(res => {
                setPosition(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(position);
    }, [position]);

    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">React Hook Form - Set Form Values in useEffect Example</h5>
            <div className="card-body">
                {position &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group col-5">
                            <label>Portfolio</label>
                            <input name="portfolio" type="text" {...register('portfolio')} className="form-control" />
                        </div>
                        <div className="form-group col-5">
                            <label>Protocol</label>
                            <input name="protocol" type="text" {...register('protocol')} className="form-control" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>Asset</label>
                                <input name="asset" type="text" {...register('asset')} className="form-control" />
                            </div>
                            <div className="form-group col-5">
                                <label>Asset name</label>
                                <input name="assetName" type="text" {...register('assetName')} className="form-control" />
                            </div>
                        </div>
                        <div className="form-group col">
                            <label>Asset Type</label>
                            <select name="title" {...register('assetType')} className="form-control">
                                <option value=""></option>
                                <option value="token">Token</option>
                                <option value="pool">Pool</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-1">Submit</button>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                }
                {!position &&
                    <div className="text-center p-3">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                    </div>
                }
            </div>
        </div>
    )
}
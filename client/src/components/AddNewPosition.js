import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import PositionDataService from "../services/position.service";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import PositionFormField from "./UI/PositionFormField";
import SelectAssetType from "./UI/SelectAssetType";

const AddPosition = () => {
    const { addPosition } = useContext(GlobalContext);
    const history = useHistory();
    const [isFormValid, setIsFormValid] = useState(false);

    //position title
    const [portfolio, dispatchPortfolio] = useReducer(
        (state, action) => {
            if(action.type === "POSITION_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }
            
            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //position asset
    const [protocol, dispatchProtocol] = useReducer(
        (state, action) => {
            if(action.type === "POSITION_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //positionasset
    const [asset, dispatchAsset] = useReducer(
        (state, action) => {
            if(action.type === "POSITION_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //positionassetname
    const [assetName, dispatchAssetName] = useReducer(
        (state, action) => {
            if(action.type === "POSITION_INPUT"){
                return {value: action.val, isValid: true}
            }
            return {value: "", isValid: true}
        },
        {value: "", isValid: true}
    )

    //assetType
    const [assetType, dispatchAssetType] = useReducer(
        (state, action) => {
            if(action.type === 'POSITION_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )

    const { isValid: portfolioIsValid} = portfolio;
    const { isValid: protocolIsValid} = protocol;
    const { isValid: assetIsValid} = asset;
    const { isValid: assetNameIsValid} = assetName;
    const { isValid: assetTypeIsValid} = assetType;

    //useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                portfolioIsValid &&
                protocolIsValid &&
                assetIsValid &&
                assetNameIsValid &&
                assetTypeIsValid !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [portfolioIsValid, protocolIsValid, assetIsValid, assetNameIsValid, assetTypeIsValid]);


    const onSubmit = function (e) {
        e.preventDefault()
        if(isFormValid !== true) return

        const newPosition = {
            portfolio: portfolio.value,
            protocol: protocol.value,
            asset: asset.value,
            assetName: assetName.value,
            assetType: assetType.value,
        };

        PositionDataService.create(newPosition);
        addPosition(newPosition);
        history.push("/");
    };

    const onPortfolioChange = function (e) {
        dispatchPortfolio({type: "POSITION_INPUT", val: e.target.value} )
    };

    const onProtocolChange = function (e) {
        dispatchProtocol({type: 'POSITION_INPUT', val: e.target.value});
    };

    const onAssetChange = function (e) {
        dispatchAsset({type: "POSITION_INPUT", val: e.target.value})
        
    };

    const onAssetNameChange = function (e) {
        dispatchAssetName({type: "POSITION_INPUT", val: e.target.value})
        
    };

    const onAssetTypeChange = function (e) {
        dispatchAssetType({type: "POSITION_INPUT", val: e.target.value});
    };

    return (
        <form onSubmit={onSubmit}>
            <PositionFormField
                label="Portfolio"
                value={portfolio.value}
                type="text"
                placeholder="enter position portfolio"
                onChange={onPortfolioChange}
                isValid={portfolio.isValid === false}
            />

            <PositionFormField
                label="Protocol"
                value={protocol.value}
                type="text"
                placeholder="enter position protocol"
                onChange={onProtocolChange}
                isValid={protocol.isValid === false}
            />

            <PositionFormField
                label="Asset"
                value={asset.value}
                type="text"
                placeholder="enter position asset"
                onChange={onAssetChange}
                isValid={asset.isValid === false}
            />

            <PositionFormField
                label="AssetName"
                value={assetName.value}
                type="text"
                placeholder="enter position asset name"
                onChange={onAssetNameChange}
                isValid={assetName.isValid === false}
            />

            <SelectAssetType onChange={onAssetTypeChange}/>

            <div>
                <Button type="submit" isValid={isFormValid}>
                    Submit
                </Button>
                <Link to="/">
                    <GiCancel />Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddPosition;

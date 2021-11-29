import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/EditPosition/EditPosition.module.css';
import { BsPencil } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import Button from  './UI/Button';
import UserFormField from './UI/PositionFormField';
import Axios from "axios";
import SelectAssetType from './UI/SelectAssetType';

const EditPosition = (props) => {
    const [selectedPosition, setSelectedPosition] = useState({
        portfolio: '',
        protocol: '',
        asset: '',
        assetName: '',
        assetType: ''
    })
    const { positions, editPosition } = useContext(GlobalContext);
    const history = useHistory();
    const currentPositionId = props.match.params.id;

    useEffect(() => {
        const positionId = currentPositionId;
        const selectedPosition = positions.find(position => position._id === positionId)
        setSelectedPosition(selectedPosition);
    }, [currentPositionId, positions])

    const updatePosition = function (id) {
        const {portfolio, protocol, asset, assetName, assetType} = selectedPosition

        Axios.put("http://localhost:4000/positions", {
            id: id,
            portfolio: portfolio,
            protocol: protocol,
            asset: asset,
            assetName: assetName,
            assetType: assetType
        });
    };

    const onSubmit = function(e){

        editPosition(selectedPosition);
        history.push('/');
        updatePosition(currentPositionId);
    }

    const onPortfolioChange = function(e){
        setSelectedPosition({...selectedPosition,[e.target.name]: e.target.value})
    }

    const onProtocolChange = function(e){
        setSelectedPosition({...selectedPosition,[e.target.name]: e.target.value})
    }

    const onAssetChange = function(e){
        setSelectedPosition({...selectedPosition,[e.target.name]: e.target.value})
    }

    const onAssetNameChange = function(e){
        setSelectedPosition({...selectedPosition,[e.target.name]: e.target.value})
    }

    const onAssetTypeChange = function(e){
        setSelectedPosition({...selectedPosition,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={onSubmit} className={styles.form}>
            <UserFormField
                label="Position Title"
                name="portfolio"
                value={selectedPosition.portfolio}
                type="text"
                placeholder="enter position portfolio"
                onChange={onPortfolioChange}
            />

            <UserFormField
                label="Protocol"
                name="protocol"
                value={selectedPosition.protocol}
                type="text"
                placeholder="enter position protocol"
                onChange={onProtocolChange}

            />

            <UserFormField
                label="Asset"
                name="asset"
                value={selectedPosition.asset}
                type="text"
                placeholder="enter position asset"
                onChange={onAssetChange}

            />
            <UserFormField
                label="AssetName"
                name="assetName"
                value={selectedPosition.assetName}
                type="text"
                placeholder="enter position asset name"
                onChange={onAssetNameChange}

            />
            
            <SelectAssetType name="assetType" onChange={onAssetTypeChange} value={selectedPosition.assetType}/>

            <div className={styles.buttons}>
                <Button type="submit" className={styles.edit_position}> <BsPencil/> Done</Button>
                <Link to="/" className={styles.link}> <GiCancel/> Cancel</Link>
            </div>
        </form>
    )
}

export default EditPosition
import React from 'react';
import styles from '../../styles/UI/SelectAssetType/SelectAssetType.module.css'

const SelectAssetType = (props) => {
    return(
        <article className={styles.select}>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Asset Type
                    </option>
                    <option selected value="token">Token</option>
                    <option value="pool">Pool</option>
                 
                </select>
            </article>
    )
}

export default SelectAssetType;
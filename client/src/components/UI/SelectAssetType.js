import React from 'react';

const SelectAssetType = (props) => {
    return(
        <article>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Asset Type
                    </option>
                    <option value="token">Token</option>
                    <option value="pool">Pool</option>
                 
                </select>
            </article>
    )
}

export default SelectAssetType;
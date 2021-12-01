import React, { createContext, useReducer, useEffect } from 'react';
import {AppReducer} from './AppReducer';
import PositionDataService from "../../services/position.service";

//initial state;
const initialState = {
    positions: []
}

// create Context
export const GlobalContext = createContext(initialState);

// provider component;
export const GlobalProvider = (({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        useEffect(() => {
            PositionDataService.getAll().then((response) => {
                if (response.status == 200){
                    dispatch({type: 'INITIAL_DATA', payload: response.data.data});
                }
            });
        }, []);

    //actions
    const removePosition = (id) => {
        dispatch({
            type: 'REMOVE_POSITION',
            payload: id
        })

    }

    const addPosition = (position) => {
        dispatch({
            type: 'ADD_POSITION',
            payload: position
        })

        setTimeout(() => {
            PositionDataService.getAll().then((response) => {
                if (response.status == 200){
                    dispatch({type: 'INITIAL_DATA', payload: response.data.data});
                }
            });  
        },500)
    }

    const editPosition = (position) => {
        dispatch({
            type: 'EDIT_POSITION',
            payload: position,
        })
        
    }
     
    return(
        <GlobalContext.Provider value={{
            positions: state.positions,
            removePosition,
            addPosition,
            editPosition,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}) ;
import React, { useReducer} from 'react'

export const DesignContext=React.createContext()
const initState={
    isDesign:"default"
}
const designReducer=(state,action)=>{
    switch(action.type){
        case "Next":{
            return{
                ...state,
                isDesign:"green"
            }
        }
        case "Review":{
            return{
            ...state,
            isDesign:"yellow"
            }
        }
        case "Dump":{
            return{
            ...state,
            isDesign:"white"
            }
        }
        default:{
            return {
                ...state,
                isDesign:"#f0f0f0"
                };
        }
    }
}
function DesignContextProvider({children}){
    const [state, dispatch]=useReducer(designReducer, initState)
   
    return (
        <DesignContext.Provider value={[state, dispatch]}>
            {children}
        </DesignContext.Provider>
    );
}
export default DesignContextProvider;
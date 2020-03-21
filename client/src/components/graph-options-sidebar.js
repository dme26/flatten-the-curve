import React, { useContext } from 'react'
import {GlobalStateContext} from "../context/GlobalContextProvider"
import styled from '@emotion/styled'

const GraphOptionsSideBar = ({field = 'confirmed', scale, scaleFn, checkCountries = [], checkFn }) => {
    const {cumulative_confirmed, cumulative_deaths} = useContext(GlobalStateContext)
    
    const countries_avaliable = (field == 'confirmed' ? cumulative_confirmed : cumulative_deaths).slice(0,35)
    
    const SideBar = styled('div')`
        .field{
            width: 100%;
        }
        .label{
            padding-top: 7px;
            padding-right: 10px;
        }
        .check-container{
            
            .checkbox{
                padding: 0 7px 7px 0;
                input{
                    margin-left: 5px;
                }
            }
        }
        
    `
    console.log(checkCountries)
    return (
        <SideBar>
            <div className="field is-horizontal">
                <label class="label">Scale</label>
                <div className="control">
                    <div className="select">
                    <select value={scale} onChange={scaleFn}>
                        <option value='linear'>Linear</option>
                        <option value='log'>Log</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="check-container">
                {
                    countries_avaliable.map(c => (
                        <label class="checkbox">
                            <input type="checkbox" name={c.country_name} value={c.country_name} defaultChecked={checkCountries.includes(c.country_name)} onChange={checkFn}/>
                                {c.country_name}
                        </label>
                    )
                    
                    )
                }
                </div>
            </div>
            
            
        
        
    </SideBar>)
}
export default GraphOptionsSideBar

import React, { useState } from "react";
import CountryData from '../data/data.json';
import { splitCommasPopulationData } from "../utils/splitCommasPopulationData";
import { filterDataByNameAndRegion } from "../utils/Selection/filterDataByNameAndRegion";
import '../styles/CountrySelect.css';
import styled from "styled-components";

const CardComponent = styled.div`
    cursor: pointer;
    border-radius: 10px;
    background-color: ${(props) => props.theme.input};
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.shadows};
    z-index: 0.1;

    &:hover {
        transform: scale(1.1);
    }
`
const IconSearch = styled.i`
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.shadows};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`
const Image = styled.img`
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.shadows};
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
` 
const InputSearch = styled.input`
    box-shadow: 1px 1px 1px ${(props) => props.theme.shadows};  
    border: none;
    padding: 13px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-right: 10rem;

    @media only screen and (max-width: 425px) {
        padding-right: 0;
        width: 100%;
     }
`
const CountrySelect = ({ goForward }) => {

    const [searchByName, setSearchByName] = useState("");
    const [searchByRegion, setSearchByRegion] = useState("");

    const filteredData = filterDataByNameAndRegion(searchByName, searchByRegion, CountryData);

    return (
        <div className="">
            <div className="inputs"> 
                <div className="input-with-icon">
                    <IconSearch className="icon-search bi bi-search"></IconSearch>
                    <InputSearch placeholder="Search for a country... " autoFocus type="text" onChange={(e) => setSearchByName(e.target.value)}/>
                </div>
                <input placeholder="Filter by Region"  className="input-search-region" list="regions" onChange={(e) => setSearchByRegion(e.target.value)}/>
                    <datalist className="list" name="regions" id="regions">
                        <option value="Africa"/>
                        <option value="America"/>
                        <option value="Asia"/>
                        <option value="Europe"/>
                        <option value="Oceania"/>
                    </datalist> 
            </div>
        <div className="grid-style">
            {filteredData.map(item => {
            return (
                <CardComponent onClick={(e) => goForward(item.name)} key={item.alpha2Code}>
                    <div className="image-content">
                        <Image src={item.flags.svg}></Image>
                    </div>
                    <div className="part-2-content">
                        <h3>{item.name}</h3>
                        <p className="data-value"><strong>Population:</strong> <span>{splitCommasPopulationData(item.population)}</span></p>
                        <p className="data-value"><strong>Region:</strong> <span>{item.region}</span></p>
                        <p className="data-value"><strong>Captiol:</strong> <span>{item.capital}</span></p>
                    </div>
                </CardComponent>
                   )
                })}
            </div>
        </div>
    )
}

export default CountrySelect;
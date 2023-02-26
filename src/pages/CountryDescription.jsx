import React from "react";
import CountryData from '../data/data.json';
import { findCountry } from "../utils/Description/findCountry";
import { splitCommasPopulationData } from "../utils/splitCommasPopulationData";
import { splitBorderCountries } from "../utils/Description/splitBorderCountries";
import "../styles/CountryDescription.css";

const CountryDescription = ({ country, goBack }) => {

    const lookingForCountry = findCountry(CountryData, country);
    const populationValue = splitCommasPopulationData(lookingForCountry.population);
    
    return (
                <div className="container">
                    <div className="go-back">     
                        <button onClick={goBack} className="button-go-back"><i className="arrow bi bi-arrow-left"></i>Back</button> 
                    </div>
                    <div className="flex-2">
                        <div className="grid-1">
                            <img className="flag-2" src={lookingForCountry.flags.svg}></img>
                        </div>
                        <div className="description-2">
                            <div className="description-container">
                                <h2>{lookingForCountry.name}</h2>
                                <div className="divide-data">
                                    <div className="first-half">
                                        <p><strong>Native Name:</strong> <span>{lookingForCountry.nativeName}</span></p>
                                        <p><strong>Population:</strong> <span>{populationValue}</span></p>
                                        <p><strong>Region:</strong> <span>{lookingForCountry.region}</span></p>
                                        <p><strong>Sub Region:</strong> <span>{lookingForCountry.subregion}</span></p>
                                        <p><strong>Capital:</strong> <span>{lookingForCountry.capital}</span></p>
                                    </div>
                                    <div className="second-half">
                                        <p><strong>Top Level Domain:</strong> <span>{lookingForCountry.topLevelDomain?.[0]}</span></p>
                                        <p><strong>Currencies:</strong> <span>{lookingForCountry.currencies?.[0].name}</span></p>
                                        <p><strong>Language:</strong> {
                                            lookingForCountry.languages.map((item, index) => {
                                                return (
                                                    index === 0
                                                    ?
                                                    <span key={item.iso639_1}> {item.name}</span>
                                                    :
                                                    <span key={item.iso639_1}>, {item.name}</span>
                                                )
                                            })
                                        }
                                        </p>
                                    </div>
                                </div>
                                    <div className="border-style">
                                        <p className="borders-label"><strong>Border Countries:</strong></p>
                                        {lookingForCountry.borders 
                                        ?
                                            lookingForCountry.borders.map((item,index) => {
                                                return (
                                                    <div key={index} className="border-buttons">
                                                    <button className="borders">{splitBorderCountries(CountryData, item)}</button>       
                                                    </div>
                                                )
                                            })
                                        :
                                        <p className="not-available-data">N/A</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }

export default CountryDescription;
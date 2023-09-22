import React, { useState, useEffect } from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { Error } from '../../components/Error/Error'
import './Characters.css'
import pictures from '../../img'
//import { Footer } from '../../components/Footer'

export const Characters = () => {

    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filtersDisplay , setFiltersDisplay] = useState(false)

    // FUNCTION WITH useEffect TO DO A FETCH REQUEST TO THE API AND UPDATE THE data STATE
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((response) => {
                setData(response.results)
                setOriginalData(response.results)
            }) 
            .catch((error) => console.error('Error:', error));
    }, []);

    // FUNCTION TO FILTER CHARACTERS
    const filterCharacters = (e) => {
        const filterValue = e.target.id;
        let updatedFilters;
    
        if (e.target.checked) {
            // ADD FILTER
            updatedFilters = [...filters, filterValue];
            setFilters(updatedFilters);
        } else {
            // REMOVE FILTER
            updatedFilters = filters.filter((filter) => filter !== filterValue);
            setFilters(updatedFilters);
        }
    
        // UPDATE FILTERS
        let filteredData = originalData;
    
        // ALIVE DEAD
        if (updatedFilters.includes('Alive') && updatedFilters.includes('Dead')) {

            filteredData = []

        } else if (updatedFilters.includes('Alive') || updatedFilters.includes('Dead')) {
            filteredData = filteredData.filter((character) => updatedFilters.includes(character.status));
        } 
    
        // FEMALE MALE
        if (updatedFilters.includes('Female') && updatedFilters.includes('Male')) {

            filteredData = []
             
        } else if (updatedFilters.includes('Female') || updatedFilters.includes('Male')) {
            filteredData = filteredData.filter((character) => updatedFilters.includes(character.gender)); //updatedFilters.includes(character.gender)
        }
    
        if (updatedFilters.includes('Origin')) {
            filteredData = filteredData.filter((character) => character.origin.name === 'unknown');
        }
    
        // UPDATE DATA STATE WITH THE APLICATED FILTERS BEFORE
        setData(filteredData);
    };

    // SHOW FILTERS
    const showFilters = () => {
        setFiltersDisplay(true)
    }

    // UNSHOW FILTERS
    const unshowFilters = () => {
        setFiltersDisplay(false)
    }

    return (
        <section className="characters">
            <NavBar verde={"#b1f0dc"} azulLetra={"#344D67"} dondeEstoy={"character"} />
            <div className="filters">
                <div className="filter-title">
                    <h3>Filters</h3>
                    {filtersDisplay ? <i className="fa-solid fa-square-xmark" onClick={unshowFilters}></i> : <img src={pictures.navFilt} alt="filter icon" onClick={showFilters}/>}
                </div>
                <div className={filtersDisplay ? "filters-check-res" : "filters-check"}>
                    <Filter filterFun={filterCharacters} ident="Alive" text="Character Alive"></Filter>
                    <Filter filterFun={filterCharacters} ident="Dead" text="Character Dead"></Filter>
                    <Filter filterFun={filterCharacters} ident="Female" text="Female"></Filter>
                    <Filter filterFun={filterCharacters} ident="Male" text="Male"></Filter>
                    <Filter filterFun={filterCharacters} ident="Origin" text="Origin Unknown"></Filter>
                </div> 
            </div>
            <div className="characters-container">
                {data.length < 1 ?  <Error></Error> : data.map((item) => {
                   return <Card name={item.name} backImage={item.image} key={item.id} status={item.status} species={item.species} gender={item.gender} origin={item.origin}></Card>
                })}
            </div>
        </section>
    )
    
}



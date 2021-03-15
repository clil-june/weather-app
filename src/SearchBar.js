import React from "react";
import "./SearchBar.css";

export default function SearchBar (){
    return (
      <form autocomplete="off" id="search-form" >
      <input id="search-bar" type="search" placeholder="Enter city" />
      <input id="search" type="submit" value="search" />
     </form>  
    );
}
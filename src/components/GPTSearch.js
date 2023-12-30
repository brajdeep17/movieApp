import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../Utils/constants";

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-90 object-cover" src= {BG_URL} alt="logo"/>
      </div>
    <div className="">
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
    </>
  );
};

export default GPTSearch;

import React from "react";
import NavBar from "../Pubs&BarPage/NavBar/NavBar";
import FirstRowCt from "../CocktailsPage/FirstRowCT/FirstRowCt";
import CtImage from "../CocktailsPage/CTImagesPage/CtImage";
import MoreColl from "../Pubs&BarPage/MoreCollections1/MoreColl";
import Options from "../Pubs&BarPage/ExploreOptions/Options";
import Footer from "../Pubs&BarPage/Footer/Footer";

function ExoticCocktailsPage() {
  return (
    <div>
      <NavBar></NavBar>
      <FirstRowCt></FirstRowCt>
      <CtImage></CtImage>
      <MoreColl></MoreColl>
      <Options></Options>
      <Footer></Footer>
    </div>
  );
}

export default ExoticCocktailsPage;

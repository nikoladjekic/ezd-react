import React from "react";
import SearchBar from "../SearchBar/SearchBar";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      <h1>CHUCK NORRIS JOKES</h1>
      <SearchBar />
    </div>
  );
};

export default LandingPage;

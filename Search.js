import { HousesArrayData } from "./Houses.js";

console.log(HousesArrayData);

document.querySelector(".search").onsubmit = Search;

export function Search(e) {
  //   console.log(e);

  e.preventDefault();

  const serachTerm = document.getElementById("search").value;

  const SearchOnTheBasisOfInput = (country) => {
    const FilteredArray = HousesArrayData.filter(
      (House) => House.country == country
    );

    const length = FilteredArray.length;

    return { length, FilteredArray };
  };

  const House = SearchOnTheBasisOfInput(serachTerm);

  console.log(House.length);

  console.log(House.FilteredArray);
}

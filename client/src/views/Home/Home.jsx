import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import ContinentSelect from "../../components/ContinentSelect/ContinentSelect";
import SortSelect from "../../components/SortSelect/SortSelect";
import { sortArray } from "../../helpers";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedSort, setSelectedSort] = useState("A-Z");
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    dispatch(getCountries());
  }, [countries]);

  useEffect(() => {
    const filteredCountries =
      selectedContinent === "All"
        ? countries
        : countries.filter(
            (country) => country.continent === selectedContinent
          );
    const sortedCountries = sortArray(filteredCountries, selectedSort);
    setData(sortedCountries);
  }, [selectedContinent, selectedSort, countries]);

  return (
    <>
      <ContinentSelect
        continents={[
          "All",
          "Africa",
          "Asia",
          "Europe",
          "North America",
          "South America",
          "Oceania",
        ]}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />
      <SortSelect
        Sort={["A-Z", "Z-A", "Upper to Lower", "Lower to Upper"]}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />
      <CardsContainer countries={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;

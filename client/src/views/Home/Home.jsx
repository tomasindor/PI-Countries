import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import ContinentSelect from "../../components/ContinentSelect/ContinentSelect";
import SortSelect from "../../components/SortSelect/SortSelect";
import { sortArray } from "../../helpers";

import SearchBar from "../../components/searchBar/SearchBar";
import style from "./Home.module.css";
import ActivitySelect from "../../components/ActivitySelect/ActivitySelect";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedSort, setSelectedSort] = useState("A-Z");
  const [selectedActivity, setSelectedActivity] = useState("");
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  console.log(activities);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);
  useEffect(() => {
    if (selectedActivity) {
      setData(
        countries.filter((country) => {
          if (typeof country.activities !== "undefined") {
            country.activities.filter(
              (activity) => activity.name === selectedActivity
            );
          }
        })
      );
    }
  }, [selectedActivity]);
  useEffect(() => {
    if (selectedContinent === "All") {
      setData(sortArray(countries, selectedSort));
    } else {
      let filter = countries.filter(
        (country) => country.continent === selectedContinent
      );
      setData(sortArray(filter, selectedSort));
    }
  }, [selectedContinent, selectedSort, countries]);

  return (
    <div>
      <div className={style.filters}>
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
        <ActivitySelect
          Activity={activities}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      </div>
      <div className={style.searchBarContainer}>
        <SearchBar className={style.searchBar}></SearchBar>
      </div>

      <CardsContainer countries={currentRecords} />

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;

import style from "./ContinentSelect.module.css";
const ContinentSelect = ({
  continents,
  selectedContinent,
  setSelectedContinent,
}) => {
  const handleChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div className={style.container}>
      <label htmlFor="continent-select" className={style.label}>
        Select a continent:
      </label>
      <select
        id="continent-select"
        value={selectedContinent}
        onChange={handleChange}
        className={style.select}
      >
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContinentSelect;

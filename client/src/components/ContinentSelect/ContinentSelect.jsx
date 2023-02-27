const ContinentSelect = ({
  continents,
  selectedContinent,
  setSelectedContinent,
}) => {
  const handleChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="continent-select">Select a continent:</label>
      <select
        id="continent-select"
        value={selectedContinent}
        onChange={handleChange}
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

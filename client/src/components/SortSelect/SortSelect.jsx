const SortSelect = ({ Sort, selectedSort, setSelectedSort }) => {
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div>
      <label htmlFor="Sort-select">Select a Sort:</label>
      <select id="Sort-select" value={selectedSort} onChange={handleChange}>
        {Sort.map((Sort) => (
          <option key={Sort} value={Sort}>
            {Sort}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;

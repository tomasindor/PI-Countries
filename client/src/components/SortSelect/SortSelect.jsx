import style from "./SortSelect.module.css";
const SortSelect = ({ Sort, selectedSort, setSelectedSort }) => {
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className={style.container}>
      <label htmlFor="Sort-select" className={style.label}>
        Sort by:
      </label>
      <select
        id="Sort-select"
        value={selectedSort}
        onChange={handleChange}
        className={style.select}
      >
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

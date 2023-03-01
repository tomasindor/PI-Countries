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
      <div className={style.contentSelect}>
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
    </div>
  );
};

export default SortSelect;

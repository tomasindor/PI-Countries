import style from "./ActivitySelect.module.css";
const ActivitySelect = ({
  Activity,
  selectedActivity,
  setSelectedActivity,
}) => {
  const handleChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  return (
    <div className={style.container}>
      <label htmlFor="Activity-select" className={style.label}>
        Select a Activity:
      </label>
      <select
        id="Activity-select"
        value={selectedActivity}
        onChange={handleChange}
        className={style.select}
      >
        {Activity.map((Activity) => (
          <option key={Activity} value={Activity}>
            {Activity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActivitySelect;

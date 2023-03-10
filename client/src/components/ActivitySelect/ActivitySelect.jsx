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
      <div className={style.contentSelect}>
        <select
          id="Activity-select"
          value={selectedActivity}
          onChange={handleChange}
          className={style.select}
        >
          {[...new Set(Activity)].map((activity) => (
            <option key={activity} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ActivitySelect;

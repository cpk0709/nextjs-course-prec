const EventSearch = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="year">Year</label>
        <select id="year">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default EventSearch;

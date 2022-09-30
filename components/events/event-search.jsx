import Button from "../ui/button";
import classes from "./event-search.module.css";
import { getFilteredEvents } from "../../dummy-data";
import { useState } from "react";

const EventSearch = (props) => {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");

  const submitHandler = () => {
    const resultEvent = getFilteredEvents({ year, month });
  };

  const onChangeYearHandler = (e) => {
    setYear(e.currentTarget.value);
  };

  const onChangeMonthHandler = (e) => {
    setMonth(e.currentTarget.value);
  };

  return (
    <div className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select onChange={onChangeYearHandler} id="year">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select onChange={onChangeMonthHandler} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </div>
  );
};

export default EventSearch;

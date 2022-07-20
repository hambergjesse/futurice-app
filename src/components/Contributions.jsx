//import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function Contributions() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="Contributions">
      <p>1337 contributions in the last year</p>
      <div className="Contribution-Wrapper">
        <div className="Contribution-Months">
          <p>Mar</p>
          <p>April</p>
          <p>May</p>
          <p>June</p>
          <p>July</p>
        </div>
        <GitHubCalendar
          username="hambergjesse"
          transformData={selectLastHalfYear}
          hideTotalCount
          hideColorLegend
          hideMonthLabels
          showWeekdayLabels={false}
          blockSize={10}
        />
      </div>
    </div>
  );
}

export default Contributions;

import React, { useState } from "react";
import './style/Style.css';


const FilterList = ()=> {

  const studentData = [
    "Tevin Edwards",
    "Ronald Hector",
    "Akeem Henry",
    "Rojae Henry",
    "Javaughn Bailey",
    "Latoya Jackson",
    "Shaneika Lewis",
    "Angella Marston",
    "Shanelle McPherson",
    "Christopher Watson",
    "Richard Wilson",
  ];

  const [studentList, setStudentList] = useState(studentData);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setStudentList(studentData);
      return;
    }
    const searchResult = studentData.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setStudentList(searchResult);
  };
  return (
    <div>
      <div  className="divContainer">
        Find Item: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {studentList &&
        studentList.map((item) => (
          <div className="itemsList">{item}</div> //Display each item
        ))}
    </div>
  );
}
export default FilterList;
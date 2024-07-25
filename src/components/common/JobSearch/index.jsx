import React, { useState, useEffect } from "react";
import "./index.scss"; // Regular CSS import

function SearchBar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    await props.fetchJobsCustom(jobCriteria);
  };

  const clearFilters = () => {
    setJobCriteria({
      title: "",
      location: "",
      experience: "",
      type: "",
    });
    props.onClearFilters();
  };

  useEffect(() => {
    if (!props.customSearch) {
      setJobCriteria({
        title: "",
        location: "",
        experience: "",
        type: "",
      });
    }
  }, [props.customSearch]);

  return (
    <div className="search-bar">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search}>
        Search
      </button>
      {props.customSearch && (
        <button onClick={clearFilters}>
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default SearchBar;

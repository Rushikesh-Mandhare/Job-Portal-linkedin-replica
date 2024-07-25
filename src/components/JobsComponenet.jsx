import React, { useEffect, useState } from "react";
import "../Sass/JobComponent.scss"; // Regular CSS import
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import SearchBar from "./common/JobSearch";
import JobCard from "./common/JobCard";

export default function JobComponent() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(firestore, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    console.log("Fetching custom jobs with criteria:", jobCriteria); // Debugging log
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = collection(firestore, "jobs");

    let q = query(jobsRef);

    if (jobCriteria.type) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
      q = query(q, where("location", "==", jobCriteria.location));
    }

    q = query(q, orderBy("postedOn", "desc"));

    try {
      const req = await getDocs(q);

      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
    } catch (error) {
      console.error("Error fetching custom jobs:", error); // Error handling
    }
    
    setJobs(tempJobs);
  };

  const handleClearFilters = () => {
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-component">
      <SearchBar 
        fetchJobsCustom={fetchJobsCustom} 
        onClearFilters={handleClearFilters} 
        customSearch={customSearch}
      />
      
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

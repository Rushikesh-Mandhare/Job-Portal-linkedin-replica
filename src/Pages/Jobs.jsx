import React, { useMemo, useState } from 'react';
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import JobsComponent from '../components/JobsComponenet';

const Jobs = () => {

    const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <>
    <Topbar currentUser={currentUser} />
    <JobsComponent/>
    </>
  )
}

export default Jobs

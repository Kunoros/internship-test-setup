import React, { useState, useEffect } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { callMsGraph } from '../graph';

const Profile = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);


  useEffect(() => {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => setGraphData(response));
      });

  }, [])

  return (

    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {graphData ? (
        <div id="profile-div" >
          <p><strong>First Name: </strong> {graphData.givenName}</p>
          <p><strong>Last Name: </strong> {graphData.surname}</p>
          <p><strong>Email: </strong> {graphData.userPrincipalName}</p>
          <p><strong>Id: </strong> {graphData.id}</p>
        </div >) : (
        <h1>loading information</h1>
      )}
    </>




  );
}

export default Profile

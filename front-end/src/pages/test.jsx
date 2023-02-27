import React, { useState, useEffect } from "react";
// import Axios, { AxiosInstance, AxiosResponse } from "axios";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import axios from "axios";

const Test = () => {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    async function fetchData() {
      try {
        instance
          .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          })
          .then((response) => {
            // console.log(response);
            axios
              .get("http://localhost:8000/api/name", {
                headers: {
                  msalToken: response.accessToken,
                },
              })
              .then((response) => console.log(response));
          });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>test fast api</h1>
      </div>
    </>
  );
};

export default Test;

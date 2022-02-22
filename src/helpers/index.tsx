import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BACKEND_URL } from "../params";
import { useNavigate } from "react-router-dom";

export function refreshPage() {
  window.location.reload();
}

export async function signup({ email, password }) {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/signup`, {
      email,
      password,
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/login`, {
      email,
      password,
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function get_tickets() {
  try {
    // Call the api get_tickets
    const response = await axios.get(`${BACKEND_URL}/user/get_tickets`);

    // If response exists
    if (response && response.data) {
      // return the response data
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function create_tickets({ name, comment }, { headers }) {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/user/create_tickets`,
      {
        name,
        comment,
      },
      { headers }
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// export async function update_tickets({ id, name, comment }, { headers }) {
//   try {
//     // Call the api update_tickets
//     const response = await axios.get(`${BACKEND_URL}/user/update_tickets`, {
//       id,
//       name,
//       comment,
//     });

//     // If response exists
//     if (response && response.data) {
//       // return the response data
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function delete_tickets({ id }) {
  const body = {
    data: {
      id,
    },
  };

  try {
    // Call the api delete_tickets
    const response = await axios.get(
      `${BACKEND_URL}/user/delete_tickets`,
      body
    );

    // If response exists
    if (response && response.data) {
      // return the response data
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

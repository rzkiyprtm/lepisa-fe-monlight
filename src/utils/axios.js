import axios from "axios"


export const getUserId = (token) => {
  return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
      headers: {
        "x-access-token" : token
      },
  })
}
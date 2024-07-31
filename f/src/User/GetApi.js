import axios from "axios";

export async function GetApi(props) {
   const data = await axios.get(`http://localhost:12000/${props}`)
   return data?.data;
}

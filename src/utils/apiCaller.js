// import axios from "axios";
import * as LinkApi from "./../constants/LinkApi";
// export default function CallApi(endpoint, method = "GET", body) {
//   return axios({
//     method: method,
//     url: LinkApi + "/" + endpoint,
//     data: body,
//   }).catch((err) => {
//     console.log(err);
//   });
// }

export function GetApi(endpoint, method, accesstoken = null, join = "&", data)
{
  var url = LinkApi.LinkApi;
  url += endpoint;
  let raw = JSON.stringify(data);
  // console.log(url);
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "sb=7yC7YPRdvUTACsPMzGr1Z0iH");
  var requestOptions = {
    method: method,
    headers: myHeaders,
    redirect: 'follow'
  };
  switch (method) {
    case "POST":
      requestOptions = {
        method: method,
        headers: myHeaders,
        redirect: 'follow',
        body: raw
      };
      break;
    case "GET":
      requestOptions = {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
      };
      break;
    default:
      break;
  }


  return fetch(url, requestOptions);

}

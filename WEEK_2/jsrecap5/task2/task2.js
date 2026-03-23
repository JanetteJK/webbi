const regresKey = "reqres_1465d69002424aeea166973020222890";
const regresUrl = "https://reqres.in/api/users?page=2";

const callApi = async () => {
  const data = await fetch(regresUrl, {
    method: "post",
    body: JSON.stringify({name: "Janette"}),
    headers: {
      "x-api-key": regresKey,
    },
  });

  console.log(data);

  const result = await data.json();

  console.log("Data", data);
  console.log("result", result);

};
console.log("Logging before calling");
callApi();
console.log("Logging after call")

const regresKey = "reqres_1465d69002424aeea166973020222890";
const regresUrl = "https://reqres.in/api/unknown/23";

const callApi = async () => {
  try{
  const data = await fetch(regresUrl, {
    headers: {
      "x-api-key": regresKey,
    },
  });

  console.log(data);

  const result = await data.json();

  console.log("Data", data);
  console.log("result", result);
  }catch (error){
    console.log("ei toimi" + error.message);
  }


};

console.log("Logging before calling");
callApi();
console.log("Logging after call")

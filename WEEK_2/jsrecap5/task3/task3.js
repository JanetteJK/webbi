const regresKey = "reqres_1465d69002424aeea166973020222890";
const regresUrl = "https://reqres.in/api/unknown/1236";

const callApi = async () => {
  console.log("Logging before calling");
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
  finally {
    console.log("Logging after call")
  }


};

callApi();

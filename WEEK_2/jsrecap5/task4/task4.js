const regresKey = "reqres_1465d69002424aeea166973020222890";
const regresUrl = "https://reqres.in/api/users?page=2";

const fetchData = async (url, options) => {
  try {
    const data = await fetch(url, options);
    if (data.status < 200 || data.status >= 300) {
      throw new Error("Error message here")
    }
      return await data.json();

      }
      catch (error) {
      console.log("ei toimi, ", error)
    }
  };



  const options = {
    headers: {
      "x-api-key": regresKey,
    },
  };
  const main = async () => {
    console.log("Logging before calling");
    const result = await fetchData(regresUrl, options);

    console.log("result", result)
};

  main()

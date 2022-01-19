const getApiData = (url) => {
   return fetch(url).then((dataJson) => {
     if (!dataJson.ok) {
       throw new Error("Error, !dataJson.ok", dataJson.status);
     }
     console.log(dataJson);
     return dataJson.json();
   });    
}

export {getApiData}
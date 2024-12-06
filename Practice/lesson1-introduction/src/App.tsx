import axios from "axios";
import { useEffect } from "react";

const App = () => {

  const myAccessToken = {
    headers: { "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76" },
  };

const getData = ()=>{
    axios
      .get("https://matrixacademylessonapi.webluna.org/campaign", myAccessToken)
      .then((res) => console.log(res));
}

  const sendData = () => {
    axios.post(
      "http://localhost:3010/ad/campaign/",
      {
        "row": 1,
        "imageUrl": "img.jpg",
        "titleAz": "Qis endirimi",
        "titleEn": "Winter sale",
        "titleRu": "Endirima qisa",
        "descriptionAz": "Ela movsum",
        "descriptionEn": "Best season",
        "descriptionRu": "Movsumu elaya",
      },
      myAccessToken
    )
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };


  const editData = ()=>{
    axios.put("http://localhost:3010/ad/campaign/6752f13243a8f050b6f65002",  {
      "row": 100,
      "imageUrl":      "edited img.jpg",
      "titleAz":       "edited Qis endirimi",
      "titleEn":       "edited Winter sale",
      "titleRu":       "edited Endirima qisa",
      "descriptionAz": "edited Ela movsum",
      "descriptionEn": "edited Best season",
      "descriptionRu": "edited Movsumu elaya",
    },myAccessToken)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  
  
  const deleteData = ()=>{
    axios.delete("http://localhost:3010/ad/campaign/6752f4e9ed0f5e089a5ab462",myAccessToken)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
      <button onClick={sendData}>create data</button>
      <button onClick={editData}>edit data</button>
      <button onClick={deleteData}>delete data</button>
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import getAllCat from "./misc/getData";

import NavBar from "./components/navbar/NavBar"
import CatTable from "./components/table/CatTable";

export default function App() {

  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    (async () => {
      const list = await getAllCat();
      setList(list);
      setLoading(false);
    })();
  }, []);

  const search = async(term)=> {

    const gotCats = await getAllCat();

    const filtered = gotCats.filter((cat)=> {
      return (
        (cat.name.includes(term) ||
        cat.age == parseInt(term) ||
        cat.gender.includes(term) ||
        cat.color.includes(term))
      ) 
    });

    setList(filtered);

  }

  const deleteCat = (id)=> {
    setList(list.filter((cat)=> cat.id != id));
  }


  return (
    <>
      <NavBar onSearch={search} />
      {loading ? <h1>Loading</h1> : <CatTable list={list} deleteCat={deleteCat} />}

    </>
  );
}



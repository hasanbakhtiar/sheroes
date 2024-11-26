import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface fakeStoreType {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface dummyType {
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

interface contextType {
  dummyApi: dummyType[];
  fakeStoreApi: fakeStoreType[];
}

export const DataContext = createContext<contextType | null>(null);

export const DataProvider = ({ children }: React.ReactNode) => {
  const [fakestore, setFakestore] = useState<fakeStoreType[]>([]);
  const [dummy, setDummy] = useState<dummyType[]>([]);
  const myApis = {
    dummyApi: dummy,
    fakeStoreApi: fakestore,
  };
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setFakestore(res.data));
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setDummy(res.data.products));
  },[]);
  console.log(dummy);
  
  return <DataContext.Provider value={myApis}>{children}</DataContext.Provider>;
};

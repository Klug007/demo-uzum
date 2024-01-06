import "./App.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./components/card/Card";
import { ProductContext } from "./context/ProductContext";
import Loader from "./components/Loader/Loader";
import NewLoader from "./components/NewLoader/NewLoader";
import { Counter } from "./components/Counter";

function App() {
    const { setIsLoading } = useContext(ProductContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getApi = () => {
            setIsLoading(true);
            axios
                .get("https://dummyjson.com/products")
                .then((response) => {
                    setData(response.data.products);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                });
        };
        getApi();
    }, [setIsLoading]);

    return (
        <div className="App">
            <h1>Новогодняя распродажа</h1>
            <Loader />
            <NewLoader />
            <div className="cards">
                {data.map((product) => (
                    <Card
                        image={product.images[0]}
                        title={product.title}
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

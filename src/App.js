import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card/Card";
function App() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const getApi = () => {
            axios
                .get("https://dummyjson.com/products")
                .then((response) => setData(response.data.products))
                .catch((error) => console.log(error));
        };
        getApi();
    }, []);

    return (
        <div className="App">
            <h1>Новогодняя распродажа ></h1>
            <div className="cards">
                {data.map((product) => (
                    <Card
                        image={product.images[0]}
                        title={product.title}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

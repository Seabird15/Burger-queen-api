import { useEffect, useState } from "react";
import { Apiurl } from "../../Data/apiRest";
//
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const url = Apiurl;
  //HOOK QUE ALMACENA LOS TODOS
  const [todos, setTodos] = useState();
  //Funcion que solicita los todos
  const fetchApi = async () => {
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlhc2RAc3lzdGVycy54eXoiLCJpYXQiOjE2Njg3MDQzMjksImV4cCI6MTY2ODcwNzkyOSwic3ViIjoiNDMifQ.iS_EvN-Kq-FG16-nHLw1AEP-l8vhcCaIGFw5kWfs3tw`,
    };
    const response = await fetch(url, { headers });
    console.log(response.statusText);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };
  //HOOk que se engancha del ciclo de vida del componente y ejecuta la funcion al inicio
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="container">
      {!todos
        ? "Cargando..."
        : todos.map((todos, index) => {
            return (
              <div key={index} className="products">
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={todos.image} />
                  <Card.Body>
                    <Card.Title>{todos.name}</Card.Title>
                    <Card.Text>${todos.price}</Card.Text>
                    <Card.Text>${todos.amount}</Card.Text>
                    <Card.Text>Type: {todos.type}</Card.Text>
                    <Button variant="primary" onClick={()=> console.log(todos)}>Add To Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
    </div>
  );
}

export default Products;


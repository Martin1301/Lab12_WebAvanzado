import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
    city: "",
    direction: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSendData = (event) => {
    //para que laweb no se revargue debemos usar preventDefault()
    event.preventDefault();
    console.log(values);
  };

  return (

  
    <Container>
      <div id="card">
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Home</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField 
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su apellido"
              name="lastname"
              fullWidth
              value={values.lastname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su edad"
              name="age"
              fullWidth
              value={values.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su dirección"
              name="direction"
              fullWidth
              value={values.direction}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su teléfono"
              name="phone"
              fullWidth
              value={values.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid id="txt" item xs={6}>
            <TextField
              label="Ingrese su ciudad"
              name="city"
              fullWidth
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Home button
            </Button>
          </Grid>
        </Grid>
      </form>
      </div>
    </Container>
  );
};

export default Home;

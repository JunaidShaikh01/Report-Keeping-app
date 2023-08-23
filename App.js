import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function App() {
  const [form, setForm] = useState({});
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    // setForm("");
    // setEmail("");
    setForm({ form });
  };

  const removeItems = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header />
      {/* FORMS */}
      <div className="inputSection">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <Button variant="contained" onClick={addData} color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* SHAOW DATA */}
      <div className="data">
        <div className="outputData">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="outputData">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  variant="contained"
                  onClick={() => removeItems(index)}
                  color="error"
                >
                  <RemoveIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

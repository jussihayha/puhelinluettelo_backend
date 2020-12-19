const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.static("build"));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postData "
  )
);

app.use(cors());

morgan.token("postData", function (req, res) {
  return JSON.stringify(req.body);
});

let persons = [
  {
    id: 1,
    name: "Mariia Häyhä",
    number: "0505590278",
  },
  {
    id: 2,
    name: "Jussi Häyhä",
    number: "0451386776",
  },
  {
    id: 3,
    name: "Pullero Häyhä",
    number: "0451386776",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  const time = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people<br><br> 
  ${time}</p>`);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((note) => note.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;

  return maxId + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (
    persons.find(
      (person) => person.name.toLowerCase() === body.name.toLowerCase()
    )
  ) {
    return response.status(400).json({
      error: "Name must be unique!",
    });
  }

  if (!body.name) {
    return response.status(400).json({
      error: "Name missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "Number missing",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

require("dotenv").config();
const Person = require("./models/person");

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

app.get("/info", (req, res) => {
  const time = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people<br><br> 
  ${time}</p>`);
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => {
      response.status(404).end();
    });
});

app.post("/api/persons", (request, response) => {
  if (!request.body.name) {
    return response.status(400).json({
      error: "Name missing",
    });
  }

  if (!request.body.number) {
    return response.status(400).json({
      error: "Number missing",
    });
  }

  const person = new Person({
    name: request.body.name,
    number: request.body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: request.body.name,
    number: request.body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};
app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

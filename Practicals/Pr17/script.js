const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.urlencoded({ extended: true }));

const schema = Joi.object({
  university: Joi.string().min(5).required().messages({
    "string.min": "min length of 5 for University is required",
    "any.required": "University is required",
  }),
  institute: Joi.string().min(3).required().messages({
    "string.min": "min length of 3 for institute is required",
    "any.required": "Institute is required",
  }),
  department: Joi.string().required().messages({
    "any.required": "Department is required",
  }),
  courseName: Joi.string().min(3).required().messages({
    "any.required": "Course Name is required",
  }),
  courseCode: Joi.string().min(3).required().messages({
    "string.min": "min length of 3 for University is required",
    "any.required": "Course Code is required",
  }),
  semester: Joi.number().required().messages({
    "number.base": "Semester should be a number",
    "any.required": "Semester is required",
  }),
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/CoursePage.html");
});


app.post("/course", (req, res) => {
  const {
    university,
    institute,
    department,
    courseName,
    courseCode,
    semester,
  } = req.body;

  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) {
    res.status(400).send(result.error);
    return;
  }


  res.send(
    `<h1>Course Details</h1>
    <p>University: ${university}</p>
    <p>Institute: ${institute}</p>
    <p>Department: ${department}</p>
    <p>Course Name: ${courseName}</p>
    <p>Course Code: ${courseCode}</p>
    <p>Semester: ${semester}</p>`
  );
});


app.listen(3000, () => {
  console.log("Server listing. http://localhost:3000");
});

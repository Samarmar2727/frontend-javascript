# TypeScript Tasks 1 to 4 - ALX Frontend

This project includes TypeScript practice tasks based on ALX guidelines. The main goals are to get comfortable with interfaces, classes, function types, and TypeScript structure in general.

## 📁 Task 1: Teacher Interface

- Defined a `Teacher` interface with:
  - `firstName`, `lastName` (readonly)
  - `fullTimeEmployee` (required)
  - `yearsOfExperience` (optional)
  - `location` (required)
  - [index signature] to allow extra attributes like `contract`.

---

## 📁 Task 2: Directors Interface

- Created an interface `Directors` that extends `Teacher`.
- Added a required property: `numberOfReports`.

---

## 📁 Task 3: printTeacher Function

- Defined a function `printTeacher` that takes `firstName` and `lastName`.
- Returns the first initial and full last name (e.g., `"J. Doe"`).
- Used an interface `printTeacherFunction` to describe the function signature.

---

## 📁 Task 4: StudentClass

- Created a class `StudentClass` that:
  - Accepts `firstName` and `lastName` in constructor.
  - Implements interface `StudentInterface` with:
    - `displayName()`: returns `firstName`.
    - `workOnHomework()`: returns `"Currently working"`.
- Described the class constructor using a separate interface `StudentConstructor`.

---

## ✅ Run the project

```bash
npm install
npm run build
```

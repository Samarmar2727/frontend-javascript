# TypeScript Tasks 9 to 10 - ALX Frontend

This section of the project focuses on advanced TypeScript concepts including ambient declarations, namespaces, and declaration merging.

---

## 📁 Task 8: Ambient Namespaces

- Defined a `RowID` type (number) and `RowElement` interface with optional `age`.
- Created an ambient declaration file `crud.d.ts` for a JS module `crud.js`.
- Used the ambient declarations to:
  - Insert a row with first and last name.
  - Update the row by adding `age`.
  - Delete the row using its ID.
- All types imported from `interface.ts`.

---

## 📁 Task 9: Namespace & Declaration Merging

- Used a `Subjects` namespace to organize interfaces and classes.
- Created:
  - `Teacher` interface with `firstName`, `lastName`.
  - `Subject` class with a `setTeacher` method.
  - `Cpp`, `Java`, `React` classes extending `Subject`.
- Used declaration merging to extend `Teacher` with experience fields like `experienceTeachingC`.
- Implemented `getRequirements()` and `getAvailableTeacher()` in each subject.

---

## 📁 Task 10: Main Application Logic

- Created a `Teacher` object `cTeacher` with `experienceTeachingC = 10`.
- Instantiated `Cpp`, `Java`, and `React` classes.
- Set the same teacher for all.
- Called and logged:
  - `getRequirements()`
  - `getAvailableTeacher()`
- Output varies depending on the teacher’s experience.

---

## ✅ Run the project

```bash
npm install
npm run build

# TypeScript Tasks 5 to 7 - ALX Frontend

This section focuses on advanced TypeScript features including interfaces with methods, classes, type predicates, and string literal types.

---

## 📁 Task 5: Advanced Types Part 1

- Created interfaces `DirectorInterface` and `TeacherInterface` with methods like `workFromHome()`, `getCoffeeBreak()`, and task-specific methods.
- Implemented `Director` and `Teacher` classes based on these interfaces.
- Wrote a `createEmployee` function that returns a `Teacher` if salary < 500 (number), otherwise a `Director`.

---

## 📁 Task 6: Functions Specific to Employees

- Created a type predicate function `isDirector` to check if an employee is a Director.
- Created `executeWork` function that calls the appropriate task method based on the employee type.

---

## 📁 Task 7: String Literal Types

- Defined a string literal type `Subjects` with `"Math"` and `"History"`.
- Implemented `teachClass` function that returns teaching messages based on the subject.

---

## ✅ Run the project

```bash
npm install
npm run build

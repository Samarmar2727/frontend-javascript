# 0x04. TypeScript

This repository contains a series of tasks designed to strengthen understanding of TypeScript within a Frontend development context. The project covers essential TypeScript concepts such as interfaces, advanced types, namespaces, declaration merging, and nominal typing.

## 📁 Project Structure

Each task is organized in its own folder from `task_0` to `task_5`. Every folder includes TypeScript source files (`.ts`) along with a `package.json`, configuration files, and a `tsconfig.json`.

---

## ✅ Tasks Overview

### Task 0: Creating an Interface for a Student

- Define a `Student` interface.
- Create an array of students.
- Dynamically display student data in a HTML table using TypeScript.

---

### Task 1: Teacher Interface & Classes

- Define `Teacher` and `Directors` interfaces.
- Use index signatures to allow additional properties.
- Create a `printTeacher` function and its interface.
- Define `StudentClass` using constructor and instance interfaces.

---

### Task 2: Advanced Types - Part 1

- Create `DirectorInterface` and `TeacherInterface`.
- Implement classes that adhere to each interface.
- Use a factory function `createEmployee` to return different instances based on salary type.

---

### Task 3: Ambient Namespaces

- Use `type` and `interface` for data modeling.
- Create and import ambient declaration file (`crud.d.ts`).
- Use TypeScript to interact with a CRUD module.

---

### Task 4: Namespace & Declaration Merging

- Use `namespace` to group related interfaces and classes.
- Extend interfaces inside a namespace.
- Implement subject classes (`Cpp`, `Java`, `React`) with custom teacher experience and methods.

---

### Task 5: Brand Convention & Nominal Typing

- Simulate nominal typing using interfaces with `__brand` property.
- Create two types `MajorCredits` and `MinorCredits`.
- Implement functions `sumMajorCredits` and `sumMinorCredits` to operate on respective types.

---

## ⚙️ Tech Stack

- TypeScript
- Webpack
- ESLint
- Jest (for automated checker compatibility)
- Node.js

---

## 📝 Requirements

- TypeScript compilation must succeed without any errors.
- All code must follow the specified TypeScript structure and style rules.
- All files end with a new line.
- Each task is self-contained in its folder with relevant configuration files.
- All features should run and compile successfully on Ubuntu 18.04 using Node and npm.

---

## 📦 Setup Instructions

To run/build each task:

```bash
cd task_x
npm install
npm run build
```

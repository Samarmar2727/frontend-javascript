# TypeScript Task 11 - Brand Convention & Nominal Typing - ALX Frontend

This task explores brand convention and nominal typing in TypeScript to create unique types that are not interchangeable despite having the same structure.

---

## 📁 Task 11: Brand Convention & Nominal Typing

- Created interfaces `MajorCredits` and `MinorCredits`, each with:
  - A `credits` property (number).
  - A unique `brand` property to differentiate the types.
- Implemented functions:
  - `sumMajorCredits(subject1, subject2)` returning a `MajorCredits` value by summing credits.
  - `sumMinorCredits(subject1, subject2)` returning a `MinorCredits` value by summing credits.

This ensures type safety by preventing mixing credits of different nominal types.

---

## ✅ Run the project

```bash
npm install
npm run build

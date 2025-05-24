interface Student{
    firstName:string;
    lastName :string;
    age: number;
    location: string;

}

const student1: Student = {
  firstName: "Samar",
  lastName: "Khaled",
  age: 26,
  location: "Cairo",
};

const student2: Student = {
  firstName: "Ahmed",
  lastName: "khaled",
  age: 24,
  location: "giza",
};

const studentsList: Student[] = [student1, student2];



// Create table
const table = document.createElement("table");

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
 
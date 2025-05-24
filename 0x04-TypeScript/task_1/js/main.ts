
// task 01
  interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

/**************************************************/
// task 02

 interface Directors  extends Teacher {
     numberOfReports: number;
 }
 const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


/**************************************************/
// task 03


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const  printTeacher : printTeacherFunction  =( firstName, lastName ) => {
      return `${firstName.charAt(0)}. ${lastName}`;

}
 console.log (printTeacher("John", "Doe"))



 /**************************************************/
// task 04

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentInstance: StudentConstructor = StudentClass;

const s = new studentInstance("Samar", "Khaled");

console.log(s.displayName());
console.log(s.workOnHomework());

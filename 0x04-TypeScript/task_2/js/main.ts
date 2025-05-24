// task 05


// interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}
  //teacher class 
  class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}
 // createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}  

// Test cases
console.log(createEmployee(200));   
console.log(createEmployee(1000));  
console.log(createEmployee('$500')) 

/**************************************************************/
//task 06 

// Type predicate to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute employee-specific work
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(executeWork(createEmployee(200)));    
console.log(executeWork(createEmployee(1000)));   


/**************************************************************************/
// task 07 

// 1. Define string literal type
type Subjects = 'Math' | 'History';

// 2. Function that uses that type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test cases
console.log(teachClass('Math'));     
console.log(teachClass('History'));


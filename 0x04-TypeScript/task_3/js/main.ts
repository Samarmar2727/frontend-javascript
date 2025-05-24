// task 08 

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow = CRUD.updateRow(newRowID, { age: 23 });
CRUD.deleteRow(newRowID);


import { SchoolClass } from 'src/models/models';


export interface Student {
  rollNo?:number;
  class?:SchoolClass;
  firstName?:String;
  lastName?:String;
  guardianName?:String;
  middleName?:String;
  guardianNumber?:number;
  admissionNumber?:number;
}

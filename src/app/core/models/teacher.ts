import { SchoolClass } from 'src/models/models';


export interface Teacher {
  id?:number;
  class?:SchoolClass;
  firstName?:String;
  lastName?:String;
  middleName?:String;
  phoneNumber?:number;
}

import { Injectable } from '@angular/core';
import {
  Student,
  StudentAttendance,
  Teacher,
  TeacherAttendance,
} from 'src/app/core/models';
import { SchoolClass } from 'src/models/models';

@Injectable({
  providedIn: 'root',
})
export class AceEdgeService {
  private studentAttendances: StudentAttendance[] = [];
  private teacherAttendances: TeacherAttendance[] = [];
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private classes: SchoolClass[] = [];
  constructor() {
    this.fillData();
  }
  private fillData() {
    let SectionA: string = 'A';
    let statuses = ['Present', 'Absent', 'Late'];

    //#region  classes
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < 4; j++) {
        this.classes.push({
          section: String.fromCharCode(SectionA.charCodeAt(0) + j) ,
          standard: i,
        });
      }
    }
    //#endregion

    //#region  teacher Data

    for (let i = 1; i <= 50; i++) {
      let teacher = <Teacher>{
        class: this.classes[Math.floor(Math.random() * this.classes.length)],
        firstName: 'Shrey',
        lastName: 'Datta'+i,
        phoneNumber: 9283910321,
        id: i,
      };
      this.teachers.push(teacher);

      //#region fill up attendance data
      let today: Date, start: Date;
      today = new Date();
      today.setHours(0, 0, 0, 0);
      start = new Date(today.getTime());
      start.setDate(today.getDate() - 5);

      for (let date: Date = new Date(start.getTime()), i = 1; i <= 7; i++) {
        this.teacherAttendances.push(<TeacherAttendance>{
          attendanceStatus:
            statuses[Math.floor(Math.random() * statuses.length)],
          teacher: teacher,
          date: new Date(date.getTime()),
        });
        date.setDate(start.getDate() + i);
      }
      //#endregion
    }

    //#endregion

    //#region  student Data
    this.classes.forEach((c) => {
      for (let i = 1; i <= 5; i++) {
        let student = <Student>{
          class: c,
          firstName: 'Shrey',
          lastName: 'Datta',
          guardianNumber: 9283910321,
          rollNo: i,
          guardianName: 'Abdul Sharma',
          admissionNumber: 2045,
        };

        this.students.push(student);

        //#region fill up attendance data
        let today: Date, start: Date;
        today = new Date();
        today.setHours(0, 0, 0, 0);
        start = new Date(today.getTime());
        start.setDate(today.getDate() - 5);

        for (let date: Date = new Date(start.getTime()), i = 1; i <= 7; i++) {
          this.studentAttendances.push(<StudentAttendance>{
            attendanceStatus:
              statuses[Math.floor(Math.random() * statuses.length)],
            student: student,
            date: new Date(date.getTime()),
            present:80
          });
          date.setDate(start.getDate() + i);
        }
        //#endregion
      }
      //#endregion
    });
  }
  public getStudents() {
    return this.students;
  }
  public getClasses() {
    return this.classes;
  }
  public getStudentAttendances() {
    return this.studentAttendances;
  }
  public getStudentAttendanceByDateAndClass(date: Date, c: SchoolClass) {
    date.setHours(0, 0, 0, 0);
    return [
      ...this.studentAttendances.filter(
        (a) =>
          // (a.date.getDate() == date.getDate() && a.date.getMonth()==date.getMonth() && a.date.getFullYear()==date.getFullYear()) &&
          a.date.getTime() == date.getTime() &&
          a.student.class.section == c.section &&
          a.student.class.standard == c.standard
      ),
    ];
  }
  public updateStudentAttendance(attendances: StudentAttendance[]) {
    attendances.forEach((attendance) => {
      var attendanceRecord = this.studentAttendances.find(
        (a) =>
          a.date.getTime() == attendance.date.getTime() &&
          a.student.rollNo == attendance.student.rollNo &&
          a.student.class.section == a.student.class.section &&
          a.student.class.standard == a.student.class.standard
      );
      attendanceRecord.attendanceStatus = attendance.attendanceStatus;
    });
  }


  public getTeacherAttendances() {
    return this.teacherAttendances;
  }
  public getTeacherAttendanceByDate(date: Date) {
    date.setHours(0, 0, 0, 0);
    return [
      ...this.teacherAttendances.filter(
        (a) =>
          // (a.date.getDate() == date.getDate() && a.date.getMonth()==date.getMonth() && a.date.getFullYear()==date.getFullYear()) &&
          a.date.getTime() == date.getTime() //&&
          // a.teacher.class.section == c.section &&
          // a.teacher.class.standard == c.standard
      ),
    ];
  }
  public getTeacherAttendanceByName(name: string) {

    return [
      ...this.teacherAttendances.filter(
        (a) =>
          // (a.date.getDate() == date.getDate() && a.date.getMonth()==date.getMonth() && a.date.getFullYear()==date.getFullYear()) &&
          a.teacher.firstName+" "+a.teacher.lastName==name //&&
          // a.teacher.class.section == c.section &&
          // a.teacher.class.standard == c.standard
      ),
    ];
  }
  public updateTeacherAttendance(attendances: TeacherAttendance[]) {
    attendances.forEach((attendance) => {
      var attendanceRecord = this.teacherAttendances.find(
        (a) =>
          a.date.getTime() == attendance.date.getTime() &&
          a.teacher.id == attendance.teacher.id &&
          a.teacher.class.section == a.teacher.class.section &&
          a.teacher.class.standard == a.teacher.class.standard
      );
      attendanceRecord.attendanceStatus = attendance.attendanceStatus;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TeacherAttendanceReport,
  AttendanceReportByName,
  StudentAttendanceReport,
  TeacherMarkAttendance,
  TeacherAttendanceUpload,
  StudentMarkAttendanceRecords,
  StudentMarkAttendance,
  StudentAttendanceUpload,
  StudentAttedanceUploadRecord,
  TeacherAttedanceUploadRecord,
} from '../models/models';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { DatePipe } from '@angular/common';
import { UserService } from './user.service';
import { ThemeService } from 'ng2-charts';
import { StudentAttendancePercentage, ClassAttendanceStats, LeaveRecords, AttendanceStatusForCalendar, ApplicationStatusCard, LeaveHistory, LeaveCategory, PieChartTeacherLogin, AttendanceStats, StudentsWithLowAttendance, CheckStudentAttendanceTable, LeaveRecordsTeacherLogin, AttendancePieChart, TodaysAbsentees, StudentLowAttendance, StudentAttendanceByName, TeacherTodaysAbsentees } from '../models/models';

const _API_HOSTNAME = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root',
})


export class AttendanceService {
  constructor(
    private readonly _http: HttpClient,
    private userService: UserService
  ) { }
  datePipe = new DatePipe('en-IN');
  getAttendanceStatusFullform(status: string) {
    switch (status.toUpperCase()) {
      case 'P':
        return 'Present';
      case 'A':
        return 'Absent';
      case 'L':
        return 'Late';
      default:
        return '';
    }
  }

  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  //#region Student Attendance
  getClassAttendance(studentId: number): Observable<ClassAttendanceStats> {
    return this._http.get<ClassAttendanceStats>(
      _API_HOSTNAME + 'studentdashboardcard4/' + studentId
    );
  }

  getStudenAttendancePercentage(
    studentId: number
  ): Observable<StudentAttendancePercentage> {
    return this._http.get<StudentAttendancePercentage>(
      _API_HOSTNAME + 'studentdashboardcard1/' + studentId
    );
  }

  getStudentLeaveRecords(studentId: number): Observable<LeaveRecords> {
    return this._http.get<LeaveRecords>(
      _API_HOSTNAME + 'studentdashboardcard2/' + studentId
    );
  }

  getStudentAttendanceForCalendar(
    studentId: number
  ): Observable<AttendanceStatusForCalendar> {
    return this._http.get<AttendanceStatusForCalendar>(
      _API_HOSTNAME + 'studentdashboardcard3/' + studentId
    );
  }

  getStudentAttendanceDetails(): Observable<AttendanceStatusForCalendar> {
    return this._http.get<AttendanceStatusForCalendar>(
      _API_HOSTNAME + 'attendance/student/class/1'
    );
  }

  getStudentAttendanceReport(
    start: Date,
    end: Date,
    classNum: number,
    section: string
  ): Observable<StudentAttendanceReport[]> {
    let params = new HttpParams()
      .set('start_date', this.transformDate(start))
      .set('end_date', this.transformDate(end))
      .set('class_number', classNum.toString())
      .set('section', section);

    return this._http.get<StudentAttendanceReport[]>(
      _API_HOSTNAME + 'studentattendancereport?',
      { params: params }
    );
  }
  getStudentAttendanceReportByName(
    start: Date,
    end: Date,
    first_name: string,
    last_name?: string,
    middle_name?: string
  ): Observable<AttendanceReportByName[]> {
    let params = new HttpParams()
      .set('start_date', this.transformDate(start))
      .set('end_date', this.transformDate(end))
      .set('first_name', first_name)
      .set('last_name', last_name)
      .set('middle_name', middle_name);

    return this._http.get<AttendanceReportByName[]>(
      _API_HOSTNAME + 'studentattendancereport?',
      { params: params }
    );
  }

  updateStudentLeaveRecord(studentId: number, leaveDate: string, parentRemarks: string): Observable<string> {
    return this._http.put<string>(`${_API_HOSTNAME}leaves/student`, {
      params: {
        student_id: studentId,
        remarks: parentRemarks,
        leave_date: leaveDate,
      },
    });
  }

  getStudentMarkAttendance(
    classNumber: number,
    section: string,
    date: Date
  ): Observable<StudentMarkAttendanceRecords> {
    let params = new HttpParams()
      .set('class_number', classNumber.toString())
      .set('section', section)
      .set('date', this.transformDate(date));
    return this._http.get<StudentMarkAttendanceRecords>('/attendance/class/', {
      params: params,
    });
  }

  postStudentMarkAttendance(
    attendance: StudentMarkAttendance[],
    date: Date
  ): Observable<any> {
    let uploadData = <StudentAttendanceUpload>{
      attendance: attendance.map(
        (a) =>
          <StudentAttedanceUploadRecord>{
            status: a.status,
            roll_no: a.roll_no,
            remarks: a.remarks,
          }
      ),
      date: this.transformDate(date),
      updated_by: this.userService.currentUser.user_id,
    };
    return this._http.post<any>(
      _API_HOSTNAME + '/attendance/class/',
      uploadData
    );
  }

  //#endregion

  //#region teacher attendance
  getTeacherAttendanceReport(
    from?: Date,
    to?: Date,
    academicYear?: number
  ): Observable<TeacherAttendanceReport[]> {
    let params = new HttpParams()
      .set('from_date', this.transformDate(from))
      .set('to_date', this.transformDate(to));
    if (academicYear != null)
      params.set('academic_year', academicYear?.toString());
    return this._http.get<TeacherAttendanceReport[]>(
      _API_HOSTNAME + 'attendance/teacher/report',
      { params: params }
    );
  }

  getTeacherAttendanceReportByName(
    name: string,
    from?: Date,
    to?: Date,
    academicYear?: number
  ): Observable<AttendanceReportByName[]> {
    let params = new HttpParams()
      .set('from_date', this.transformDate(from))
      .set('to_date', this.transformDate(to))
    if (academicYear != null)
      params.set('academic_year', academicYear?.toString());
    return this._http.get<AttendanceReportByName[]>(
      _API_HOSTNAME + 'attendance/teacher/name/' + name,
      { params: params }
    );
  }

  getTeacherMarkAttendance(date: Date): Observable<TeacherMarkAttendance[]> {
    return this._http.get<TeacherMarkAttendance[]>(
      _API_HOSTNAME +
      'attendance/teacher?attendance_date=' +
      this.transformDate(date)
    );
  }

  postTeacherMarkAttendance(
    attendance: TeacherMarkAttendance[],
    date: Date
  ): Observable<any> {
    var uploadAttendanceData = <TeacherAttendanceUpload>{
      attendance: attendance.map(
        (a) =>
          <TeacherAttedanceUploadRecord>{
            name: a.name,
            status: a.approval_status,
            remarks: a.remarks,
          }
      ),
      date: this.transformDate(date),
      updated_by: this.userService.currentUser.user_id,
    };
    return this._http.post<any>(
      _API_HOSTNAME + 'attendance/teacher',
      attendance
    );
  }
  //#endregion

  getApplicationStatus(user_id: number): Observable<ApplicationStatusCard[]> {
    return this._http.get<ApplicationStatusCard[]>(_API_HOSTNAME + 'submitleave/' + user_id);
  }


  getTeacherLatestDateAttendancePieChart(): Observable<AttendancePieChart> {
    return this._http.get<AttendancePieChart>(_API_HOSTNAME + 'attendance/teacher/daily');
  }

  postApplicationStatus(data: any, userId: number) {
    return this._http.post(_API_HOSTNAME + 'submitleave/' + userId, data);
  }

  getTodaysAbsentees(): Observable<TodaysAbsentees> {
    return this._http.get<TodaysAbsentees>(_API_HOSTNAME + 'attendance/details');
  }

  getAttendancePieChart(): Observable<AttendancePieChart> {
    return this._http.get<AttendancePieChart>(_API_HOSTNAME + 'attendance/daily');
  }

  getStudentLowAttendance(): Observable<StudentLowAttendance> {
    return this._http.get<StudentLowAttendance>(_API_HOSTNAME + 'attendance/low');
  }

  getStudentAttendanceByName(student_name: string): Observable<StudentAttendanceByName[]> {
    return this._http.get<StudentAttendanceByName[]>(_API_HOSTNAME + 'attendance/name/' + student_name);
  }

  getTeacherAttendanceByName(teacher_name: string) {
    return this._http.get(_API_HOSTNAME + 'attendance/teacher/name/' + teacher_name);
  }

  getTeacherTodaysAbsentees(): Observable<TeacherTodaysAbsentees[]> {
    var date = new Date();
    let attendance_date = '?attendance_date=' + date.getFullYear().toString() + "-" + date.getMonth().toString() + "-" + date.getDay().toString();
    return this._http.get<TeacherTodaysAbsentees[]>(_API_HOSTNAME + 'attendance/teacher' + attendance_date);
  }

  getTeacherLoginPieChart(teacherId: number): Observable<PieChartTeacherLogin[]> {
    return this._http.get<PieChartTeacherLogin[]>(_API_HOSTNAME + 'teacherattendancepiechart/' + teacherId);
  }

  getTeacherLoginLineChart(teacherId: number): Observable<ClassAttendanceStats> {
    return this._http.get<ClassAttendanceStats>(_API_HOSTNAME + 'teacherdashboardlinegraph/' + teacherId);
  }

  getStudentsWithLowAttendance(teacherId: number): Observable<StudentsWithLowAttendance[]> {
    return this._http.get<StudentsWithLowAttendance[]>(_API_HOSTNAME + 'attendance/low/' + teacherId);
  }

  getStudentAttendance(studentName: string): Observable<CheckStudentAttendanceTable[]> {
    return this._http.get<CheckStudentAttendanceTable[]>(_API_HOSTNAME + 'attendance/name/' + studentName);
  }

  getTeacherLeaveRecords(teacherId: number): Observable<LeaveRecordsTeacherLogin> {
    return this._http.get<LeaveRecordsTeacherLogin>(_API_HOSTNAME + 'attendance/leave/' + teacherId);
  }

  //to shift in new file leave.service.ts
  getTeacherLeaveHistory(empId: number): Observable<LeaveHistory[]> {
    return this._http.get<LeaveHistory[]>(_API_HOSTNAME + 'teacherdashboardleavehistory/' + empId);
  }
  getTeacherLeaveRecordCategory(empId: number): Observable<LeaveCategory[]> {
    return this._http.get<LeaveCategory[]>(_API_HOSTNAME + 'teacherdashboardleavecategory/' + empId);
  }









  //////////////////////////////////////////////////////////////////// To be Transfered to assgiment.service.ts //////////////////////////////////

  getStudentSubmittedAssignment(student_id : number){
    return this._http.get(_API_HOSTNAME + 'assignmenthistory/1');
  }

}

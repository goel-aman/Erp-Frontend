import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService } from 'src/services/attendance.service';
import { LeaveCategory, User } from 'src/models/models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-leave-record',
  templateUrl: './leave-record.component.html',
  styleUrls: ['./leave-record.component.css']
})
export class LeaveRecordComponent implements OnInit {
  //@Input() empId!: number;
  user: User = this.userService.currentUser;
  empId = this.user.emp_id;
  totalMedicalLeaves:number = 10;
  totalPrivilageLeaves:number = 20;
  totalCasualLeaves: number =8;
  categoryList : LeaveCategory[] = [];
  finalCategoryList : LeaveCategory[] = [];
  medicalTaken : boolean = false;
  privilageTaken : boolean = false;
  casualTaken : boolean = false;

  constructor(private readonly _attendanceService: AttendanceService,private readonly userService: UserService) { }

  ngOnInit() {
    this.getTeacherLeaveRecordCategory(this.empId);
  }

  getTeacherLeaveRecordCategory(empId: number) {
    this._attendanceService.getTeacherLeaveRecordCategory(empId)
      .subscribe((leaveCategory : LeaveCategory[]) => {
        for(const category of leaveCategory){
          if(category.type_of_leave == "Medical Leave"){
            this.medicalTaken = true;
            category.color = "orange";
            category.total_leaves = this.totalMedicalLeaves;
            category.percentage = (category.count/this.totalMedicalLeaves)*100;
          }else if(category.type_of_leave == "Privilage Leave"){
            this.privilageTaken = true;
            category.color = "green";
            category.total_leaves = this.totalPrivilageLeaves;
            category.percentage = (category.count/this.totalPrivilageLeaves)*100;
          }else if(category.type_of_leave == "Casual Leave"){
            this.casualTaken = true;
            category.color = "red";
            category.total_leaves = this.totalCasualLeaves;
            category.percentage = (category.count/this.totalCasualLeaves)*100;
          } 
          
          const categoryData: LeaveCategory = {
            count: category.count,
            type_of_leave: category.type_of_leave,
            total_leaves: category.total_leaves,
            percentage: category.percentage,
            color: category.color,
          }
          
          this.categoryList.push(categoryData);
        }
        //Below case is to be handled from backend 
        this.finalCategoryList = this.categoryList;
        for(const category of this.categoryList){
          if(!this.medicalTaken){
            this.finalCategoryList.splice(0,0,{count : 0,
              color : "orange",
              type_of_leave : "Medical Leave",
              total_leaves : this.totalMedicalLeaves,
              percentage : 0});
              break;
          }
          if(!this.privilageTaken){
            this.finalCategoryList.splice(1,0,{count : 0,
              color : "green",
              type_of_leave : "Privilage Leave",
              total_leaves : this.totalPrivilageLeaves,
              percentage : 0});
              break;
          }
          if(!this.casualTaken){
            this.finalCategoryList.splice(2,0,{count : 0,
              color : "red",
              type_of_leave : "Casual Leave",
              total_leaves : this.totalCasualLeaves,
              percentage : 0});
              break;
          }
        }      
        console.log("final list 2:",this.finalCategoryList);
       },
       (error) => {
         console.log(error);
       })
       
  }

}

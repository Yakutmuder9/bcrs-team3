import { Component } from '@angular/core';
// import { UserService } from '../admin/users/user.service'
// import { User } from '../admin/users/user'

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectoryComponent {
  // users: User[]
  // successMessage: string
  // errorMessage: string
  // isLoading: boolean

  // constructor(private userService: UserService) {
  //   this.users = []
  //   this.successMessage = ''
  //   this.errorMessage = ''
  //   this.isLoading = true

  //   this.userService.getUsers().subscribe({
  //     next: (users: any) => {
  //       this.users = users
  //       console.log('User List:', this.users)
  //       this.isLoading = false
  //     },
  //     error: (err) => {
  //       this.errorMessage = err.message
  //       console.log(err)
  //       this.isLoading = false
  //     },
  //     complete: () => {
  //       this.isLoading = false
  //     }
  //   })
  // }


  // hideAlert() {
  //   setTimeout(() => {
  //     this.successMessage = ''
  //     this.errorMessage = ''
  //   }, 3000)
  // }
}

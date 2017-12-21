import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{Title}}</h1><hr/>
    <table>
    <tr><td>Name</td><td><input [(ngModel)]='Student.Name' name='Student.Name' /></td></tr>
    <tr><td>Surname</td><td><input [(ngModel)]='Student.Surname'name='Student.Surname' /></td></tr>
    <tr><td>Address</td><td><input [(ngModel)]='Student.Address'name='Student.Address' /></td></tr>
    <tr><td>Marks</td><td><input [(ngModel)]='Student.Marks'name='Student.Marks' /></td></tr>
    <button (click)='SaveRecord()' >Save</button>
    </table>
    <table>
    <tr>
    <th>Record Number</th><th>Name</th><th>Surname</th><th>Address</th><th>Marks</th><th>Edit</th><th>Delete</th>
    </tr>
    <tr *ngFor='let item of StudentList; let i = index'>
    <td>{{i}}</td><td>{{item.Name}}</td><td>{{item.Surname}}</td><td>{{item.Address}}</td><td>{{item.Marks}}</td><td>
    <button (click)='EditRecord(i)' >Edit</button></td>
    <button (click)='DeleteRecord(i)' >Delete</button>
    </tr>
    </table>
    `,
})
export class HomeComponent {

    Title: string;

    Student: StudentRecord;
    StudentList: StudentRecord[] = [];
    index: any;

    constructor() {
        this.Init();
    }

    Init() {
        this.Title = 'Add Update Delete Operation';
        this.index = 0;
        this.Student = {
            Name: '',
            Surname: '',
            Address: '',
            Marks: ''
        }
    }
    SaveRecord() {
        console.log(this.Student);
        if (this.index != 0) {
            this.index = 0;
        }
        else {
            this.StudentList.push(this.Student);
        }
        this.Init();
    }

    EditRecord(i: any) {
        console.log(i);
        this.index = i;
        this.Student = this.StudentList[i];
    }

    DeleteRecord(i: any) {
        console.log(i);
        this.StudentList.splice(i, 1);
    }
}



interface StudentRecord {
    Name: string;
    Surname: string;
    Address: string;
    Marks: string;
}
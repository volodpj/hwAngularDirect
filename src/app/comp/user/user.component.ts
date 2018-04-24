import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  editGo: boolean = false;
  name: string = "Volodymyr";
  lastName: string = "Putko";
  age: number = 32;
  job: string = "finace manadger";
  company: string = "TVD"


  constructor() { }

  ngOnInit() {
  }
  edit(){
    this.editGo = !this.editGo;
  }
}

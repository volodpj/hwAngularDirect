import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  punctList: string[] = ['Angular', 'Java', 'SQL', 'Pyton'];
  addSkill: boolean = false;
  newPunct: string;

  constructor() { }

  ngOnInit() {
  }
  addNewSkill(){
    this.addSkill = !this.addSkill;
  }

  addPunct(){
    this.punctList.push(this.newPunct);
  }
}

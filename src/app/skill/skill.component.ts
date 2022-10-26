/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Component, Input, OnInit} from '@angular/core';
import { Skill} from "../models/skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skill = new Skill("", "", "")

  constructor() { }

  ngOnInit(): void {
  }

}
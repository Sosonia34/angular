/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Developer} from "../models/developer";
import { Skill} from "../models/skill";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = new Developer(
    "Coco",
    "Chanel",
    25,
    "femme bien sur",
    "Aime les chats",
    [
      new Skill('Prenez le temps de me connaitre', "a vous de deviner", "a l'écoute"),
      new Skill('ah ah', "alors dous savez", "je ne sais pas")
    ])

  constructor() { }

  ngOnInit(): void {
  }

}
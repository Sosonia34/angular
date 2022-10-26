import { Skill } from "./skill";

export class Developer {

  constructor(
    public lastName: string,
    public firstName: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skills: Skill[],
    ) {}
}
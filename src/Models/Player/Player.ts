import { Guid } from "../../Helpers/Guid";

export class Player {
  constructor(public userName: string) {
    this.Id = Guid.newGuid();
  }
  public Id: Guid;
  public Score: number = 0;
}

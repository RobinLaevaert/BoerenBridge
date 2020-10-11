import { Guid } from "../../Helpers/Guid";
import { Card } from "../Deck/Card";
import { Player } from "./Player";

export class RoundPlayer {
  public Id: Guid;
  public Guess: number;
  public Cards: Card[];
  constructor(player: Player) {
    this.Id = player.Id;
    this.Guess = 0;
    this.Cards = [];
  }
}

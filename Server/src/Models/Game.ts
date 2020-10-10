import { Deck } from "./Deck/Deck";
import { Player } from "./player";
import { Round } from "./Round";


export class Game {
  constructor(public Players: Player[]) {
    this.GenerateRounds();
  }
  public Rounds: Round[];
  GenerateRounds() {
    let numberOfRounds = (Math.floor(52 / this.Players.length) * 2) - 1;
    this.Rounds = [...Array(numberOfRounds).keys()].map(
      (x) =>
        new Round(
          x + 1,
          this.Players
        )
    );
  }
}

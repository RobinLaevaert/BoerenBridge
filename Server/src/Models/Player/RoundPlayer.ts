import { Card } from "../Deck/Card";

export class RoundPlayer {
  constructor(public Id: number, public Guess: number, public Cards: Card[]) {}
}

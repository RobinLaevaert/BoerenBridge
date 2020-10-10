import { RoundPlayer } from "./Player/RoundPlayer";
import { Type } from "./Deck/Types";
import { Deck } from "./Deck/Deck";
import { Card } from "./Deck/Card";
import { Player } from "./player";

export class Round {
  constructor(public roundNumber: number, players: Player[]) {
    this.players = players.map((x) => new RoundPlayer(1, 0, []));
    this.init();
  }
  public trump: Type;

  public amountOfCards: number;
  public players: RoundPlayer[];

  init() {
    this.amountOfCards =
      this.roundNumber > Math.floor(52 / this.players.length)
        ? Math.floor(52 / this.players.length) * 2 - this.roundNumber
        : this.roundNumber;
    var deck = new Deck();
    for (let index = 0; index < this.amountOfCards; index++) {
      var lastCard: Card;
      this.players.forEach((x) => {
        lastCard = deck.drawCard();
        x.Cards.push(lastCard);
      });
      if (deck.deck.length === 0) this.trump = lastCard.type;
    }
    if (this.trump == null) {
      this.trump = deck.drawCard().type;
    }
  }
}

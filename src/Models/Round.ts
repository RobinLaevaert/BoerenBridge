import { RoundPlayer } from "./Player/RoundPlayer";
import { Type } from "./Deck/Types";
import { Deck } from "./Deck/Deck";
import { Card } from "./Deck/Card";
import { Player } from "./Player/Player";
import { PlayedCard } from "./Deck/PlayedCard";
import { PlayedPile } from "./PlayedPile";
import { Guid } from "../Helpers/Guid";

export class Round {
  constructor(public roundNumber: number, players: Player[]) {
    this.players = players.map((x) => new RoundPlayer(x));
    this.init();
  }
  public trump: Type;

  public amountOfCards: number;
  public players: RoundPlayer[];

  public readonly cardPile: PlayedCard[] = [];
  public readonly pileHistory: PlayedPile[] = [];

  private init() {
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

  layCard(card: Card, playerId: Guid){
    if(this.cardPile.some(x => x.PlayedBy.Id == playerId)) throw Error("Already played a card for this pile");
    if(!this.players.find(x => x.Id == playerId).Cards.some(y => y.value == card.value && y.type == card.type)) throw Error("You can't play this card");
    else{
      this.cardPile.push(new PlayedCard(this.players.find(x => x.Id == playerId), card));
      this.players.find(x => x.Id == playerId).Cards = this.players.find(x => x.Id == playerId).Cards.filter(x => x.type != card.type || x.value != card.value);
    }
    if(this.cardPile.length == this.players.length)this.validatePile();
  }

  private validatePile(){
    if(this.cardPile.length != this.players.length) throw Error("Not enough cards in pile");
    if(this.cardPile.map(x => this.cardPile.filter(y => y.type == x.type && y.value == x.value).length > 1).some(x => x == true)) throw Error("Duplicate cards in pile");
    if(this.cardPile.map(x => this.cardPile.filter(y => y.PlayedBy.Id == x.PlayedBy.Id).length > 1).some(x => x == true)) throw Error("someone played multiple cards in this pile");
    this.pileHistory.push(new PlayedPile(this.cardPile, this.trump));
    this.cardPile.length = 0;
  }
}

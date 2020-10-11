import { Shuffle } from "../../Helpers/Shuffler";
import { Card } from "./Card";
import { Type, Types } from "./Types";
import { Values } from "./Value";


export class Deck{
    public static readonly maxNumberOfCards = 64;
    public deck: Card[] = [];
    constructor() {
        
        var allCards = Types.PossibleTypes.flatMap(x => Values.PossibleValues.map(y => new Card(y,x)));
        this.deck = Shuffle(allCards);
    }

    drawCard() {
        return this.deck.length != 0  ? this.deck.pop() : null;
      }
}
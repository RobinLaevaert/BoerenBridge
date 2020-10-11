import { Card } from "./Deck/Card";
import { PlayedCard } from "./Deck/PlayedCard";
import { Type } from "./Deck/Types";

export class PlayedPile{
    public playedCards: PlayedCard[]
    constructor(playedCards: PlayedCard[], public trump: Type){
        this.playedCards = playedCards.map(x => new PlayedCard(x.PlayedBy, new Card(x.value, x.type)));
    };

    // GetWinningCard(){
    //     return this.playedCards[0];
    // }
}
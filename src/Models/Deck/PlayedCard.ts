import { RoundPlayer } from "../Player/RoundPlayer";
import { Card } from "./Card";

export class PlayedCard extends Card{
    constructor(public PlayedBy:RoundPlayer, Card: Card){
        super(Card.value, Card.type);
    }
}
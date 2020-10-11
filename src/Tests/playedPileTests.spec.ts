import { Player } from "../Models/Player/Player";
import { Type, Types } from "../Models/Deck/Types";
import { RoundPlayer } from "../Models/Player/RoundPlayer";



describe("GetWinnerTests", function(){
    const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`)).map(x => new RoundPlayer(x));
    it("AllFourCardsHaveSameSuitSoHighestCardWins", function(){
        var suit = Type.Clubs;

        var playedCards;
    })
});
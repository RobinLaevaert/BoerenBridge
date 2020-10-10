import { expect } from "chai";
import { Game } from "../Models/Game";
import { Player } from "../Models/player";

describe("GenerateGameTests", function () {
    it("GameWith3Players", function(){
        var game = new Game([...Array(3).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(33)
    });
    it("GameWith4Players", function(){
        var game = new Game([...Array(4).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(25)
    })
    it("GameWith5Players", function(){
        var game = new Game([...Array(5).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(19)
    })
    it("GameWith6Players", function(){
        var game = new Game([...Array(6).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(15)
    })
    it("GameWith7Players", function(){
        var game = new Game([...Array(7).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(13)
    })
    it("GameWith8Players", function(){
        var game = new Game([...Array(8).keys()].map((x) => new Player(`Test${x}`)));
        expect(game.Rounds.length).equal(11)
    })
});

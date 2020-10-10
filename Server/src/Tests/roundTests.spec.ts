import { expect } from "chai";
import { Player } from "../Models/player";
import { Round } from "../Models/Round";

describe("RoundTests 4 Players", function () {
  const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`));
  it("rounds1-12", function () {
    for (let index = 1; index < 13; index++) {
      var round = new Round(index, players);

      expect(round.amountOfCards).equal(index);
      expect(round.players).to.have.lengthOf(4);
      round.players.every((x) => expect(x.Cards).to.have.lengthOf(index));
      round.players.every((x) =>
        expect(
          round.players.filter((y) => x.Id != y.Id).flatMap((y) => y.Cards)
        ).to.not.include.members(x.Cards)
      );
      expect(round.trump).to.not.be.undefined;
    }
  });
  it("round13", function(){
    // Run 10 times to make sure that trump equals last dealt card.
    for (let index = 1; index < 10; index++) {
      var round = new Round(13, players);

      expect(round.amountOfCards).equal(13);
      expect(round.players).to.have.lengthOf(4);
      round.players.every((x) => expect(x.Cards).to.have.lengthOf(13));
      round.players.every((x) =>
        expect(
          round.players.filter((y) => x.Id != y.Id).flatMap((y) => y.Cards)
        ).to.not.include.members(x.Cards)
      );
      expect(round.trump).to.equal(round.players.slice(-1)[0].Cards.slice(-1)[0].type);
    }
  })
  it("rounds14-25", function () {
    for (let index = 14; index < 26; index++) {
      var round = new Round(index, players);

      expect(round.players).to.have.lengthOf(4);
      round.players.every((x) => expect(x.Cards).to.have.lengthOf(26-index));
      round.players.every((x) =>
        expect(
          round.players.filter((y) => x.Id != y.Id).flatMap((y) => y.Cards)
        ).to.not.include.members(x.Cards)
      );
      expect(round.trump).to.not.be.undefined;
    }
  });
});



describe("RoundTests 5 Players", function () {
  const players = [...Array(5).keys()].map((x) => new Player(`Test${x}`));
  it("rounds1-10", function () {
    for (let index = 1; index < 11; index++) {
      var round = new Round(index, players);

      expect(round.amountOfCards).equal(index);
      expect(round.players).to.have.lengthOf(5);
      round.players.every((x) => expect(x.Cards).to.have.lengthOf(index));
      round.players.every((x) =>
        expect(
          round.players.filter((y) => x.Id != y.Id).flatMap((y) => y.Cards)
        ).to.not.include.members(x.Cards)
      );
      expect(round.trump).to.not.be.undefined;
    }
  });
  it("rounds11-19", function () {
    for (let index = 11; index < 20; index++) {
      var round = new Round(index, players);

      expect(round.players).to.have.lengthOf(5);
      round.players.every((x) => expect(x.Cards).to.have.lengthOf(20-index));
      round.players.every((x) =>
        expect(
          round.players.filter((y) => x.Id != y.Id).flatMap((y) => y.Cards)
        ).to.not.include.members(x.Cards)
      );
      expect(round.trump).to.not.be.undefined;
    }
  });
});

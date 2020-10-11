import { expect } from "chai";
import { Player } from "../Models/Player/Player";
import { Round } from "../Models/Round";

describe("initialize RoundTests 4 Players", function () {
  const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`));
  it("initialize rounds1-12", function () {
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
  it("initialize round13", function(){
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
  it("initialize rounds14-25", function () {
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



describe("initialize RoundTests 5 Players", function () {
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
  it("initialize rounds11-19", function () {
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

describe("Laying cards Tests", function(){
  it("Happy flow 4 players laying cards", function(){
    const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`));
    var round = new Round(4, players);

    // Pile 1
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(4));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(1);
    expect(round.pileHistory[0].playedCards.length).equal(4);

    // Pile 2
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(3));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(2);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(4))

    // Pile 3
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(2));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(3);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(4))

    // Pile 4
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(1));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(4);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(4));
    round.players.every(x => expect(x.Cards.length).equal(0));
  });

  it("Happy flow 5 players laying cards", function(){
    const players = [...Array(5).keys()].map((x) => new Player(`Test${x}`));
    var round = new Round(4, players);

    // Pile 1
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(4));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    round.layCard(round.players[4].Cards[0], round.players[4].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(1);
    expect(round.pileHistory[0].playedCards.length).equal(5);

    // Pile 2
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(3));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    round.layCard(round.players[4].Cards[0], round.players[4].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(2);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(5))

    // Pile 3
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(2));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    round.layCard(round.players[4].Cards[0], round.players[4].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(3);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(5))

    // Pile 4
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(1));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    round.layCard(round.players[1].Cards[0], round.players[1].Id);
    round.layCard(round.players[2].Cards[0], round.players[2].Id);
    round.layCard(round.players[3].Cards[0], round.players[3].Id);
    round.layCard(round.players[4].Cards[0], round.players[4].Id);
    expect(round.cardPile).to.be.empty;
    expect(round.pileHistory.length).equal(4);
    round.pileHistory.every(x => expect(x.playedCards.length).equal(5));
    round.players.every(x => expect(x.Cards.length).equal(0));
  });

  it("player cannot lay more than 1 card in a pile", function () {
    const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`));
    var round = new Round(4, players);
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(4));
    round.layCard(round.players[0].Cards[0], round.players[0].Id);
    expect(function(){round.layCard(round.players[0].Cards[0], round.players[0].Id)}).to.throw(Error, "Already");
  });

  it("player cannot lay a card that he does not have in his hand", function () {
    const players = [...Array(4).keys()].map((x) => new Player(`Test${x}`));
    var round = new Round(4, players);
    expect(round.cardPile).to.be.empty;
    round.players.every(x => expect(x.Cards.length).equal(4));
    expect(function(){round.layCard(round.players[1].Cards[0], round.players[0].Id)}).to.throw(Error, "can't");
  });
});

export class Value {
    constructor(public name: string, public value: number) {}
  }
export  class Values {
  public static PossibleValues = [
    new Value("2", 1),
    new Value("3", 2),
    new Value("4", 3),
    new Value("5", 4),
    new Value("6", 5),
    new Value("7", 6),
    new Value("8", 7),
    new Value("9", 8),
    new Value("10", 9),
    new Value("J", 10),
    new Value("Q", 11),
    new Value("K", 12),
    new Value("A", 13),
  ];
}


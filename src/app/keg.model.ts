export class Keg {
  public pints: number = 124;
  public color: string = "";
  public soldOut: boolean = false;
  constructor(public brand: string, public name: string, public price: number, public alcContent: number) { }
}

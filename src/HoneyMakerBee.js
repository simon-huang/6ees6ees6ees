class HoneyMakerBee extends Bee {
  constructor () {
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }
  static makeHoney () {
    this.honeyPot++
  }
  static giveHoney () {
    if (this.honeyPot > 0) {
      this.honeyPot--
    }
  }
};

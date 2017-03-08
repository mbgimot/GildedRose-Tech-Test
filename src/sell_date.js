const DAY = 1;

class SellDate {
  constructor(items) {
    this.items = items;
  }

  adjust(i) {
    this.items[i].sellIn -= DAY;
  }
  date(i) {
    return this.items[i].sellIn <= 0;
  }

  check(i, bound) {
    return this.items[i].sellIn <= bound;
  }
}

const DAY = 1;

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      switch(this.items[i].name) {
        case 'Sulfuras, Hand of Ragnaros':
          break;

        default:
          this.adjustSellByDate(i);
      }

      switch(this.items[i].name) {

        case 'Aged Brie':
          if (this.sellCheck(i,1)) {
            this.adjustQuality(i, 2);
          }
          else {
            this.adjustQuality(i, 1);
          }
          break;

        case 'Sulfuras, Hand of Ragnaros':
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.sellByDate(i)) {
            this.items[i].quality = 0;
          }
          else if (this.sellCheck(i,6)) {
            this.adjustQuality(i, 3);
          }
          else if (this.sellCheck(i,11)) {
            this.adjustQuality(i, 2);
          }
          else {
            this.adjustQuality(i, 1);
          }
          break;

        case 'Conjured':
          this.adjustQuality(i,-2);
          break;

        default:
          if (this.sellByDate(i)) {
            this.adjustQuality(i,-2);
          }
          else {
            this.adjustQuality(i,-1);
          }
          break;
        }
      }
    return this.items;
  }

  qualityCheck(i, bound) {
    if (bound < 0) {
      return this.items[i].quality < -bound;
    }
    else {
      return this.items[i].quality > bound;
    }
  }

  sellCheck(i, bound) {
    return this.items[i].sellIn < bound;
  }

  adjustQuality(i, change) {
      if ((this.items[i].quality + change) < 0 ) {
        this.items[i].quality = 0;
      }
      else if((this.items[i].quality + change) > 50 ) {
        this.items[i].quality = 50;
      }
      else {
      this.items[i].quality += change;
    }
  }

  adjustSellByDate(i) {
    this.items[i].sellIn -= DAY;
  }

  sellByDate(i) {
    return this.items[i].sellIn <= 0;
  }
}

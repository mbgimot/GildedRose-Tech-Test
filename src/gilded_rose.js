const CHANGE = 1;

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.qualityCheck(i,0)) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.qualityAdjust(i, -1);
          }
        }
      } else {
        if (this.qualityCheck(i, -50)) {
          this.qualityAdjust(i, 1);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.sellByDate(i, 11)) {
              if (this.qualityCheck(i, -50)) {
                this.qualityAdjust(i, 1);
              }
            }
            if (this.sellByDate(i,6)) {
              if (this.qualityCheck(i, -50)) {
                this.qualityAdjust(i, 1);
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.sellByDate(i,0)) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.qualityCheck(i,0)) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.qualityAdjust(i, -1);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.qualityCheck(i, -50)) {
            this.qualityAdjust(i, 1);
          }
        }
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

  sellByDate(i, bound) {
    return this.items[i].sellIn < bound;
  }

  qualityAdjust(i, change) {
    this.items[i].quality = this.items[i].quality + change;
  }
}

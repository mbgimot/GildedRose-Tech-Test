const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

class QualityControl {
  constructor(items) {
    this.items = items;
  }

  adjust(i, change) {
      if ((this.items[i].quality + change) < MIN_QUALITY ) {
        this.items[i].quality = MIN_QUALITY;
      }
      else if((this.items[i].quality + change) > MAX_QUALITY ) {
        this.items[i].quality = MAX_QUALITY;
      }
      else {
      this.items[i].quality += change;
    }
  }
}

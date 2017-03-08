class QualityControl {
  constructor(items) {
    this.items = items;
  }

  adjust(i, change) {
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
}

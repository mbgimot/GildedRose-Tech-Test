class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    const sellBy = new SellDate(this.items);
    const quality = new QualityControl(this.items);
    for (var i = 0; i < this.items.length; i++) {

      switch(this.items[i].name) {
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          sellBy.adjust(i);
      }

      switch(this.items[i].name) {
        case 'Aged Brie':
          if (sellBy.date(i)) {
            quality.adjust(i, 2);
          }
          else {
            quality.adjust(i, 1);
          }
          break;

        case 'Sulfuras, Hand of Ragnaros':
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          if (sellBy.date(i)) {
            this.items[i].quality = 0;
          }
          else if (sellBy.check(i,5)) {
            quality.adjust(i, 3);
          }
          else if (sellBy.check(i,10)) {
            quality.adjust(i, 2);
          }
          else {
            quality.adjust(i, 1);
          }
          break;

        case 'Conjured Mana Cake':
          quality.adjust(i,-2);
          break;

        default:
          if (sellBy.date(i)) {
            quality.adjust(i,-2);
          }
          else {
            quality.adjust(i,-1);
          }
          break;
        }
      }
    return this.items;
  }
}

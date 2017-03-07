describe("Gilded Rose", function() {

  describe('foo', function(){
    it("should foo", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("foo's sellin decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("foo's quality decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('Aged Brie', function(){
    it("should Aged Brie", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("Brie's sellIn decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });

    it("Brie's quality increases over time", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', function(){
    it("should Sulfuras, Hand of Ragnaros", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

    it("Sulfura's sellIn never changes", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("Sulfura's quality never changes", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', function(){
    describe('>10 days', function(){
      it("should display Backstage passes", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      });

      it("Backstage passes sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(14);
      });

      it("Backstage passes quality should increase by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(21);
      });
    });

    describe("5 < days <= 10", function(){
      it("should display Backstage passes", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      });

      it("Backstage passes sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(9);
      });

      it("Backstage passes quality should increase by 2", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(22);
      });
    });

    describe('days<=5', function(){
      it("should display Backstage passes", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      });

      it("Backstage passes sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
      });

      it("Backstage passes quality should increase by 3", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(23);
      });
    });

  });


});

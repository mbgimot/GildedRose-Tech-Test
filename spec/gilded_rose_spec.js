describe("Gilded Rose", function() {

  describe('foo', function(){
    it("should foo", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("sellin decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("quality should degrade twice as fast, once the sell by date has passed", function() {
      const gildedRose = new Shop([ new Item("foo", -1, 5) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });

    it("quality of an item is never negative", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    xit("quality of an item is never > 50", function() {
      const gildedRose = new Shop([ new Item("foo", 10, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe('Conjured', function(){
    it("should Conjured", function() {
      const gildedRose = new Shop([ new Item("Conjured", 1, 1) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Conjured");
    });

    it("sellin decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("Conjured", 2, 4) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });

    it("quality decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("Conjured", 2, 4) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });
  });

  describe('Aged Brie', function(){
    it("should Aged Brie", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("sellIn decreases by 1 per day", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });

    it("quality increases over time", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });

    it("quality is never > 50", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 2, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', function(){
    it("should Sulfuras, Hand of Ragnaros", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    });

    it("sellIn never changes", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality never changes", function() {
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

      it("sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(14);
      });

      it("quality should increase by 1", function() {
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

      it("sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(9);
      });

      it("quality should increase by 2", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(22);
      });
    });

    describe('days<=5', function(){
      it("Backstage passes", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      });

      it("sellIn should decrease by 1", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
      });

      it("quality should increase by 3", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(23);
      });

      it("quality should drop to 0 after the concert", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });

  });


});

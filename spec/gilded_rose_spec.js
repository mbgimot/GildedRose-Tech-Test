describe("Gilded Rose", function() {

  describe('foo', function(){
    it("should foo", function() {
      const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("should display foo's quality", function() {
      const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should display foo's sellIn", function() {
      const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
    });
  });

  describe('Aged Brie', function(){
    it("should Aged Brie", function() {
      const gilgedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("should display Aged Brie's quality", function() {
      const gilgedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });

    it("should display Aged Brie's sellIn", function() {
      const gilgedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });
  });
});

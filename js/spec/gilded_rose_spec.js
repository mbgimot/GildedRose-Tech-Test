describe("Gilded Rose", function() {

  it("should foo", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should display foo's sellIn", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });

});

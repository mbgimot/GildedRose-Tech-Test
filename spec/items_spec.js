describe("Items", function() {
  const item = new Item("foo", 1, 1);

  it('should have a name', function(){
    expect(item.name).toEqual("foo");
  });

  it('should have a sellIn', function(){
    expect(item.sellIn).toEqual(1);
  });

  it('should have a quality', function(){
    expect(item.quality).toEqual(1);
  });
});

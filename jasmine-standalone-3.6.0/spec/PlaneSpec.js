'use strict';

describe("Plane", function() {
    var plane;
    var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  it ("should be an instance of Plane", function() {
    expect(plane).toBeInstanceOf(Plane)
  }); 

  it ("should respond to #land", function() {
    expect(plane.land).not.toBeUndefined();
  })

});
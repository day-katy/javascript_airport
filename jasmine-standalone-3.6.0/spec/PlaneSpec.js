'use strict';

describe("Plane", function() {
    var plane;
    var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it ("should be an instance of Plane", function() {
    expect(plane).toBeInstanceOf(Plane)
  }); 

  it ("can #land at airport", function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it ("can #takeoff from an airport", function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
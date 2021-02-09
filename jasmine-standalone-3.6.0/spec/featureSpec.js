'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
    // expect(airport.planes()).toEqual([]);
  });

  it('planes can be instructed to takeoff from an airport', function() {
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  })
});
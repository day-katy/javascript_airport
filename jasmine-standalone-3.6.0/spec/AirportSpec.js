'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it ("should be an instance of Airport class", function() {
    expect(airport).toBeInstanceOf (Airport);
  });

  it ("should be empty by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  it ("can clear planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it ("can clear planes for takeoff", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  })
  
});
'use strict';

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it ("should be an instance of Airport class", function() {
    expect(airport).toBeInstanceOf (Airport);
  });

  it ("should be empty by default", function() {
    expect(airport.planes()).toEqual([]);
  });
  
});
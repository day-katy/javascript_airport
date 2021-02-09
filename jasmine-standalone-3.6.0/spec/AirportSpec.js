'use strict';

describe("Airport", function() {
  var airport;
  // var plane;

  beforeEach(function() {
    airport = new Airport();
  })

  it ("should be an instance of Airport class", function() {
    expect(airport).toBeInstanceOf (Airport)
  }); 

  it ("should respond to landing function", function() {
    expect(airport.land).not.toBeUndefined();
  })
  
});
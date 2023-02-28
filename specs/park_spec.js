const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
  let islaNublar;
  let islaSorna;
  let deinonychus;
  let tRex;
  let brachiosaurus;

  beforeEach(function () {
    deinonychus = new Dinosaur("Deinonychus", "carnivore", 100);
    tRex = new Dinosaur("T-Rex", "carnivore", 1000);
    brachiosaurus = new Dinosaur("Brachiosaurus", "herbivore", 500);

    islaSorna = new Park('Isla Sorna', 120);
    islaNublar = new Park('Isla Nublar', 100, [deinonychus, tRex, brachiosaurus, tRex, deinonychus, brachiosaurus]);
  })

  it('should have a name', function () {
    const actual = islaSorna.name;
    assert.strictEqual(actual, "Isla Sorna");
  });

  it('should have a ticket price', function () {
    const actual = islaSorna.price;
    assert.strictEqual(actual, 120);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = islaSorna.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    islaSorna.addDinosaur(tRex);
    const actual = islaSorna.dinosaurs;
    assert.deepStrictEqual(actual, [tRex]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    islaNublar.removeDinosaur(tRex);
    const actual = islaNublar.dinosaurs;
    const expected = [deinonychus, brachiosaurus, tRex, deinonychus, brachiosaurus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = islaNublar.getMostPopularDinosaur();
    assert.deepStrictEqual(actual, tRex);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = islaNublar.getDinosaursWithSpecies("Deinonychus");
    assert.deepStrictEqual(actual, [deinonychus, deinonychus]);
  });


  it('should be able to calculate the total number of visitors per day', function () {
    const actual = islaNublar.getVisitorsPerDay();
    assert.strictEqual(actual, 3200);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = islaNublar.getVisitorsPerYear();
    assert.strictEqual(actual, 1168000);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = islaNublar.getRevenuePerYear();
    assert.strictEqual(actual, 116800000)
  });

  it('should be able to remove all dinosaurs of a species', function () {
    islaNublar.removeAllBySpecies('T-Rex');
    const actual = islaNublar.dinosaurs;
    assert.deepStrictEqual(actual, [deinonychus, brachiosaurus, deinonychus, brachiosaurus])
  });

  it('should be able toget the number of all of the diet types in park', function () {
    const actual = islaNublar.getNumberOfDinosWithDiets();
    const expected = { "carnivore": 4, "herbivore": 2 };
    assert.deepStrictEqual(actual, expected);
  });





});

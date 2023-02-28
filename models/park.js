const Park = function (name, price, dinosaurs = []) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};
module.exports = Park
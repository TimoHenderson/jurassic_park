const Park = function (name, price, dinosaurs = []) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

module.exports = Park
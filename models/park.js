const Park = function (name, price, dinosaurs = []) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const dinoIndex = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dinoIndex, 1);
};

Park.prototype.getMostPopularDinosaur = function () {
    let mostPopularDinosaur = null;
    let highestPopularity = 0;
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestPopularity) {
            highestPopularity = dinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = dinosaur;
        }
    }
    return mostPopularDinosaur;
};

Park.prototype.getDinosaursWithSpecies = function (species) {
    const dinosWithSpecies = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosWithSpecies.push(dinosaur);
        }
    }
    return dinosWithSpecies;
};

Park.prototype.getVisitorsPerDay = function () {
    let visitorsPerDay = 0;
    for (const dinosaur of this.dinosaurs) {
        visitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return visitorsPerDay;
};

Park.prototype.getVisitorsPerYear = function () {
    return this.getVisitorsPerDay() * 365;
};

Park.prototype.getRevenuePerYear = function () {
    return this.getVisitorsPerYear() * this.price;
};

Park.prototype.removeAllBySpecies = function (species) {
    for (let i = this.dinosaurs.length - 1; i >= 0; i--) {
        if (this.dinosaurs[i].species === species) {
            this.dinosaurs.splice(i, 1);
        }
    }
};

module.exports = Park
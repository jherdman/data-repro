import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addCar() {
      let carName = this.carName;

      let car = this.store.createRecord('car', {
        name: carName,
      });

      return car.save().then(() => {
        this.set('carName');
      });
    },

    addDriver(car) {
      let driverName = this.driverName;

      let driver = this.store.createRecord('driver', {
        name: driverName,
        car,
      });

      return driver.save().then(() => {
        this.set('driverName');
      });
    },
  }
});

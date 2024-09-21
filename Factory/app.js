import VehicleFactory from './vehicleFactory.js';

const factory = new VehicleFactory();

const car = factory.createVehicle('car');
car.drive(); // Output: Driving a car

const bike = factory.createVehicle('bike');
bike.ride(); // Output: Riding a bike
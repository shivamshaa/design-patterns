class Car {
    drive() {
        console.log('Driving a car');
    }
}

class Bike {
    ride() {
        console.log('Riding a bike');
    }
}

class VehicleFactory {
    createVehicle(type) {
        if (type === 'car') return new Car();
        if (type === 'bike') return new Bike();
        return null;
    }
}

export default VehicleFactory;
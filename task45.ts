function store_car_info(manufacturer: string, model: string, ...options: string[]): object {
    let car_info: any = {
        "manufacturer": manufacturer,
        "model": model
    };
    for (let i = 0; i < options.length; i++) {
        let option = options[i].split(":");
        let key = option[0].trim();
        let value = option[1].trim();
        car_info[key] = value;
    }
    return car_info;
}

let car1 = store_car_info("Toyota", "Camry", "Color: Red", "Year: 2022");
let car2 = store_car_info("Honda", "Civic", "Color: Blue", "Transmission: Automatic", "Sunroof: Yes");
let car3 = store_car_info("Ford", "Mustang", "Color: Yellow");

console.log(car1);
console.log(car2);
console.log(car3);



// { manufacturer: 'Toyota', model: 'Camry', Color: 'Red', Year: '2022' }
// {
//   manufacturer: 'Honda',
//   model: 'Civic',
//   Color: 'Blue',
//   Transmission: 'Automatic',
//   Sunroof: 'Yes'
// }
// { manufacturer: 'Ford', model: 'Mustang', Color: 'Yellow' }
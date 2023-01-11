function createUser({name, isPaid}: {name: string, isPaid: boolean}):{} {
    return {name, isPaid}
}
console.log(createUser({name: "User Rajesh", isPaid: false}));

// Type Aliases
type User = {
    readonly id: number;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

function createBetterUser(user: User):{} {
    return user
}
console.log(createBetterUser(
{id: 9471062, name: "username", email: "rajesh@gmail.com", isActive: true}
));

let myUser: User = {
    id: 740165,
    name: "John",
    email: "john@gmail.com",
    isActive: true,
}

myUser.email = "doe@gmail.com";
// Cannot update id because it is readonly
// myUser.id = 984630;

class Product {
    constructor(
        // If you don't mention anything then by default it is public
        public name: string, 
        // private is accessible only with the declared class
        // protected is accessible only with the declared and inherited class
        private brand: string
    ) {}
    // getter method
    get getProductInfo(): string {
        return `This is a ${this.name} T-Shirt by ${this.brand}`
    }
    // setter method
    set setProductBrand(brandName: string) {
        this.brand = brandName;
    }
}

const TShirt = new Product("Round color", "Arrow");
TShirt.name = "V-Shape";
console.log(TShirt.getProductInfo);
TShirt.setProductBrand = "Nike";
console.log(TShirt);


// TShirt.brand;

export {}

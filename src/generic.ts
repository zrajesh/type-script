function identity<Type>(data: Type): Type {
    return data;
}
console.log(identity("Hello generic"));
console.log(identity(3));
console.log(identity(true));

function getProducts<T>(products: T[]): T {
    products.length;
    return products[2];
}
console.log(getProducts(["apple", "mango", "cherry"]));


export {}
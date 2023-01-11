function addTwo(num: number): number {
    return num + 2;
    // return "Phew string"
}
console.log(addTwo(3));

function getUpperCase(text: string) {
    return text.toUpperCase()
}
console.log(getUpperCase("rajesh"));

function signupUser(name: string, email: string, isPaid: boolean) {
    return {name, email, isPaid}
}
console.log(signupUser("Rajesh", "rajesh@gmail.com", true));

const loginUser = (email: string, password: string, isPaid: boolean = false) => {
    return {email, password, isPaid}
}
console.log(loginUser("Rajesh", "rajesh@gmail.com"));

function getValue(data: number): string | boolean {
    if (data > 5) {
        return true
    }
    return "200 OK"
}
console.log(getValue(6));

const logMsg = (msg: string): void => {
    console.log(msg);
}


export {}
//https://github.com/babel/babel/issues/8669

class Person {
    constructor(public name: string) {}
}

const Person2 = class {
    constructor(public name: string) {}
}

const bob = new Person("Roberto");
expect(bob.name).toBe("Roberto");

const ned = new Person2("Eddard");
expect(ned.name).toBe("Eddard");

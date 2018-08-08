function hello1(name) {
    console.log("Hello, " + name + "!");
}

function hello2(name) {
    console.log("Hello again, " + name + "!");
}

module.exports = {
    "hello1": hello1,
    "hello2": hello2
};
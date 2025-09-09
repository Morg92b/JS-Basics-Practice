// Class JS

class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    aire() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle(5, 10)
console.log(rectangle.aire());
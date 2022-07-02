function parseCount(number) {
    if (!Number.parseInt(number)) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseInt(number);
    }
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    
    }

    getPerimeter(a, b, c) {
        return this.a + this.b + this.c;
    }

    getArea(a, b, c) {
        const p = this.getPerimeter(a, b, c) / 2;
        return Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {

    try {
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch(err) {  
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}

// 1

class Rectagle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const square = new Rectagle(10, 30);
console.log(square);

//2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discount) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
  }
}

const book = new Product("Book", 20);
book.applyDiscount(0.5);
console.log(book);

// 3

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discount() {
    const newPrice = this.price * 0.6;
    this.price = newPrice;
  }
}
const product1 = new Products("Iphone", "999");
product1.discount();
console.log(product1.price);

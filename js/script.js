let products = [
    {
        nutKind: 'Hazelnuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 10.00,
        nutPrice: 9.00,
        nutDescription: 'Come get your hazelnuts, they are on sale!!',
        nutRating: 5,
    },
    {
        nutKind: 'Almonds',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 20.00,
        nutPrice: 18.00,
        nutDescription: '10% sale oon almonds!',
        nutRating: 4.4, 
    },
    {
        nutKind: 'Cashews',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 30.00,
        nutPrice: 27.00,
        nutDescription: 'Trade your cash for some delicious cashews.',
        nutRating: 4.4,
    },
    {
        nutKind: 'Pecan',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 40.00,
        nutPrice: 36.00,
        nutDescription: 'Pack or peck of pecans.',
        nutRating: 4.4,   
    },
    {
        nutKind: 'Walnuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 50.00,
        nutPrice: 45.00,
        nutDescription: 'Anyway heres walnutwall',
        nutRating: 4.4,       
    },
    {
        nutKind: 'Brazil Nuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 60.00,
        nutPrice: 48.00,
        nutDescription: 'Exotic nuts at a discount',
        nutRating: 4.4,   
    }
];

// console.table(products);

let productTable = document.querySelector('.grid-container')

products.forEach((product) => {

    let firstProduct = document.createElement(`article`);
    firstProduct.classList.add(`product`);

    firstProduct.innerHTML = `
            <header>
            <img src="img/${product.productImage}" alt="Product Image">
            <h3>Hazelnuts</h3>
            <data value="39"><del>$10.00</del> <ins>$9.00</ins></data>
            <p>Come get your hazelnuts, they are on sale!!.</p>
            <dl>
              <dt>Rating</dt>
              <dd>5 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
            </dl>
            <a href="#">see more</a>
          </header>
          <form>
            <fieldset>
              <legend>Sizes</legend>
              <ol>
                <li><label><input type="radio" name="size" value="1"> 1lb bag</label></li>
                <li><label><input type="radio" name="size" value="2"> 2lb bag</label></li>
                <li><label><input type="radio" name="size" value="13"> 13lb bag</label></li>
              </ol>
            </fieldset>
          </form>
          <footer>
            <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button type="button"><span class="material-icons">favorite</span></button>
          </footer>
    `

    productTable.appendChild(firstProduct);
    console.log(productTable)
});


let products = [
    {
        nutKind: 'Hazelnuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 10.00,
        nutPrice: 9.00,
        nutDescription: 'Come get your hazelnuts, they are on sale!!',
        nutRating: 5,
        nutSize: [1,2,3],
    },
    {
        nutKind: 'Almonds',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 20.00,
        nutPrice: 18.00,
        nutDescription: '10% sale oon almonds!',
        nutRating: 4.4, 
        nutSize: [2,3],
    },
    {
        nutKind: 'Cashews',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 30.00,
        nutPrice: 27.00,
        nutDescription: 'Trade your cash for some delicious cashews.',
        nutRating: 4.4,
        nutSize: [3],
    },
    {
        nutKind: 'Pecan',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 40.00,
        nutPrice: 36.00,
        nutDescription: 'Pack or peck of pecans.',
        nutRating: 4.4, 
        nutSize: [7],  
    },
    {
        nutKind: 'Walnuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 50.00,
        nutPrice: 45.00,
        nutDescription: 'Anyway heres walnutwall',
        nutRating: 4.4,
        nutSize: [2,3,4],       
    },
    {
        nutKind: 'Brazil Nuts',
        productImage: `hazelnuts-brown-nuts-open-68483.jpeg`,
        oldPrice: 60.00,
        nutPrice: 48.00,
        nutDescription: 'Exotic nuts at a discount',
        nutRating: 4.4, 
        nutSize: [1,2,3],  
    }
];

// console.table(products);

let productTable = document.querySelector('.grid-container')

products.forEach((product) => {

    let firstProduct = document.createElement(`article`);
    firstProduct.classList.add(`product`);

    let productSize = product.nutSize;
    // console.log(product.nutSize)

    

    let nutsizes = ``
    for (let i=0; i < productSize.length; i++)
    {
      let list = `<li><label><input type="radio" name="size" value="1"> ${productSize[i]} lb bag</label></li>`
      nutsizes += list;
    }
    

    firstProduct.innerHTML = `
            <header>
            <img src="img/${product.productImage}" alt="Product Image">
            <h3>${product.nutKind}</h3>
            <data value="39"><del>$${product.oldPrice}</del> <ins>$${product.nutPrice}</ins></data>
            <p>${product.nutDescription}</p>
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
                ${nutsizes}
              </ol>
            </fieldset>
          </form>
          <footer>
            <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button type="button"><span class="material-icons">favorite</span></button>
          </footer>
    `

    productTable.appendChild(firstProduct);
    // console.log(productTable)
});

let theFilteredResult = {
  query: ``
}

let filteredProductresults = document.
const filteredProductTable = function(products) {

}

const SortFilter = function() {
  let filterNuts = products.filter(function(product){

    let highPrice = product.nutPrice
    let lowPrice = product.lowPrice

    return (highPrice.include(theFilteredResult.query))

  })


}


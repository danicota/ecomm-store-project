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
        productImage: `almonds.jpg`,
        oldPrice: 20.00,
        nutPrice: 18.00,
        nutDescription: '10% sale oon almonds!',
        nutRating: 4.4, 
        nutSize: [1,2,3],
    },
    {
        nutKind: 'Cashews',
        productImage: `cashew-cores-1549580_1920.jpg`,
        oldPrice: 30.00,
        nutPrice: 27.00,
        nutDescription: 'Trade your cash for some delicious cashews.',
        nutRating: 4.4,
        nutSize: [1,2,3],
    },
    {
        nutKind: 'Pecan',
        productImage: `pecans.jpg`,
        oldPrice: 40.00,
        nutPrice: 36.00,
        nutDescription: 'Pack or peck of pecans.',
        nutRating: 4.4, 
        nutSize: [1,2,3],  
    },
    {
        nutKind: 'Walnuts',
        productImage: `walnuts.jpeg`,
        oldPrice: 50.00,
        nutPrice: 45.00,
        nutDescription: 'Anyway heres walnutwall',
        nutRating: 4.4,
        nutSize: [1,2,3],       
    },
    {
        nutKind: 'Brazil Nuts',
        productImage: `brazil_nuts.jpg`,
        oldPrice: 60.00,
        nutPrice: 48.00,
        nutDescription: 'Exotic nuts at a discount',
        nutRating: 4.4, 
        nutSize: [1,2,3],  
    }
];

// console.table(products);

let productTable = document.querySelector('.grid-container')

const sortFilter = document.querySelector(`#sort`);

const productToTable = function(product) {
  productTable.innerHTML = ``
    
  product.forEach((product) => {

    let firstProduct = document.createElement(`article`);
    firstProduct.classList.add(`product`);

    let productSize = product.nutSize;
  

    

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
});

}

let productarray = []
sortFilter.addEventListener(`click`, function() {
  const highLowFilter = (productarray) => {
    const productSort = (i,j) => {
      return j.nutPrice - i.nutPrice
    }
    products.sort(productSort)
    console.log(products)
    productToTable(products);
  }

  const lowHighFilter = (productarray) => {
    const productSort = (i,j) => {
      return i.nutPrice - j.nutPrice
    }
    products.sort(productSort)
    console.log(products)
    productToTable(products);
  }

  if (sortFilter.selectedIndex == 0) {
    highLowFilter(products)
  }

  else if (sortFilter.selectedIndex == 1) {
    lowHighFilter(products)
  }

})


productToTable(products);
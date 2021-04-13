class Products {

    render() {
        let htmlCatalog = ``;

        for (const element of CATALOG) {
          htmlCatalog += `
            <li class="products-element">
              <span class="products-element__name">${element.name}</span>
              <img class="products-element__img" src ="${element.img}" />
              <span class="products-element__price"> 
                🔥➜ ${element.price.toLocaleString()} $
              </span>
              <button class="products-element__btn">Добавить в корзину</button>
            </li>  
          `;
        }

        const html = `
          <ul class="products-container">
            ${htmlCatalog}
          </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const shoePage = new Products();
shoePage.render();
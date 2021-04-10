class Shoe {

    render() {
        let htmlCatalog = ``;

        for (const element of CATALOG) {
          htmlCatalog += `
            <li>
              <span>${element.name}</span>
              <img src ="${element.img}" />
              <span>${element.price}</span>
              <button>Добавить в корзину</button>
            </li>  
          `;
        }

        const html = `
          <ul>
            ${htmlCatalog}
          </ul>
        `;

        ROOT_SHOE.innerHTML = html;
    }
}

const shoePage = new Shoe();
shoePage.render();
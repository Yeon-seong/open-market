const $productContainer = document.querySelector('.product_container');
async function productPrint() {
  try {
    const response = await fetch('https://openmarket.weniv.co.kr/products/');
    const data = await response.json();

    data.results.forEach(function(goods) {
      const productItem = createProductItem(goods);
      $productContainer.appendChild(productItem);
    });

  } catch (error) {
    alert("상품을 불러오는 중 오류가 발생했습니다.");
    console.error('상품을 불러오는 중 오류가 발생했습니다', error);
  }
}



function createProductItem(goods) {
  const productItem = document.createElement('div');
  productItem.className = 'product_list_center';
  productItem.innerHTML = 
  `
    <a href="/product_detail.html?product_id=${goods.product_id}/">
      <figure>
        <img src="${goods.image}" class="product_image" alt="${goods.product_name}" />
        <figcaption class="product_store_name">${goods.store_name}</figcaption>
      </figure>

      <h2 class="product_title_name">${goods.product_name}</h2>
      <p class="product_price">
        ${goods.price.toLocaleString()}
        <span class="product_price_unit">원</span>
      </p>
    </a>
  `;
  return productItem;
}
document.addEventListener('DOMContentLoaded', productPrint);
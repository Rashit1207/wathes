const header = `
	<!--top-header-->
  <div class="top-header">
    <div class="container">
      <div class="top-header-main">
        <div class="col-md-6 top-header-left">
          <div class="drop">
            <div class="box">
              <select tabindex="4" class="dropdown drop">
                <option value="" class="label">Dollar :</option>
                <option value="1">Dollar</option>
                <option value="2">Euro</option>
              </select>
            </div>
            <div class="box1">
              <select tabindex="4" class="dropdown">
                <option value="" class="label">English :</option>
                <option value="1">English</option>
                <option value="2">French</option>
                <option value="3">German</option>
              </select>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-6 top-header-left">
          <div class="cart box_1">
            <a href="checkout.html">
              <div class="total">
							<span>$</span>
                <span class="simpleCart_total"></span>
              </div>
              <img src="images/cart-1.png" alt="" />
            </a>
            <p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>
            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <!--top-header-->
  <!--start-logo-->
  <div class="logo">
    <a href="index.html">
      <h1>Luxury Watches</h1>
    </a>
  </div>
  <!--start-logo-->
  <!--bottom-header-->
  <div class="header-bottom">
    <div class="container">
      <div class="header">
        <div class="col-md-9 header-left">
          <div class="top-nav">
            <ul class="memenu skyblue">
              <li class="active"><a href="index.html">Home</a></li>
              <li class="grid"><a href="#">Men</a>
                <div class="mepanel">
                  <div class="row">
                    <div class="col1 me-one">
                      <h4>Shop</h4>
                      <ul>
                        <li><a href="products.html">New Arrivals</a></li>
                        <li><a href="products.html">Blazers</a></li>
                        <li><a href="products.html">Swem Wear</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Handbags</a></li>
                        <li><a href="products.html">T-Shirts</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">My Shopping Bag</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Style Zone</h4>
                      <ul>
                        <li><a href="products.html">Shoes</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">Brands</a></li>
                        <li><a href="products.html">Coats</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Trousers</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Popular Brands</h4>
                      <ul>
                        <li><a href="products.html">499 Store</a></li>
                        <li><a href="products.html">Fastrack</a></li>
                        <li><a href="products.html">Casio</a></li>
                        <li><a href="products.html">Fossil</a></li>
                        <li><a href="products.html">Maxima</a></li>
                        <li><a href="products.html">Timex</a></li>
                        <li><a href="products.html">TomTom</a></li>
                        <li><a href="products.html">Titan</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="grid"><a href="#">Women</a>
                <div class="mepanel">
                  <div class="row">
                    <div class="col1 me-one">
                      <h4>Shop</h4>
                      <ul>
                        <li><a href="products.html">New Arrivals</a></li>
                        <li><a href="products.html">Blazers</a></li>
                        <li><a href="products.html">Swem Wear</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Handbags</a></li>
                        <li><a href="products.html">T-Shirts</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">My Shopping Bag</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Style Zone</h4>
                      <ul>
                        <li><a href="products.html">Shoes</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">Brands</a></li>
                        <li><a href="products.html">Coats</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Trousers</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Popular Brands</h4>
                      <ul>
                        <li><a href="products.html">499 Store</a></li>
                        <li><a href="products.html">Fastrack</a></li>
                        <li><a href="products.html">Casio</a></li>
                        <li><a href="products.html">Fossil</a></li>
                        <li><a href="products.html">Maxima</a></li>
                        <li><a href="products.html">Timex</a></li>
                        <li><a href="products.html">TomTom</a></li>
                        <li><a href="products.html">Titan</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="grid"><a href="#">Kids</a>
                <div class="mepanel">
                  <div class="row">
                    <div class="col1 me-one">
                      <h4>Shop</h4>
                      <ul>
                        <li><a href="products.html">New Arrivals</a></li>
                        <li><a href="products.html">Blazers</a></li>
                        <li><a href="products.html">Swem Wear</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Handbags</a></li>
                        <li><a href="products.html">T-Shirts</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">My Shopping Bag</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Style Zone</h4>
                      <ul>
                        <li><a href="products.html">Shoes</a></li>
                        <li><a href="products.html">Watches</a></li>
                        <li><a href="products.html">Brands</a></li>
                        <li><a href="products.html">Coats</a></li>
                        <li><a href="products.html">Accessories</a></li>
                        <li><a href="products.html">Trousers</a></li>
                      </ul>
                    </div>
                    <div class="col1 me-one">
                      <h4>Popular Brands</h4>
                      <ul>
                        <li><a href="products.html">499 Store</a></li>
                        <li><a href="products.html">Fastrack</a></li>
                        <li><a href="products.html">Casio</a></li>
                        <li><a href="products.html">Fossil</a></li>
                        <li><a href="products.html">Maxima</a></li>
                        <li><a href="products.html">Timex</a></li>
                        <li><a href="products.html">TomTom</a></li>
                        <li><a href="products.html">Titan</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="grid"><a href="typo.html">Blog</a>
              </li>
              <li class="grid"><a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="col-md-3 header-right">
          <div class="search-bar">
            <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}">
            <input type="submit" value="">
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>`
;

const footer = `
<!--information-starts-->
<div class="information">
  <div class="container">
    <div class="infor-top">
      <div class="col-md-3 infor-left">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#"><span class="fb"></span>
              <h6>Facebook</h6>
            </a></li>
          <li><a href="#"><span class="twit"></span>
              <h6>Twitter</h6>
            </a></li>
          <li><a href="#"><span class="google"></span>
              <h6>Google+</h6>
            </a></li>
        </ul>
      </div>
      <div class="col-md-3 infor-left">
        <h3>Information</h3>
        <ul>
          <li><a href="#">
              <p>Specials</p>
            </a></li>
          <li><a href="#">
              <p>New Products</p>
            </a></li>
          <li><a href="#">
              <p>Our Stores</p>
            </a></li>
          <li><a href="contact.html">
              <p>Contact Us</p>
            </a></li>
          <li><a href="#">
              <p>Top Sellers</p>
            </a></li>
        </ul>
      </div>
      <div class="col-md-3 infor-left">
        <h3>My Account</h3>
        <ul>
          <li><a href="account.html">
              <p>My Account</p>
            </a></li>
          <li><a href="#">
              <p>My Credit slips</p>
            </a></li>
          <li><a href="#">
              <p>My Merchandise returns</p>
            </a></li>
          <li><a href="#">
              <p>My Personal info</p>
            </a></li>
          <li><a href="#">
              <p>My Addresses</p>
            </a></li>
        </ul>
      </div>
      <div class="col-md-3 infor-left">
        <h3>Store Information</h3>
        <h4>The company name,
          <span>Lorem ipsum dolor,</span>
          Glasglow Dr 40 Fe 72.
        </h4>
        <h5>+955 123 4567</h5>
        <p><a href="mailto:example@email.com">contact@example.com</a></p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
<!--information-end-->
<!--footer-starts-->
<div class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="col-md-6 footer-left">
        <form>
          <input type="text" value="Enter Your Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Your Email';}">
          <input type="submit" value="Subscribe">
        </form>
      </div>
      <div class="col-md-6 footer-right">
        <p>© 2015 Luxury Watches. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
<!--footer-end-->
`
;

document.querySelector('#header').insertAdjacentHTML('beforeend', header);
document.querySelector('#footer').insertAdjacentHTML('beforeend', footer);

(() =>{
	let sum = localStorage.getItem('cartTotal') || '0';
	document.querySelector('.total .simpleCart_total').textContent = sum;
})();


const calcCardCount = () =>{
	const cart = JSON.parse(localStorage.getItem('cart'));

	document.querySelector('.ckeckout #cart-count').textContent = cart.length;
}

const doProductsAction = (cart, products, param) => {
	let sum = 0;

	if (cart.length == 0) {
		localStorage.setItem('cartTotal', sum);
		document.querySelector('.total .simpleCart_total').textContent = sum;
	} else {
		for (const cartId of cart) {
        for (const product of products) {
           if (cartId == product.id) {
						const id = product.id;
            const title = product.title;
            const img = product.img;
            const price = product.price;
           if (param == 'calcSum') {
            sum += +price;
            localStorage.setItem('cartTotal', sum);
						document.querySelector('.total .simpleCart_total').textContent = sum;
           } else if (param == 'renderCart') {
            const productMarkup = `<ul data-id=${id} class="cart-header">
            <div class="close1"> </div>
                <li class="ring-in"><a href="single.html" ><img src="images/${img}" class="img-responsive" alt=""></a>
                </li>
                <li><span class="name">${title}</span></li>
                <li><span class="cost">$ ${price}</span></li>
                <li><span>Free</span>
                <p>Delivered in 2-3 business days</p></li>
            <div class="clearfix"> </div>
            </ul>`;
            document.querySelector('.cart-items .in-check')?.insertAdjacentHTML('beforeend', productMarkup);
           }


           }
        }
    }
	}


}
const deleteItemFromLS = (id) =>{
	let cart = localStorage.getItem('cart');


	if (cart) {
		cart = JSON.parse(cart);
		const delInd = cart.indexOf(id);
		cart.splice(delInd,1);
		localStorage.setItem('cart',JSON.stringify(cart));
	}
}
let removedItemId;
document.querySelector('.cart-items').addEventListener('click', (e)=>{
	if (e.target.matches('.close1') && removedItemId != e.target.parentElement.dataset.id) {
		removedItemId = e.target.parentElement.dataset.id;
		deleteItemFromLS(e.target.parentElement.dataset.id);

		$(e.target).parent().fadeOut('slow', function(c) {
					$(e.target).parent().remove();
		});

		doProductsAction(
			JSON.parse(localStorage.getItem('cart')), JSON.parse(localStorage.getItem('productsData')),
			'calcSum');

		calcCardCount();

	}
})

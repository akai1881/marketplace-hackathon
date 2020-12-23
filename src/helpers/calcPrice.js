export const calcSubPrice = (item) => {
  let subPrice = item.count * item.product.price;
  return subPrice;
};

export const calcTotalPrice = (cart) => {
  let totalPrice = 0;
  cart &&
    cart.products.forEach((element) => {
      totalPrice += element.subPrice;
    });
  return totalPrice;
};

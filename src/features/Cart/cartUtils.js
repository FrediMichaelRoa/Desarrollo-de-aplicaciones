export const calculateSubtotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  
  export const calculateShipping = (items) => {
    // Implementa la lógica de cálculo del envío según tus necesidades
    return items.length > 0 ? 5.00 : 0;
  };
  
  export const calculateTotal = (subtotal, shipping) => {
    return subtotal + shipping;
  };
  
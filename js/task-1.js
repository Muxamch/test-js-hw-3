function isEnoughCapacity(products, containerSize) { let summProducts = 0; for (const product in products) { summProducts += products[product]; } return summProducts <= containerSize; }

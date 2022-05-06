export const getData = async () => {
    try {
        const response = await fetch("./js/stock/stockCafe.json");
        const prodCafe = await response.json();
        // console.log(prodCafe);

        return prodCafe;
    } catch (error) {
        // console.log('Hubo un error', error)
    };
}


 
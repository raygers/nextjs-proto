module.exports = {
    async redirects() {

        let redirects = [];

        const URL = `https://www.mweb.co.za/product_urls_v2.json`;
        const fetchResult = fetch(URL)
        const response = await fetchResult;
        const products = await response.json();

        let filteredProducts = products.filter(product => product.productCategory.toLowerCase() === 'ftth' &&
            product.isAbTestUrl === false &&
            product.promoTagLine.toLowerCase() !== 'month to month')


        filteredProducts.forEach(product => {
                let url = product.productUrl;
                let oldUrl = product.oldProductUrl;

                redirectEntry = {
                    source: oldUrl,
                    destination: url,
                    permanent: true,
                };

                redirects.push(redirectEntry);
            }
        );

        console.log(redirects);

        return redirects
    },
}
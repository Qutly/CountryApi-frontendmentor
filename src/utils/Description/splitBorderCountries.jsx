export const splitBorderCountries = (data, alphacode) => {
        const result = data.find(item => item.alpha3Code === alphacode);
    return result.name;
}
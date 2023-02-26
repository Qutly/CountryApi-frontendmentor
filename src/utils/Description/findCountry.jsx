export const findCountry = (data, countryName) => {
    return data.find(item => item.name === countryName);
};
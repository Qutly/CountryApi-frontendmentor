export const splitCommasPopulationData = (populationValue) => {
    return populationValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
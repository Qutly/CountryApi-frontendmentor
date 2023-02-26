export const filterDataByNameAndRegion = (searchName, searchRegion, data) => {
    return data.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter(element => element.region.toLowerCase().includes(searchRegion.toLowerCase()));
}


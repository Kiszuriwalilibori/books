//for some reasons it is unclear what actually is the argument. It may be string or object of strings. It must be that in the past i have noticed that sometimes it can be the latter.

export const createListItemContent = (item: string | { [key: string]: string }, index: number, itemArray: (string | { [key: string]: string })[]) => {
    return item && typeof item === "object" ? [...Object.values(item).map((item, index, arry) => (index === arry.length - 1 ? item + "\xa0" : item + ",\xa0"))] : index === itemArray.length - 1 ? item + "\xa0" : item + ",\xa0";
};

export default createListItemContent;

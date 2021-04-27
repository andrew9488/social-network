export const objectHelpers = (items: any, itemId: any, objectPropsName: any, newObjectsProps: any) => {
    return items.map((item: any) => item[objectPropsName] === itemId ? {...item, ...newObjectsProps} : item)
}
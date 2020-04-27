export const required = value => {
    if(value) return undefined
    return 'fild is required'
}


export const maxLenght = (maxLength) => (value) => {
    if(value.length > maxLength) return `max length is ${maxLength} symbols`
    return undefined
}


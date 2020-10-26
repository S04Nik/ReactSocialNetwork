export const required = value=>{
    if(value)return undefined
    return 'field is requiered'
}

//похожа на санку / зацыкливание
export const maxLengthCreator=(size)=>value=>{
    if(value.length>size)return `max length : ${size}`
    return undefined
}
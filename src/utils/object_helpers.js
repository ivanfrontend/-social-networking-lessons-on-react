
export const updateObjectInArray = (items, itemId, objPropNemae, newObjProps) => {
   return items.map( u => {
        if(u[objPropNemae] === itemId){
            return {...u, ...newObjProps}
        }
        return u 
    })

}


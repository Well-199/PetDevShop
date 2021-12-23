import { data, typePet } from '../database/index'

export const Pet = {
    getAll: () => {
        return data
    },

    getFromType: (type: typePet) => {
        return data.filter(item => item.type === type)
    },

    getFromName: (name: string) => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        )
    },
}
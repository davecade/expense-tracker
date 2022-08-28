import axios from 'axios'

const keys = {
    getInitialData: `/initialData`
}

export const getInitialDataAsync = async () => {
    const url = keys.getInitialData
    const result = await axios.get(url)
    return result.data
}
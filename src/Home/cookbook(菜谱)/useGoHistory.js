import { useHistory } from 'react-router-dom'

const useGoHistory = () => {
    const history = useHistory()

    const handleDetail = (title) => {
        history.push('/detail', { title, from: '/home' })
    }

    return {
        handleDetail
    }
}

export default useGoHistory;
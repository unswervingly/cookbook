import { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

const useGoList = () => {
    const history = useHistory();

    const handleGoList = useCallback((title) => {
        history.push('/list', { title })
    }, [history])

    return {
        handleGoList
    }
}

export default useGoList;
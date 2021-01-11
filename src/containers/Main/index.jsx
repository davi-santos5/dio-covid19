import React, { memo, useCallback, useEffect, useState } from 'react';

import api from '../../api'
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        api.get(`${country}`)
            .then(res => setData(res.data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = (({ target }) => {
        const country = target.value
        setCountry(country)
    })

    return (
        <ContainerStyled>
            <div className='mb-2'>
                <Panel 
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main);
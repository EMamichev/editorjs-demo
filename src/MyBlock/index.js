import React, {useEffect, useState} from 'react';
import './index.css'

const MyBlock = ({data, onDataChange}) => {

    const [values, setValue] = useState(data || {
        text: '',
        author: '',
        color: '#000000',
    })

    useEffect(() => {
        onDataChange(values)
    }, [values])

    const handleChange = (evt) => {
        const {target} = evt
        setValue({...values, [target.name]: target.value})
    }

    return (
        <div className={'block'}>
            <div className={'block__title'}>Custom block</div>
            <div className={'block__form'}>
                <input onChange={handleChange} value={values.text} name={'text'}/>
                <input onChange={handleChange} value={values.author} name={'author'}/>
                <input onChange={handleChange} value={values.color} name={'color'} type={'color'}/>
            </div>
        </div>
    );
};

export default MyBlock;
import React from 'react';
import exceptions from './exceptions.json';
import {ErrorComponent} from './components/errorComponent';

const errorHandler = (incomeField, incomeValue) =>
{
        if (incomeValue[0]=='E')
            return (<ErrorComponent field={incomeField} textError = {exceptions[incomeValue]} />);
}

export {errorHandler};
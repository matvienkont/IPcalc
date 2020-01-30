import React from 'react';
import { ErrorComponent } from './components/errorComponent';
import exceptions from './exceptions.json' 

const maskErrorHandler = (value1, value2, value3, value4, switcher) =>
{
    if(switcher)
    {
        var stringOfValues = '';
        var arrayOfValues = [value1, value2, value3, value4];
        for(var i = 0; i<4; i++)
        {
            var splittedStringInArray = arrayOfValues[i].split("");
            var size = splittedStringInArray.length;
            for(var h=0; h<8-size; h++)
                {
                    splittedStringInArray.unshift("0");
                }    
            arrayOfValues[i]=splittedStringInArray.join("");
        }
    }
    else 
    {
        var stringOfValues = '';
        var arrayOfValues = [value1, value2, value3, value4];
        for(var i = 0; i<4; i++)
        {
            arrayOfValues[i] = (+arrayOfValues[i]).toString(2);
            var splittedStringInArray = arrayOfValues[i].split("");
            var size = splittedStringInArray.length;
            for(var h=0; h<8-size; h++)
                {
                    splittedStringInArray.unshift("0");
                }    
            arrayOfValues[i]=splittedStringInArray.join("");
        }
    }
    stringOfValues=arrayOfValues.join(".");

    var fullStringSize=35;
    var counter = 0;
    var h = 0;
    for(var i = 0; i<fullStringSize; i)
    {

        h=i+1;

        if(stringOfValues[i]== ".")
        {
            i++;
            continue;
        }
        
        if(stringOfValues[h]== ".")
            h++;

        if((stringOfValues[i] === "1" && stringOfValues[h]==="0") 
        || (stringOfValues[i] === "0" && stringOfValues[h]==="1"))
        {
            i++;
            counter++;
            continue;
        }

        i++;
    }
    
    if(counter>1)
        return true;
    else 
        return false;
        
}

const maskErrorQualifier = (value1, value2, value3, value4, switcher) =>
{
    if (maskErrorHandler(value1, value2, value3, value4, switcher))
        return (<ErrorComponent field="Fields 5-8" textError = {exceptions.Error4} />);
}

export {maskErrorQualifier, maskErrorHandler};
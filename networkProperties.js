import {converter} from './calc';

const fullView = (toConvertText1, toConvertText2, toConvertText3, toConvertText4, maskSign, switcher) =>
{
    var fullIpArray = [toConvertText1, toConvertText2, toConvertText3, toConvertText4];

    for(var i=0; i<4; i++)
    {
        if(fullIpArray[i][0] == "E" || (maskSign == true && switcher == false ) || (maskSign == true && switcher == true ) )
        return "NaN";
    }

    var newFullIpArray = [];
    if(switcher)
    {
        return fullIpArray.join(".");
    }
    else 
    {
        for( var i=0; i<4; i++)
        {     
            newFullIpArray[i] = Array.prototype.join.call(fullIpArray[i], "");
            newFullIpArray[i] = converter(true, newFullIpArray[i]);
        }
        return newFullIpArray.join(".");
        
       
    }
}

export {fullView};
import {converter} from "./calc";

var maskCounter = 0;

const networkIP = (decIP, decIpMask, lowORmax) =>
{
    if(decIpMask== "NaN")
    {
        maskCounter = "NaN";
        return decIpMask;
    }
    if(decIP == "NaN")
    {
        maskCounter = "NaN";
        return decIP;
    }


    
    var arrayDecIP = decIP.split(".");
    
    var arrayDecIpMask = decIpMask.split(".");
    
    for(var i = 0; i<4; i++)
    {
        arrayDecIP[i] = converter(false, arrayDecIP[i]).split("");
    }    
 
    for(var i = 0; i<4; i++)
        arrayDecIpMask[i] = converter(false, arrayDecIpMask[i]);

    var counter=0;

    for(var i = 0; i<4; i++)
        for (var j = 0; j<8; j++)
            if(arrayDecIpMask[i][j]=="0")
                counter++;
            

        maskCounter = 32 - counter;
    

    if (lowORmax)
    {
        
        for(var i = 3; counter>0 && i>=0; i--)
        {            
            for (var j = 7; (counter>0 && j>=0); j--)
            {
                arrayDecIP[i][j]="0";
                counter--;       
            }
        }
    }
    else
    {
        for(var i = 3; (counter>0 && i>=0); i--)
        {
            for (var j = 7; (counter>0 && j>=0); j--)
            {
                arrayDecIP[i][j]='1';
                counter--;
            }
        }
    }

    for(var i = 0; i<4; i++)
    {
        arrayDecIP[i] = arrayDecIP[i].join("");
        arrayDecIP[i] = converter(true , arrayDecIP[i]);
    }
    
    return arrayDecIP.join(".");
}



const amountOfDevices = (decIpMask, decIP) =>
{
    if(decIpMask== "NaN")
        return decIpMask;

    if(decIP == "NaN")
        return decIP;

    var arrayDecIpMask = decIpMask.split(".");

    for(var i = 0; i<4; i++)
        arrayDecIpMask[i] = converter(false, arrayDecIpMask[i]);

    var counter=0;

    for(var i = 0; i<4; i++)
        for (var j = 0; j<8; j++)
            if(arrayDecIpMask[i][j]=="0")
                counter++;
    

    return (Math.pow(2,32-(32-counter ))-1);
}

export {networkIP, amountOfDevices, maskCounter}
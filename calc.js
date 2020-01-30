
const converter = (switcher, value) =>
{

    if(!value)   
        return "0";

    if(switcher) 
    {
        var counter = 0;
        var splitString = value.toString().split("");
        splitString.forEach(element => {
            if(element != 0 && element !=1)
                counter++;
        });

        if(counter)
            return "Error1";
            
        else
            return parseInt(value, 2);    
    } 
    else
    {
        var specChar = value.toString().split("");
        var tempCounter = 0;
        specChar.forEach(element => {
            if(Number.isNaN(parseInt(element, 10)))
                tempCounter++;
        });

        if(tempCounter)
            return "Error3"

        if((value<=255 && value>=0 && value[0]!=0) || value==0)
        {
            var fullValue = (+value).toString(2).split("");
            var size = fullValue.length;
            for(var i=0; i<8-size; i++)
                {
                    fullValue.unshift("0");
                }
                //fullValue.join("");
            return fullValue.join("");
        }
        else       
        return "Error2";
    }
}

const placeholderSize = (switcher) =>
  {
      if(switcher)
          return 8;
      else 
          return 3;    
  }

export {placeholderSize, converter};


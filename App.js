import React, { useState } from 'react';
import { StyleSheet, 
  TouchableOpacity, 
  Switch, 
  Text, 
  View, 
  TextInput, 
  ScrollView } from 'react-native';
import {converter, placeholderSize}  from './calc';
import inform from './inform';
import {errorHandler} from './ipErrorHandler';
import {maskErrorQualifier, maskErrorHandler} from './maskErrorHandler';
import {fullView} from './networkProperties';
import {networkIP, amountOfDevices,maskCounter} from './networkIP';



export default function App() {
  
  const [toConvertText1, setToConvertText1] = useState('');
  const [toConvertText2, setToConvertText2] = useState('');
  const [toConvertText3, setToConvertText3] = useState('');
  const [toConvertText4, setToConvertText4] = useState('');
  const [toConvertText5, setToConvertText5] = useState('');
  const [toConvertText6, setToConvertText6] = useState('');
  const [toConvertText7, setToConvertText7] = useState('');
  const [toConvertText8, setToConvertText8] = useState('');

  const [switcher, setSwitcher] = useState(true);  

  const switchFields= (setFunc, text, switcher) =>
  {
      var temp = converter(!switcher, text);

      if(Number.isInteger(temp))
      setFunc(temp.toString());
        else if (temp[0]=="E")
            setFunc('');
          else if(text=='')
              setFunc('')
            else
              setFunc(temp);
  }

  const switcherVar = (switcher) => 
  {
  
      setSwitcher(switcher);

      switchFields(setToConvertText1, toConvertText1, switcher);
      switchFields(setToConvertText2, toConvertText2, switcher);
      switchFields(setToConvertText3, toConvertText3, switcher);
      switchFields(setToConvertText4, toConvertText4, switcher);
      switchFields(setToConvertText5, toConvertText5, switcher);
      switchFields(setToConvertText6, toConvertText6, switcher);
      switchFields(setToConvertText7, toConvertText7, switcher);
      switchFields(setToConvertText8, toConvertText8, switcher);
      
  };

return (


        <View style={styles.container}>
          
          <View style={styles.errorView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.errorScrollView}>
                {errorHandler("Field 1", converter(switcher,toConvertText1))}
                {errorHandler("Field 2", converter(switcher,toConvertText2))}
                {errorHandler("Field 3", converter(switcher,toConvertText3))}
                {errorHandler("Field 4", converter(switcher,toConvertText4))}
                {errorHandler("Field 5", converter(switcher,toConvertText5))}
                {errorHandler("Field 6", converter(switcher,toConvertText6))}
                {errorHandler("Field 7", converter(switcher,toConvertText7))}
                {errorHandler("Field 8", converter(switcher,toConvertText8))}
                {maskErrorQualifier(toConvertText5, toConvertText6, toConvertText7, toConvertText8, switcher)}
            </ScrollView>
          </View>

          <View style={styles.switcherView}>
            <Text style={styles.switcherText}>{inform(switcher)}</Text>
                <Switch 
                    style={styles.switcher}
                    onValueChange={value => switcherVar(value)}
                    value={switcher}
                    thumbColor="#CC953D"
                    trackColor={{true: "#AB7D33", false: "#AB7D33"}}
                    />
          </View>

          <View style={styles.viewInfoAboutField}>
              <Text style={styles.textInfoAboutField}>IP input</Text>
          </View>

          <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldProperties}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.secondTextInput.focus();
                    }
                    else if (text.length==3)
                      this.secondTextInput.focus();
                    setToConvertText1(text);
                  }}

                value={toConvertText1}
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                ref={(input) => { this.firstTextInput = input; }}
              />
              

              <TextInput 
                style={styles.fieldProperties}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.thirdTextInput.focus();
                    }
                    else if (text.length==3)
                      this.thirdTextInput.focus();
                  setToConvertText2(text)
                }}
                value={toConvertText2}
                onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                ref={(input) => { this.secondTextInput = input; }}
              />
              

              <TextInput 
                style={styles.fieldProperties}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.forthTextInput.focus();
                    }
                    else if (text.length==3)
                      this.forthTextInput.focus();
                  setToConvertText3(text)} }
                value={toConvertText3}
                onSubmitEditing={() => { this.forthTextInput.focus(); }}
                ref={(input) => { this.thirdTextInput = input; }}
              />
              

              <TextInput 
                style={styles.fieldProperties}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={text => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.fifthTextInput.focus();
                    }
                    else if (text.length==3)
                      this.fifthTextInput.focus();
                    setToConvertText4(text)} 
                  }
                value={toConvertText4}
                ref={(input) => { this.forthTextInput = input; }}
                onSubmitEditing={() => { this.fifthTextInput.focus(); }}
              />
          </View>

          <View style={styles.fieldContainer}>
              <Text style={styles.fieldProperties}>{converter(switcher,toConvertText1)}</Text>
              <Text style={styles.fieldProperties}>{converter(switcher,toConvertText2)}</Text>
              <Text style={styles.fieldProperties}>{converter(switcher,toConvertText3)}</Text>
              <Text style={styles.fieldProperties}>{converter(switcher,toConvertText4)}</Text>
          </View>

          <View style={styles.buttonWrapper}>
              <TouchableOpacity
                title="Clear"
                onPress={() => { setToConvertText1(""),setToConvertText2(""),setToConvertText3(""),setToConvertText4("")}} 
                style={styles.clear1Button}
              >
                      <Text style={styles.textClearButton}>Clear</Text>
              </TouchableOpacity>
          </View>
        
          <View style={styles.viewInfoAboutField}>
              <Text style={styles.textInfoAboutField}>Subnet Mask input</Text>
          </View>
  
          <View style={styles.fieldContainer}>
              <TextInput
                style={styles.maskField}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.sixthTextInput.focus();
                    }
                    else if (text.length==3)
                      this.sixthTextInput.focus();
                    setToConvertText5(text)}
                  } 
                value={toConvertText5}
                onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                ref={(input) => { this.fifthTextInput = input; }}
              />
              

              <TextInput 
                style={styles.maskField}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                {
                  if(switcher)
                  {
                    if(text.length==8)
                    this.seventhTextInput.focus();
                  }
                  else if (text.length==3)
                    this.seventhTextInput.focus();
                  setToConvertText6(text)
                }} 
                value={toConvertText6}
                onSubmitEditing={() => { this.seventhTextInput.focus(); }}
                ref={(input) => { this.sixthTextInput = input; }}
              />
              

              <TextInput 
                style={styles.maskField}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.eighthTextInput.focus();
                    }
                    else if (text.length==3)
                      this.eighthTextInput.focus();
                    setToConvertText7(text);
                  }}
                value={toConvertText7}
                onSubmitEditing={() => { this.eighthTextInput.focus(); }}
                ref={(input) => { this.seventhTextInput = input; }}
              />
              

              <TextInput 
                style={styles.maskField}
                placeholder='0'
                placeholderTextColor='#8C6A43'
                maxLength={placeholderSize(switcher)}
                keyboardType = 'numeric'
                onChangeText={(text) => 
                  {
                    if(switcher)
                    {
                      if(text.length==8)
                      this.firstTextInput.focus();
                    }
                    else if (text.length==3)
                      this.firstTextInput.focus();
                    setToConvertText8(text)
                  }} 
                value={toConvertText8}
                onSubmitEditing={() => { this.firstTextInput.focus(); }}
                ref={(input) => { this.eighthTextInput = input; }}
              />
          </View>

          <View style={styles.fieldContainer}>
              <Text style={styles.maskField}>{converter(switcher,toConvertText5)}</Text>
              <Text style={styles.maskField}>{converter(switcher,toConvertText6)}</Text>
              <Text style={styles.maskField}>{converter(switcher,toConvertText7)}</Text>
              <Text style={styles.maskField}>{converter(switcher,toConvertText8)}</Text>
          </View>

          <View style={styles.buttonWrapper}>
              <TouchableOpacity
                title="Clear"
                onPress={() => { setToConvertText5(""),setToConvertText6(""),setToConvertText7(""),setToConvertText8("")}} 
                style={styles.clear2Button}
              >
                      <Text style={styles.textClearButton}>Clear</Text>
              </TouchableOpacity>
          </View>



        <View style={styles.networkProps}>
            <Text style={styles.networkInfoText}>Current IP: {fullView(converter(switcher,toConvertText1),
                                        converter(switcher,toConvertText2),
                                        converter(switcher,toConvertText3),
                                        converter(switcher,toConvertText4),
                                        false,
                                        switcher)}</Text>
            <Text style={styles.networkInfoText}>IP Subnet Mask: {fullView(converter(switcher,toConvertText5),
                                            converter(switcher,toConvertText6),
                                            converter(switcher,toConvertText7),
                                            converter(switcher,toConvertText8),
                                            maskErrorHandler(toConvertText5, toConvertText6, 
                                                               toConvertText7, toConvertText8, 
                                                               switcher),
                                            switcher)}</Text>
            <Text style={styles.networkInfoText}>IP Network: {networkIP(fullView(converter(switcher,toConvertText1),
                                        converter(switcher,toConvertText2),
                                        converter(switcher,toConvertText3),
                                        converter(switcher,toConvertText4),
                                        false,
                                        switcher),

                                        fullView(converter(switcher,toConvertText5),
                                        converter(switcher,toConvertText6),
                                        converter(switcher,toConvertText7),
                                        converter(switcher,toConvertText8),
                                        maskErrorHandler(toConvertText5, toConvertText6, 
                                                           toConvertText7, toConvertText8, 
                                                           switcher), switcher),
                                        true)}
                                        /
                                        {maskCounter}</Text>
            <Text style={styles.networkInfoText}>Network IP Range: {networkIP(fullView(converter(switcher,toConvertText1),
                                        converter(switcher,toConvertText2),
                                        converter(switcher,toConvertText3),
                                        converter(switcher,toConvertText4),
                                        false,
                                        switcher),

                                        fullView(converter(switcher,toConvertText5),
                                        converter(switcher,toConvertText6),
                                        converter(switcher,toConvertText7),
                                        converter(switcher,toConvertText8),
                                        maskErrorHandler(toConvertText5, toConvertText6, 
                                                           toConvertText7, toConvertText8, 
                                                           switcher), switcher),

                                        true)}
                                        /
                                        {networkIP(fullView(converter(switcher,toConvertText1),
                                        converter(switcher,toConvertText2),
                                        converter(switcher,toConvertText3),
                                        converter(switcher,toConvertText4),
                                        false,
                                        switcher),

                                        fullView(converter(switcher,toConvertText5),
                                        converter(switcher,toConvertText6),
                                        converter(switcher,toConvertText7),
                                        converter(switcher,toConvertText8),
                                        maskErrorHandler(toConvertText5, toConvertText6, 
                                                           toConvertText7, toConvertText8, 
                                                           switcher), switcher),

                                        false)}</Text>
            <Text style={styles.networkInfoText}>Devices: {amountOfDevices(fullView(converter(switcher,toConvertText5),
                                            converter(switcher,toConvertText6),
                                            converter(switcher,toConvertText7),
                                            converter(switcher,toConvertText8),
                                            maskErrorHandler(toConvertText5, toConvertText6, 
                                                               toConvertText7, toConvertText8, 
                                                               switcher),
                                            switcher), 
                                            fullView(converter(switcher,toConvertText1),
                                            converter(switcher,toConvertText2),
                                            converter(switcher,toConvertText3),
                                            converter(switcher,toConvertText4),
                                            false,
                                            switcher))}
                                            </Text>
        </View>
    
      </View>


      
  );
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 70,
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#025059',
      alignItems: 'center',
      justifyContent: "flex-start",
  },

  fieldContainer: {
      borderRadius: 5,
      height: '4%',
      width: '80%',
      marginTop: 0,
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: 'space-around'
  },

  fieldProperties: {
      textAlignVertical: 'center',
      color: '#144673',
      backgroundColor: '#CC953D',
      width: '25%',
      textAlign: "center",
      borderWidth: 1,
      borderColor: '#FFFFFF'
  },
  switcherView: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 0,
      width: '80%',
      height: '3%',
  },

  switcher: {
      marginTop: 0,
      marginLeft: 5,
      marginBottom: 1,
  },

  switcherText: {
    color: "#04AABD",
  },
  clear1Button: {
      backgroundColor:'#668071',
      borderColor: '#668071',
      borderRadius:10,
      borderWidth: 1,
      paddingTop: 5,
      paddingBottom: 6,
  },
  clear2Button: {
    backgroundColor:'#A38346',
    borderColor: '#668071',
    borderRadius:10,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 6,
},
  buttonWrapper: {
      marginTop: 5,
      width: "25%",
      marginBottom: 15,
  },
  textClearButton: {
      color: "#FFF",
      textAlign: "center",
  },
  errorText: {
      display: 'flex'
  },
  errorScrollView: 
  {
      width: "100%",
      
  },
  errorView: 
  {
      backgroundColor: 'rgba(255,255,255, 0.05)',
      borderRadius:10,
      borderColor: 'rgba(0,0,0, 0.3)',
      borderWidth: 1,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      width: "80%",
  },
  viewInfoAboutField: 
  {
      width: '80%',
      marginBottom: 10,
      marginTop: 0,
  },
  textInfoAboutField:
  {
      color: "#04AABD",
  },
  maskField: 
  {
    backgroundColor: '#E38B39',
    textAlignVertical: 'center',
    color: '#144673',
    width: '25%',
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  networkProps: 
  {
    borderColor: "#025059",
    borderWidth: 5,
    borderRadius: 15,
    backgroundColor: "#025259",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "14%",
    paddingLeft: 5,
    width: "84%",
  },
  networkInfoText:
  {
    color: "#04AABD"
  }
});

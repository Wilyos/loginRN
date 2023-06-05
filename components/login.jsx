import {Button,TextInput} from 'react-native-paper'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import React from "react";





export default function Login(){
    const [errormessage, setErrorMessage] = useState('');


const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
    username: '',
    password:''
    }
  });


const onSubmit = data =>{
  const {password,username}=data
  let uFind = user.find(user => user.username == username && user.password == password);
  if (uFind != undefined){
      const {name, username} = uFind
      setErrorMessage('')
      navigation.navigate('CarScreen',{name:name,username:username})
  }
  else{
    setErrorMessage('Usuario y/o contraseña inválido (s)')
  }

}

    return(
    <View>
    <Text style={{ marginBottom: 10,fontSize:25,fontWeight:'bold' }}>Inicio de Sesión</Text>
    <Text style={{color:'red'}}>{errormessage}</Text>




           {/*Name */}
      <Controller
      control={control}
      rules={{
       required: true,
       pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9]+$/g
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Username"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          style={{marginTop:10}}
          left={<TextInput.Icon icon="account" />}
          
        />
      )}
      name="username"
    />
    {errors.username?.type==='required' && <Text>Este Campo es Obligatorio</Text>}
    {errors.username?.type ==='pattern' && <Text>Escriba un Nombre solo con Letras y Espacios</Text>}


    
      {/*Password */}
      <Controller
      control={control}
      rules={{
       required: true,
       pattern:/(?=.*\d)(?=.*[A-Za-zÁÉÍÓÚáéíóúñÑ])[A-Za-zÁÉÍÓÚáéíóúñÑ0-9]+/g
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Password"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry
          style={{marginTop:10}}
          left={<TextInput.Icon icon="key" />}
        />
      )}
      name="password"
    />
    {errors.password?.type==="required" && <Text>Este Campo es Obligatorio</Text>}
    {errors.password?.type==="pattern" && <Text>El Password Debe contener  números y letras</Text>}



    <Button 
      icon="door" 
      mode="contained" 
      buttonColor='#B3AE4F'
      textColor='white'
      onPress={handleSubmit(onSubmit)}
      style={{marginTop:10,width:250}}
      >
      Ingresar
    </Button>

    <Button style={{marginTop:10,width:250}} onPress={()=>{navigation.navigate('Registrar')}} buttonColor='#66654B' textColor='white' icon="car-arrow-right">Registrar</Button>
    <Button style={{marginTop:10,width:250}} onPress={()=>{navigation.navigate('Registrar')}} buttonColor='#66654B' textColor='white' icon="help">Recuperar Contraseña</Button>
  </View>
    )
}
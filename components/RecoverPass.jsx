import {Button,TextInput} from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import React from "react";
import axios from 'axios';



export default function RecoverPass(){

    return(
        <View style={styles.container} >
        <Text style={{ marginBottom: 10,fontSize:25,fontWeight:'bold' }}>Inicio de Sesión</Text>
        <Text style={{color:'red'}}>{setErrorMessage}</Text>
    
    
    
    
               {/*usuario */}
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
          name="usuario"
        />
        {errors.usuario?.type==='required' && <Text>Este Campo es Obligatorio</Text>}
        {errors.usuario?.type ==='pattern' && <Text>Escriba un Nombre solo con Letras y Espacios</Text>}
    
    
        
          {/*palabrareservada */}
          <Controller
          control={control}
          rules={{
           required: true,
           pattern:/(?=.*\d)(?=.*[A-Za-zÁÉÍÓÚáéíóúñÑ])/g
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              style={{marginTop:10}}
              left={<TextInput.Icon icon="key" />}
            />
          )}
          name="palabrareservada"
        />
        {errors.palabrareservada?.type==="required" && <Text>Este Campo es Obligatorio</Text>}
        
    
    
        <Button 
          icon="door" 
          mode="contained" 
          buttonColor='#B3AE4F'
          textColor='white'
          onPress={handleSubmit(onSearch)}
          style={{marginTop:10,width:250}}
          >
          Cambiar Contraseña
        </Button>
    
        <Button style={{marginTop:10,width:250}} onPress={()=>{navigation.navigate('Registrar')}} buttonColor='#66654B' textColor='white' icon="car-arrow-right">Iniciar Sesion</Button>
       
      </View>
        )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
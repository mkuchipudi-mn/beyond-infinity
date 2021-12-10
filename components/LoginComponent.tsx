import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { Asset } from 'expo-asset';

import images from '../assets';


let modelnImage ={ uri: 'https://www.modeln.com/wp-content/themes/jupiter-child/img/logo.png'};

function LoginComponent( {onSubmit} : {onSubmit : any}) {
  const { control, setFocus, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      username: 'Administrator',
      password: 'Administrator',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
      <Image source={modelnImage} style={{height: 70  }} />
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'text',
              name: 'username',
              rules: {
                required: {
                  value: true,
                  message: 'UserName is required',
                },
              }
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }
            },
          ]}
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LoginComponent;

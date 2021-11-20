import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FormBuilder } from 'react-native-paper-form-builder';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-paper';
import { Asset } from 'expo-asset';

const imageURI = Asset.fromModule(require('../assets/images/modeln_header_logo.svg')).uri;

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
      <Image source={{uri: imageURI}} style={{height: 60, position : 'relative' , left : 90 }} />
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
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LoginComponent;

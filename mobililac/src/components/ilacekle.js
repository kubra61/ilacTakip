import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';

const IlacEkle = () => {
  const [ilac, setIlac] = useState({
    ad: '',
    doz: '',
    gunler: {
      pazartesi: false,
      sali: false,
      carsamba: false,
      persembe: false,
      cuma: false,
      cumartesi: false,
      pazar: false
    },
    saat: ''
  });

  const handleChange = (name, value) => {
    setIlac(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleGunChange = (gun, checked) => {
    setIlac(prevState => ({
      ...prevState,
      gunler: {
        ...prevState.gunler,
        [gun]: checked
      }
    }));
  };

  const handleSubmit = () => {
    console.log(ilac);
    // Burada ilacı kaydetme veya başka bir işlem yapma
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text>İlacın Adı:</Text>
        <TextInput
          style={styles.input}
          value={ilac.ad}
          onChangeText={text => handleChange('ad', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>İlaç Dozu:</Text>
        <TextInput
          style={styles.input}
          value={ilac.doz}
          onChangeText={text => handleChange('doz', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Alınacak Günler:</Text>
        <View style={styles.checkboxGroup}>
          {Object.keys(ilac.gunler).map((gun, index) => (
            <View key={index} style={styles.checkboxItem}>
              <CheckBox
                value={ilac.gunler[gun]}
                onValueChange={value => handleGunChange(gun, value)}
              />
              <Text>{gun}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.formGroup}>
        <Text>Alınacak Saat:</Text>
        <TextInput
          style={styles.input}
          value={ilac.saat}
          onChangeText={text => handleChange('saat', text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  checkboxGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default IlacEkle;

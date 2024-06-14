import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function NetsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NETS Bank Card</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>Close</Text>
        </Pressable>
      </View>
      
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLD2KY4iMl5Kk-KDpu_IefuKts_z6DPplZ0w&s' }}
        />
        <Text style={styles.cardNumber}>XXXX XXXX XXXX 1234</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Bank</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Bank 1', value: 'bank1' },
            { label: 'Bank 2', value: 'bank2' },
          ]}
          style={pickerSelectStyles}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last 4 digits on ATM card</Text>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={4} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nationality</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Nationality 1', value: 'nationality1' },
            { label: 'Nationality 2', value: 'nationality2' },
          ]}
          style={pickerSelectStyles}
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ADD CARD</Text>
      </Pressable>

      <Text style={styles.infoText}>
        Information requested above is solely for bank verification purposes. It is kept strictly confidential by the bank and not stored by NETS or the merchant.
      </Text>
      <Text style={styles.agreementText}>
        By clicking "ADD CARD", you agree to our Terms and Conditions and Privacy Policy.
      </Text>

      <Text style={styles.footerText}>Powered by NETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  closeButton: {
    color: '#fff',
    fontSize: 16,
  },
  cardContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  agreementText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

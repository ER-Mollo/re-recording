import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput} from 'react-native';
import { auth } from '../config/firebase';



export default function Login() {


  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <View style={styles.components}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input}/>
      </View>

      <View style={styles.components}>
        <Text style={styles.label}>email</Text>
        <TextInput style={styles.input} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  components:{

  },
  input:{
    width:'100%',
    height:44,
    backgroundColor:'red',
    borderRadius:6
  } 
});

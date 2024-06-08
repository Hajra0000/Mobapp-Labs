import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [students,setStudents]=useState([
  {name:'Asad, Momina Binte',id:'2'},
  {name:'Gill, Sahul S.',id:'6'},
  {name:'Tir Raazia, Eisha',id:'9'},
  {name:'Mujahid, Hajra',id:'10'},
  ]);

  const pressHandler = (id) => {
  console.log(id);
  setStudents((listStudents) => {
  return listStudents.filter(students => students.id != id);
  });
  };

  return (
    <View style={styles.container}>
    <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
      data={students}
      renderItem={({item}) => (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
      )
      }
    />
    </View>
  );
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    marginTop:40,
    padding:15,
    backgroundColor:'black',
    fontSize:12,
    marginHorizontal:10,
    color:'white',
  },
  });

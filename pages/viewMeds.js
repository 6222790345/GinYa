import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import { Alert } from "react-native";
import { Button, Image } from "react-native";
import { tasksList } from "./Atoms";
import { useRecoilState } from "recoil";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Lottie from 'lottie-react-native';

function ViewNotes({ navigation }) {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [taskList, setTaskList] = useRecoilState(tasksList);
//  console.log(taskList.length);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setMinute(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
      setHour(new Date().getHours());
      setDate(new Date().getDate());
      setMonth(new Date().getMonth() + 1);
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

//  const toggleItemCompletion = () => {
//      const newList = setTaskList(todoList, index, {
//        ...item,
//        isComplete: !item.isComplete,
//      });


  return (
    <>
      <View style={styles.container}>
      <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <Text style={styles.listTitle}>
          Date - {date}/{month}/{year}{" "}
        </Text>
        <Text style={styles.listTitle}>
          Time - {hour}:{minute}:{seconds}
        </Text>
        </View>
        {taskList.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any tasks</Text>
          </View>
        ) : (

          <FlatList
            data={taskList}
            renderItem={({ item }) => ( !item.done?
            <View >
                <TouchableOpacity style={{justifyContent:"center"}}>
                <View style={[styles.TaskList]}>
                      <Text style={item.noteTime.slice(0, 2) <= hour? item.noteTime.slice(2, 4) < minute? styles.listTitlePassed: styles.listTitle: styles.listTitle} >
                          {item.noteTime.slice(0, 2) +
                          ":" +
                          item.noteTime.slice(2, 4) +
                          " - " +
                          item.noteTitle}
                      </Text>
                      <Text style={{fontSize:20}}>{item.noteValue}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <Text >Repeat: {item.repeat}</Text>
                        <Text >Category: {item.category}</Text>
                        <Text >Priority: {item.priority}</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", paddingVertical: 5}}>
                        <Lottie source={require("./cloudy.json")} autoPlay loop style={{ height: 100, width:100 }}/>
                        <Image source={require('../components/static/dorzolamide.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>
                    </View>
                    </View>
                </TouchableOpacity>
              </View>
            :<View />)}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listTitlePassed: {
    fontSize: 20,
    color: "red",
    fontWeight: 'bold'
  },
  TaskList: {
    backgroundColor: "#E8F0F2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 5
  },
  TaskListDesc: {
      backgroundColor: "#dcdcdc",
      borderRadius: 5,
      elevation: 5,
      marginVertical: 10
    }
});

export default ViewNotes;

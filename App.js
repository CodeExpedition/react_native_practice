import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import todosStorage from "./storages/todosStorage";

export default function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: "작업환경 설정", done: true },
    { id: 2, text: "리액트 네이티브 기초 공부", done: false },
    { id: 3, text: "투두리스트 만들어보기", done: false },
  ]);

  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(nextTodos);
  };

  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(nextTodos);
  };
  //불러오기
  useEffect(() => {
    async function load() {
      todosStorage.get().catch(console.err);
    }
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["bottom"]}>
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding" })}
            style={styles.avoid}
          >
            <DateHead date={today} />
            {todos ? (
              <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            ) : (
              <Empty />
            )}
            <AddTodo onInsert={onInsert} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  avoid: { flex: 1 },
});

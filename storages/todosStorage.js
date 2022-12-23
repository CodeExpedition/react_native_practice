import AsyncStorage from "@react-native-async-storage/async-storage";
// 안드로이드는 최대용량이 6mb로 정해져 있음 ios 는 그대로임.
const key = "todos";

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        //저장된 데이터가 없으면 사용하지 않음
        throw new Error("No saved todos");
      }

      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error("Failed to load todos");
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(data));
    } catch (e) {
      console.log("Failed to save todos");
    }
  },
};

export default todosStorage;

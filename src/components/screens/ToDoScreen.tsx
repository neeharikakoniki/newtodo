import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';
import TaskItem from '../TaskItem';
import { Task } from '../../types/task';

export default function ToDoScreen() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: taskText.trim(),
          editText: taskText.trim(),
          isEditing: false,
        },
      ]);
      setTaskText('');
    }
  };

  const handleEditTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };

  const handleEditTextChange = (id: string, newText: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, editText: newText } : task
      )
    );
  };

  const handleSaveTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, text: task.editText.trim(), isEditing: false }
          : task
      )
    );
  };

  const handleRemoveTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onEdit={handleEditTask}
      onEditTextChange={handleEditTextChange}
      onSave={handleSaveTask}
      onRemove={handleRemoveTask}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a task"
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button
        title="Add Task"
        accessibilityLabel="button"
        onPress={handleAddTask}
      />

      <FlatList
        testID="toDoList"
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#e0f7fa', // light teal background
  },
  input: {
    borderWidth: 1,
    borderColor: '#00796b', // dark teal border
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    shadowColor: '#00796b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  listContainer: {
    marginTop: 10,
    paddingBottom: 40,
  },
});

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Task } from '../types/task';
import { useTranslation } from 'react-i18next';

interface TaskItemProps {
  task: Task;
  onEdit: (id: string) => void;
  onEditTextChange: (id: string, newText: string) => void;
  onSave: (id: string) => void;
  onRemove: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onEditTextChange,
  onSave,
  onRemove,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.taskContainer}>
      {task.isEditing ? (
        <>
          <TextInput
            style={styles.editInput}
            value={task.editText}
            onChangeText={(text) => onEditTextChange(task.id, text)}
          />
          <Button
            title={t('saveButton')}
            accessibilityLabel="save-button"
            onPress={() => onSave(task.id)}
          />
        </>
      ) : (
        <>
          <Text style={styles.taskText}>{task.text}</Text>
          <Button
            title={t('editButton')}
            accessibilityLabel="edit-button"
            onPress={() => onEdit(task.id)}
          />
          <Button
            title={t('removeButton')}
            accessibilityLabel="remove-button"
            onPress={() => onRemove(task.id)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
    flexDirection: 'column',
    gap: 8,
  },
  taskText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 8,
  },
  editInput: {
    borderWidth: 1,
    borderColor: '#00796b',
    backgroundColor: '#f0fdfd',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
    color: '#004d40',
  },
});

export default TaskItem;

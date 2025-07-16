import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';


const resources = {
  en: {
    translation: {
      addTaskPlaceholder: 'Enter a task',
      addTaskButton: 'Add Task',
      editButton: 'Edit',
      saveButton: 'Save',
      removeButton: 'Remove',
    },
  },
  es: {
    translation: {
      addTaskPlaceholder: 'Ingrese una tarea',
      addTaskButton: 'Agregar tarea',
      editButton: 'Editar',
      saveButton: 'Guardar',
      removeButton: 'Eliminar',
    },
  },
  fr: {
    translation: {
      addTaskPlaceholder: 'Entrez une tâche',
      addTaskButton: 'Ajouter une tâche',
      editButton: 'Modifier',
      saveButton: 'Enregistrer',
      removeButton: 'Supprimer',
    },
  },
  de: {
    translation: {
      addTaskPlaceholder: 'Aufgabe eingeben',
      addTaskButton: 'Aufgabe hinzufügen',
      editButton: 'Bearbeiten',
      saveButton: 'Speichern',
      removeButton: 'Entfernen',
    },
  },
};


const locales = RNLocalize.getLocales();
const languageTag = locales.length > 0 ? locales[0].languageTag : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: languageTag,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

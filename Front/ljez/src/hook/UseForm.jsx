import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
/*
Función useForm:
useForm es una función que toma un objeto initialForm como argumento. Este objeto representa el estado inicial del formulario.
Estado del formulario:

Se usa useState para crear el estado del formulario (formState) y una función para actualizar este estado (setFormState). El estado inicial es initialForm.
Manejo de cambios en el formulario (onInputChange):

onInputChange es una función que se llama cada vez que un campo del formulario cambia.
Toma el evento del cambio (target), obtiene el nombre (name) y el valor (value) del campo que cambió.
Actualiza el formState con el nuevo valor del campo.
Restablecer el formulario (onResetForm):

onResetForm es una función que restablece el formulario a su estado inicial (initialForm).
Retorno del hook:

La función useForm devuelve un objeto que contiene el estado del formulario (formState), la función para manejar cambios (onInputChange) y la función para restablecer el formulario (onResetForm).*/
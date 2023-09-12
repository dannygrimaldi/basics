import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

const MyDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState('light'); // Inicialmente, establecemos el tema en 'light'

  const handleItemClick = (item) => {
    setSelectedItem(item);

    // Verificamos el valor del elemento seleccionado para realizar acciones específicas
    if (item === 'themeToggle') {
      // Cambiar el tema entre claro (light) y oscuro (dark)
      setTheme(theme === 'light' ? 'dark' : 'light');
    } else if (item === 'logout') {
      // Realizar la acción de logout (puedes implementar tu lógica de logout aquí)
      // Por ejemplo, redirigir a la página de inicio de sesión
      // window.location.href = '/login'; // Asegúrate de reemplazar esto con tu lógica real
    }
  };

  return (
    <div>
      <Dropdown label="Options" selectedItem={selectedItem} onSelect={handleItemClick}>
        <Dropdown.Item value="themeToggle">
        
          
        </Dropdown.Item>
        <Dropdown.Item value="logout">Logout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default MyDropdown;


import { ToggleSwitch } from 'flowbite-react';
import logoHSBC from '../assets/img/logoHSBC.svg';
import '../styles/index.css'; 


function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold"><img src={logoHSBC} alt="Logo HSBC" className="h-8 w-auto"/></div>
      <div className="text-2xl font-bold">AclaraApp</div>
      <div className="relative inline-block text-left">
      
      
      <ToggleSwitch  checked label='C' onChange={handleThemeChange} />


      

      </div>
    </header>
  );
}
const handleThemeChange = (checked) => {
  // Aquí puedes agregar la lógica para cambiar el tema según el valor de 'checked'
};


export default Header;


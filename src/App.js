import { useLocation } from 'react-router-dom';
import AdminLayout from './layouts/admin/Index'
import AuthLayout from './layouts/auth/AuthLayout';


function App() {

  const Location = useLocation()

  return (
    <div className="App">

      {
        Location.pathname.includes("auth") ? (

          <AuthLayout />
        ) : (

          <AdminLayout />
        )
      }

    </div>
  );
}

export default App;

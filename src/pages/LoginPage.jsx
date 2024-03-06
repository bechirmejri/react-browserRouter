
 import { useState } from 'react';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Benutzername:', userName);
    console.log('Passwort:', password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Benutzername:
          <input type="text" value={userName} onChange={handleUserNameChange} />
        </label>
        <br />
        <label>
          Passwort:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
};

export default LoginPage;

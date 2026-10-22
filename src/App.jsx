import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [username, setUsername] = useLocalStorageState('username', '');
  const [favoriteColor, setFavoriteColor] = useLocalStorageState('favoriteColor', '');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleColorChange = (event) => {
    setFavoriteColor(event.target.value);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      
      <InputWithLabel
        id="username"
        value={username}
        onInputChange={handleUsernameChange}
      >
        Username:
      </InputWithLabel>
      <p>Hello, {username || 'Guest'}!</p>

      <InputWithLabel
        id="favoriteColor"
        value={favoriteColor}
        onInputChange={handleColorChange}
      >
        Favorite Color:
      </InputWithLabel>
      {favoriteColor && (
        <p style={{ color: favoriteColor }}>
          Your favorite color is {favoriteColor}!
        </p>
      )}
    </div>
  );
}

function InputWithLabel(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        type="text"
        value={props.value}
        onChange={props.onInputChange}
      />
    </>
  );
}

export default App;
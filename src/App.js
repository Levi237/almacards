import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <div>
        <h1>❤️ Hello Alma ❤️</h1>
        <iframe src="https://giphy.com/embed/XvZ8PJ4DSqzSM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen />
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  h1 {
    text-align: center;
  }
  div {
    display: inline-block;
  }
`;
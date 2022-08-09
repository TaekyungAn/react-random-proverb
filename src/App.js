import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs=['좌절감으로 배움을 늦추지마라', 'Stay Hungry, Stay Foolish', '누군가를 위해 당신의 삶을 허비하지 마세요', '빼앗긴 들에도 봄은 온다', '계획이란 미래에 대한 현재의 결정이다', '아마추어는 문제를 복잡하게 만들고, 프로는 문제를 단순화 시킨다', 'Menento mori']

  const getRandomIndex = (length) => {
    return parseInt(Math.random()*length)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
          {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;

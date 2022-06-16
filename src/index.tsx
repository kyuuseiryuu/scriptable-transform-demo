import { render } from 'scriptable-transform';

const root = new ListWidget();

function App() {
  return (
    <>
      <text onCreate={(text: WidgetText) => text.textColor = Color.cyan()} text={'AAAA'} />
      <text text={'BBBB'} />
      <stack>
        <text text={'CCC'} />
        <text text={'DDD'} />
      </stack>
      <stack onCreate={(stack: WidgetText) => stack.url = 'https://github.com/kyuuseiryuu'}>
        <text text={'EEEE'} />
        <date date={new Date()} />
      </stack>
    </>
  );
}

render(<App />, root);

root.presentMedium().then();
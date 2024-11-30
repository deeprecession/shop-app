import style from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={style.page}>
      <h1>Home</h1>

      <h2>Stack</h2>

      <ul>
        <li>
          Main stack: <b>HTML, CSS, TypeScript, React</b>
        </li>

        <li>
          For page routing: <b>React-Router</b>
        </li>

        <li>
          As a state manager: <b>Redux + redux-persist</b>
        </li>

        <li>
          Quick solution for pagination: <b>react-paginate</b>
        </li>

        <li>
          Open API to fetch products: <b>Dummy JSON</b>
        </li>
      </ul>

      <h2>Tried but did not use at the end</h2>
      <div>
        <b>FakeStore API</b> - not enough fake data
      </div>
      <div>
        <b>Faker.js + Mock Service Worker</b> - not possible to get fake images
        of products
      </div>
    </div>
  );
};

export default Home;

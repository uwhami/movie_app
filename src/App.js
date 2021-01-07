import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <div>
      <h1>I Like {props.name}</h1>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.namd} picture={dish.image} />;
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/09/6741acc7f6bf0f7d04245851fb365c311.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "https://bncmarket.com/shopimages/ezbaking/0200020000862.jpg?1534480356",
    rating: 3,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidUpdate() {
    console.log("component updated");
  }
  componentDidMount() {
    console.log("component rendered");
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 3000);
  }
  componentWillUnmount() {
    console.log("GoodBye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    const { isLoading } = this.state;

    return (
      <div>
        <h1>I am a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <br />
        <br />
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//       {/* {foodILike.map(renderFood)} */}
//     </div>
//   );
// }

export default App;

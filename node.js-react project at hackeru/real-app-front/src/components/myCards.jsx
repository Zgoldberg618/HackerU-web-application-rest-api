import { Component } from "react";
import cardService from "../services/cardsService";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";
import Card from "./card";

class MyCards extends Component {
  state = { cards: [] };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();

    if (data.length) {
      this.setState({
        cards: data,
      });
    }
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader title="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Your cards are in the list below...</p>
          </div>
        </div>

        <div className="row">
          <Link to="/create-card">Create a New Card</Link>
        </div>

        <div className="row">
          {cards.length ? (
            cards.map((card) => <Card key={card._id} card={card} />)
          ) : (
            <p>No cards yet...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyCards;

import { Component } from "react";
import { toast } from "react-toastify";
import cardService from "../services/cardsService";
import withRouter from "./common/withRouter";

class DeleteCard extends Component {
  async componentDidMount() {
    await cardService.deleteCard(this.props.params.id);
    toast("Card was deleted");
    this.props.navigate("/my-cards");
  }

  render() {
    return null;
  }
}

export default withRouter(DeleteCard);

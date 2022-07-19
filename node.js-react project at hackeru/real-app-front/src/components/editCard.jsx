import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import { toast } from "react-toastify";
import { withRouter } from "./common/withRouter";
import cardService from "../services/cardsService";

class EditCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  mapToViewModel({
    _id,
    bizName,
    bizDescription,
    bizAddress,
    bizPhone,
    bizImage,
  }) {
    return {
      _id,
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    };
  }

  async componentDidMount() {
    const cardId = this.props.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.navigate("/my-cards");
  };

  async doSubmit() {
    try {
      await cardService.editCard(this.state.form);
      toast("Card is updated");
      this.props.navigate("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <PageHeader title="Create a New Card" />
        <div className="row">
          <div className="col-12">
            <p>Edit Biz card</p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
        >
          {this.renderInput({ name: "bizName", label: "Name" })}
          {this.renderInput({ name: "bizDescription", label: "Description" })}
          {this.renderInput({ name: "bizAddress", label: "Address" })}
          {this.renderInput({ name: "bizPhone", label: "Phone" })}
          {this.renderInput({ name: "bizImage", label: "Image" })}
          <div className="mt-2">{this.renderButton("Update Card")}</div>
          <button
            onClick={this.handleCancel}
            className="btn btn-secondary ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCard);

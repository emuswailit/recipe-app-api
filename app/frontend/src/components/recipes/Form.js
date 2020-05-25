import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import { addRecipe } from "../../actions/recipes";

export class Form extends Component {
  state = {
    title: "",
    time_minutes: "",
    tags: [],
    ingredients: [],
    price: "",
    multiValue: [],
    filterOptions: [
      { value: 1, label: "Foo" },
      { value: 2, label: "Bar" },
      { value: 3, label: "Bat" },
    ],
  };

  static propTypes = {
    addRecipe: PropTypes.func.isRequired,
  };

  handleMultiChange(option) {
    this.setState((state) => {
      return {
        multiValue: option,
      };
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, time_minutes, price } = this.state;
    const recipe = { title, time_minutes, price };
    this.props.addRecipe(recipe);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title, time_minutes, price } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Recipes</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={this.onChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Time in minutes</label>
          <input
            className="form-control"
            type="number"
            name="time_minutes"
            onChange={this.onChange}
            value={time_minutes}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            onChange={this.onChange}
            value={price}
          />
        </div>
        <div>
          <label>Multi (now working)</label>
          <Select
            name="filters"
            placeholder="Filters"
            value={this.state.multiValue}
            options={this.state.filterOptions}
            onChange={this.handleMultiChange}
            multi
          />
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addRecipe })(Form);

import React from "react";
import "./trade.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as stockActions from "../../redux/actions/stockActions";
import PropTypes from "prop-types";

class TradePg extends React.Component {
  state = {
    stock: {
      company: "",
      id: "",
      price: "",
    },
    inputStatus: false,
  };

  // handleChange = (event) => {
  //   const stock = { ...this.state.stock, company: event.target.value };

  //   this.setState({ stock });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createStock(this.state.stock);
    this.setState({ inputStatus: false });
  };

  renderStocks = (stock, index) => {
    return (
      <tr key={index}>
        <td>{stock.id}</td>
        <td>{stock.company}</td>
        <td>{stock.price}</td>
        <th className="bttn1">
          <input
            type="button"
            value="remove"
            onClick={() => this.removeItem(stock)}
          />
        </th>
      </tr>
    );
  };
  handleChangeId = (event) => {
    const stock = { ...this.state.stock, id: event.target.value };

    this.setState({ stock });
  };
  handleChangeName = (event) => {
    const stock = { ...this.state.stock, company: event.target.value };

    this.setState({ stock });
  };
  handleChangePrice = (event) => {
    const stock = { ...this.state.stock, price: event.target.value };

    this.setState({ stock });
  };
  handleAdd = (event) => this.setState({ inputStatus: true });
  render() {
    return (
      <div className="movies jumbotron">
        <h2 className="headings">Stock market</h2>
        <table class="table table-bordered">
          <thead className="thread1">
            <tr>
              <th className="cell" scope="col">
                Company id
              </th>
              <th className="cell" scope="col">
                Company
              </th>
              <th className="cell" scope="col">
                Price(Rs)
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {this.props.stocks.map(this.renderStocks)}
            {this.state.inputStatus === true ? (
              <tr>
                <th>
                  <input
                    type="text"
                    placeholder="id"
                    value={this.state.stock.id}
                    onChange={this.handleChangeId}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="company"
                    value={this.state.stock.company}
                    onChange={this.handleChangeName}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="price"
                    value={this.state.stock.price}
                    onChange={this.handleChangePrice}
                  />
                </th>
                <th>
                  <input
                    type="button"
                    value="   add   "
                    onClick={this.handleSubmit}
                  />
                </th>
              </tr>
            ) : null}
          </tbody>
        </table>
        <br />
        <div className="btttn">
          <button className="btn btn-info btn-lg" onClick={this.handleAdd}>
            Add Company
          </button>
        </div>

        <br />
        <br />
        <br />

        <h2 className="footer">Watch the latest top movies!!</h2>
      </div>
    );
  }
}

TradePg.propTypes = {
  stocks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stockActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradePg);

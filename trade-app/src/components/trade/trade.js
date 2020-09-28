import React from "react";
import "./trade.css";

class TradePg extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [
        {
          id: 1,
          name: "Intersteller",
          category: "Sci-fi",
          duration: "2:30:12",
        },
        { id: 2, name: "Inception", category: "Action", duration: "2:41:13" },
        {
          id: 4,
          name: "The big short",
          category: "Drama",
          duration: "2:11:11",
        },
      ],
      id: "",
      name: "",
      category: "",
      duration: "",
      inputStatus: false,
    };
  }
  removeItem = (movie) => {
    var copyM = [...this.state.movieList]; // make a separate copy of the array
    var index = copyM.indexOf(movie);
    if (index !== -1) {
      copyM.splice(index, 1);
      this.setState({ movieList: copyM });
    }
  };

  renderMovies = (movie, index) => {
    return (
      <tr key={index}>
        <td>{movie.id}</td>
        <td>{movie.name}</td>
        <td>{movie.category}</td>
        <td>{movie.duration}</td>
        <th className="bttn1">
          <input
            type="button"
            value="remove"
            onClick={() => this.removeItem(movie)}
          />
        </th>
      </tr>
    );
  };

  addmovie = () => {
    var copyM = [...this.state.movieList];
    var movie = {
      id: this.state.id,
      name: this.state.name,
      category: this.state.category,
      duration: this.state.duration,
    };
    copyM.push(movie);
    this.setState({
      movieList: copyM,
      id: "",
      name: "",
      category: "",
      duration: "",
      inputStatus: false,
    });
  };
  handleChangeId = (event) => this.setState({ id: event.target.value });
  handleChangeName = (event) => this.setState({ name: event.target.value });
  handleChangeCat = (event) => this.setState({ category: event.target.value });
  handleChangeDur = (event) => this.setState({ duration: event.target.value });
  handleAdd = (evenr) => this.setState({ inputStatus: true });
  render() {
    return (
      <div className="movies jumbotron">
        <h2 className="headings">Movies</h2>
        <table class="table table-bordered">
          <thead className="thread1">
            <tr>
              <th scope="col">Movie id</th>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">Duration</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {this.state.movieList.map(this.renderMovies)}
            {this.state.inputStatus === true ? (
              <tr>
                <th>
                  <input
                    type="text"
                    placeholder="movie id"
                    value={this.state.id}
                    onChange={this.handleChangeId}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="movie name"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="genre"
                    value={this.state.category}
                    onChange={this.handleChangeCat}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="duration"
                    value={this.state.duration}
                    onChange={this.handleChangeDur}
                  />
                </th>
                <th>
                  <input
                    type="button"
                    value="   add   "
                    onClick={this.addmovie}
                  />
                </th>
              </tr>
            ) : null}
          </tbody>
        </table>
        <br />
        <div className="btttn">
          <button className="btn btn-info btn-lg" onClick={this.handleAdd}>
            Add Movie
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

export default TradePg;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Peity from '../lib/peity';


const types = ['line', 'bar', 'pie', 'dount'];

class ReactPeity extends Component {

  static defaultProps = {
    options: {
      width: 80,
      height: 20,
      fill: "none",
      strokeWidth: 1.2,
      stroke: "#0063ee"
    }
  };

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]).isRequired,
    type: PropTypes.oneOf(types),
    options: PropTypes.object
  };

  componentDidMount() {
    const {data, type, options} = this.props;
    this.chart = new Peity(this.$el, type, data, options);
    this.chart.draw();
  }

  render() {
    return (
      <span ref={(el) => this.$el = el}/>
    );
  }
}

export default ReactPeity;

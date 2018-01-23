class LightWatcher extends React.Component {
  render () {
    return (
      <h3>Light is {this.props.status}</h3>
    )
  }
}

ReactDOM.render(<LightWatcher status={'OFF'}/>, document.getElementById('root'))

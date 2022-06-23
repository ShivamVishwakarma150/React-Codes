class Course extends React.Component {
  render() {
    // here props is instance member se we access using this

    const { name, titles } = this.props;
    let sub = [];
    titles.forEach((s) => {
      sub.push(<li>{s}</li>);
    });
    return (
      <div>
        <p>Course Name :{name}</p>
        
          <ul>{sub}</ul>
        
      </div>
    );
  }
}

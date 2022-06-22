class Course extends React.Component {
  render() {
    // here props is instance member se we access using this

    const { name, titles } = this.props;
    // let subj=titles.map(s=><li>{s}</li>);

    return (
      <div>
        <p>Course Name :{name}</p>
        <p>
          <ul>
            {titles.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}

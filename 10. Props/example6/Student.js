class Student extends React.Component {
  render() {
    // here props is instance member se we access using this
  
    return (
      <div>
        <h3>Student Details!!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Subjects:{this.props.subjects.join()}</p>
        <p>Marks : {this.props.marks.join()}</p>
        <p>Pass : {String(this.props.isPass)}</p>



      </div>
    );
  }
}

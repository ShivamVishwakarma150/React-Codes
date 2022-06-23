class Student extends React.Component {
  render() {
    // here props is instance member se we access using this
    const { subjects, marks } = this.props;
    let total = 0;

    // marks.forEach((x) => {
    //   total += x;
    // });

    let arr=marks.map(m=>{
      total+=m;
      return <li>{m}</li>;
    });
    return (
      <div style={{
        backgroundColor:"bisque",
        borderRadius:"20px",
        border:"2px solid brown",
        fontFamily:"'Roboto Slab', serif"

      
      }

      }>
        <h3>Student Details!!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>Subjects:</p>
        <ul>
          {subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>Marks :</p>
        <ul>
          {arr}
        </ul>
        <p>Total :{total}</p>
        <p>
          Result : <b>{total >= 150 ? "pass" : "Fail"}</b>
        </p>
      </div>
    );
  }
}

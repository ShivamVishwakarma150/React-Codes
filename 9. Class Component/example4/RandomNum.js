function GetNumber() {
    const myyArr = [10, 5, 12, 6, 9, 21, 34, 7, 91, 23];
    let number = myyArr[Math.trunc(Math.random() * myyArr.length)];
    return number;
  }
  class RandomNum extends React.Component{
    render(){
        const num = GetNumber();
        return (
          <div>
            <p>Number is {num}</p>
            <small>It is an :- {(num%2 == 0) ? "Even" : "Odd"} Number</small>
          </div>
        );
        }
    
  }

   
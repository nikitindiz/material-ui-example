import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './App.css';

class MaterialUiForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      secondName: ''
    };
  }

  render() {
    const { firstName, secondName } = this.state;

    return (
      <div className="material-ui-form" style={{ padding: 20 }}>
        <TextField
          id="standard-basic"
          label="First name"
          value={firstName}
          onChange={(event) => this.setState({
            firstName: event.target.value
          })}
        />

        <br />
        <br />

        <TextField
          id="standard-basic"
          label="Second name"
          value={secondName}
          onChange={(event) => this.setState({
            secondName: event.target.value
          })}
        />

        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.onSave(this.state)}
        >
          Save
        </Button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MaterialUiForm onSave={(formState) => console.log(formState)} />
    </div>
  );
}

export default App;

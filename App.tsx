import React from "react";
import ChildSwitch from "./ChildSwitch";
import ParentSwitch from "./ParentSwitch";

interface IState {
  parentVal: string;
  switch1Val: string;
  switch2Val: string;
  switch3Val: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      parentVal: "disabled",
      switch1Val: "enabled",
      switch2Val: "disabled",
      switch3Val: "enabled",
    };
  }

  componentDidMount() {
    this.setParentSwitchValue();
  }

  onGetChildSwitchValues = () => {
    console.log(this.state);
  };

  setChildSwitchValue = (whichSwitch: string, selected: string) => {
    this.setState(
      prevState => ({ ...prevState, [whichSwitch]: selected }),
      this.setParentSwitchValue
    );
  };

  setParentSwitchValue = () => {
    const { switch1Val, switch2Val, switch3Val } = this.state;
    const switchStates = [switch1Val, switch2Val, switch3Val];
    let parent = "pending";

    if (switchStates.every(val => val === "enabled")) {
      parent = "enabled";
    }

    if (switchStates.every(val => val === "disabled")) {
      parent = "disabled";
    }

    this.setState(prevState => ({ ...prevState, parentVal: parent }));
  };

  render() {
    const { parentVal, switch1Val, switch2Val, switch3Val } = this.state;
    return (
      <>
        Parent Switch :{" "}
        <ParentSwitch
          parentSwitch={parentVal}
          onSelect={this.setParentSwitchValue}
        />
        Child Switches :
        <ChildSwitch
          switchName={"switch1Val"}
          selected={switch1Val}
          onSelect={this.setChildSwitchValue}
        />
        <ChildSwitch
          switchName={"switch2Val"}
          selected={switch2Val}
          onSelect={this.setChildSwitchValue}
        />
        <ChildSwitch
          switchName={"switch3Val"}
          selected={switch3Val}
          onSelect={this.setChildSwitchValue}
        />
        <button onClick={this.onGetChildSwitchValues}>Get Child Values</button>
      </>
    );
  }
}

export default App;

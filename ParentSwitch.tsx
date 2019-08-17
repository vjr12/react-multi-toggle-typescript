import MultiToggle from "react-multi-toggle";
import React from "react";
import "react-multi-toggle/style.css";
import "./index.css";

interface IState {
  options: any;
}

interface IProps {
  parentSwitch: string;
  onSelect(value: any): void;
}
class ParentSwitch extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      options: [
        {
          displayName: "Disabled",
          value: "disabled",
          optionClass: "red",
        },
        {
          displayName: "Pending",
          value: "pending",
          optionClass: "grey",
        },
        {
          displayName: "Enabled",
          value: "enabled",
          optionClass: "green",
        },
      ],
    };
  }

  render() {
    const { options } = this.state;
    return (
      <MultiToggle
        options={options}
        selectedOption={this.props.parentSwitch}
        onSelectOption={() => {}}
      />
    );
  }
}

export default ParentSwitch;

import MultiToggle from "react-multi-toggle";
import React from "react";
import "react-multi-toggle/style.css";
import "./index.css";

interface IState {
  options: any;
}

interface IProps {
  switchName: string;
  selected: string;
  onSelect(value1: string, value2: string): void;
}

class ChildSwitch extends React.Component<IProps, IState> {
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
          displayName: "Enabled",
          value: "enabled",
          optionClass: "green",
        },
      ],
    };
  }

  onSelectOption = (selected: any) => {
    this.props.onSelect(this.props.switchName, selected);
  };

  render() {
    const { options } = this.state;
    const { selected } = this.props;
    return (
      <MultiToggle
        options={options}
        selectedOption={selected}
        onSelectOption={this.onSelectOption}
      />
    );
  }
}

export default ChildSwitch;

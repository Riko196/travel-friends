import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "./ProfileTrips.css";

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: blue;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'white' : 'white'}
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px blue;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)
class ProfileTrips extends Component {

  state = { checked: false }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  render() {
    return (
      <form className="trip-form" onSubmit={this.handleSubmit}>
        <div className="destination-planning">
          Destination:
          <label htmlFor="destination-input" className="destination">
            <input
              type="text"
              id="destination-input"
              placeholder="&nbsp;"/>
          </label>
          <label>
            Planning:
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
          </label>
        </div>
        <label className="date">
          from
          <DatePicker/>
        </label>
        <label className="date">
          to
          <DatePicker/>
        </label>
        <label className="trip-info">
          Additional info
          <textarea
            type="text"
            className="trip-info-input"
          />
        </label>
        <input className="add-trip" type="submit" value="Add trip" />
      </form>
    );
  }
}

export default ProfileTrips;

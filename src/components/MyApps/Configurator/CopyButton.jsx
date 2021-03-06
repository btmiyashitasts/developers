import React from 'react'
import styled from 'styled-components'

import copyIcon from '../../../images/copy-icon.svg'

class CopyButton extends React.Component {
  state = {
    copied: false
  }
  handleCopy = () => {
    this.setState({ copied : true })
    this.props.onCopy()
    setTimeout(() => {
      this.setState({ copied : false })
    }, 1000)
  }
  render() {
    const { copied } = this.state
    return (<Button copied={copied} onClick={this.handleCopy}>
      {copied ? 'Copied' : 'Copy'}
    </Button>)
  }
}

const Button = styled.button`
  background: #f5f5fa;
  border-radius: 0 0 0 4px;
  color: #979797;
  display: flex;
  font-size: 10px;
  padding: 10px 10px 0;
  position: absolute;
  right: 1px;
  text-transform: uppercase;
  top: 1px;
  ${props => props.copied ? 'color: #5c50ca;' : ''}
  &:after {
    content: "";
    display: block;
    height: 24px;
    margin-left: 10px;
    width: 24px;
    ${props => props.copied
      ? `
        background: transparent;
        content: "\\2713";
        margin: 0 5px 0 0;
      `
      : `background: transparent url(${copyIcon}) no-repeat;`}
  }
`

export default CopyButton

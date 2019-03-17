import * as React from 'react'
import { actionTypes } from '../../constants'
import { homepageAction } from './homepage.action'
import { connect } from 'react-redux'
import { Text } from '../../ui-kit/Text'

export interface IHomepage {
  homepageAction: () => void
}

class Homepage extends React.Component<IHomepage> {
  public componentDidMount() {
    this.props.homepageAction()
  }

  public render() {
    console.log(this.props)
    return (
      <Text isBold={true}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log(state, 'state')
  return {
    data: 'state.homeReducer.data',
  }
}

const mapDispatchToProps = {
  homepageAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

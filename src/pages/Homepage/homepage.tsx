import * as React from 'react'
import { homepageAction } from './homepage.action'
import { connect } from 'react-redux'
import { Text } from 'ui-kit/Text'

export interface IHomepage {
  homepageAction: () => void
}

class Homepage extends React.Component<IHomepage> {
  componentDidMount() {
    this.props.homepageAction()
  }

  render() {
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

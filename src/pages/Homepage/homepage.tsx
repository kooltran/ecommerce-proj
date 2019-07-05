import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import { homepageAction } from './homepage.action'
import { connect } from 'react-redux'
import { ISectionCollection } from 'interfaces/sections'
import { IProdItem } from 'interfaces/prod-item'
import ProdItem from 'ui-kit/ProductItem'

export interface IHomepage {
  homepageAction: () => void
  data: {
    sections: ISectionCollection[]
  }
  initRequest: boolean
}

class Homepage extends React.Component<IHomepage> {
  componentDidMount() {
    this.props.homepageAction()
  }

  renderFeaturedProds = () => {
    const { sections } = this.props.data
    if (sections) {
      return sections[0].items.map((prodItem: IProdItem) => (
        <Col md={4}>
          <ProdItem key={prodItem.slug} prodItem={prodItem} />
        </Col>
      ))
    }
  }

  render() {
    return <Row>{this.renderFeaturedProds()}</Row>
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state.homeReducer.data,
    initRequest: state.homeReducer.initRequest,
  }
}

const mapDispatchToProps = {
  homepageAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

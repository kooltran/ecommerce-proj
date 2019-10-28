import * as React from 'react'
import { homepageAction } from './homepage.action'
import { connect } from 'react-redux'
import { ProdItem } from 'ui-kit/ProductItem'
import { IHomepage } from './interfaces'
import { IProdItem } from 'interfaces/prod-item'
import { isEmpty } from 'lodash'

class Homepage extends React.Component<IHomepage> {
  componentDidMount() {
    this.props.homepageAction()
  }

  render() {
    const { data } = this.props
    return (
      <>
        {!isEmpty(data) &&
          data.map((item: IProdItem) => (
            <ProdItem key={item.id} prodItem={item} />
          ))}
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state.homeReducer.data,
  }
}

const mapDispatchToProps = {
  homepageAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)

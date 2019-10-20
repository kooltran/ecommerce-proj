import * as React from 'react'
import { homepageAction } from './homepage.action'
import { connect } from 'react-redux'
import { ProdItem } from 'ui-kit/ProductItem'
import { IProdItem } from 'interfaces/prod-item'

export interface IHomepage {
  data: [IProdItem]
  homepageAction: () => void
}

class Homepage extends React.Component<IHomepage> {

  async componentDidMount() {
    await this.props.homepageAction();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        {data && data.map(item => <ProdItem key={item.id} prodItem={item} />)}
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

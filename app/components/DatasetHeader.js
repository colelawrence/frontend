import React, { PropTypes } from 'react'

import DatasetRefProps from '../propTypes/datasetRefProps.js'
import DatasetItem from './item/DatasetItem'
import PageHeader from './PageHeader.js'

import { Palette, defaultPalette } from '../propTypes/palette'
import Base from './Base'

export default class DatasetHeader extends Base {
  template (css) {
    const { datasetRef, onClickExport, onClickEdit, onClickDelete, onClickAdd, onGoBack, peer } = this.props
    const { name, path, dataset } = datasetRef
    return (
      <div className='wrapper'>
        <PageHeader
          onGoBack={onGoBack}
          onClickExport={onClickExport}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          onClickAdd={onClickAdd}
        />
        <div className=''>
          <DatasetItem data={datasetRef} link={false} peer={peer} />
        </div>
      </div>
    )
  }

  styles (props) {
    const { palette } = props
    return {
    }
  }
}

DatasetHeader.propTypes = {
  // dataset data model
  datasetRef: DatasetRefProps,
  onGoBack: PropTypes.func,
  onClickExport: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickAdd: PropTypes.func,
  palette: Palette,
  peer: PropTypes.bool
}

DatasetHeader.defaultProps = {
  palette: defaultPalette
}

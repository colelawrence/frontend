import { connect } from 'react-redux'

import { showModal } from '../actions/app'
import { loadDatasets, setDatasetSearch, runDatasetSearch } from '../actions/dataset'
import { selectDatasetSearchString, selectNoDatasets, selectDatasets } from '../selectors/dataset'
import { selectIsFetching, selectPageCount, selectFetchedAll } from '../selectors/pagination'

import Datasets from '../components/Datasets'

const DatasetsContainer = connect(
  (state, ownProps) => {
    const pagination = state.pagination.popularDatasets
    const searchString = selectDatasetSearchString(state)
    console.log(searchString)
    const paginationSection = searchString ? 'searchedDatasets' : 'popularDatasets'
    const paginationNode = searchString || 'popularDatasets'
    return Object.assign({
      searchString,
      datasets: selectDatasets(state, paginationSection, paginationNode),
      noDatasets: selectNoDatasets(state, paginationSection, paginationNode),
      loading: selectIsFetching(state, paginationSection, paginationNode),
      nextPage: selectPageCount(state, paginationSection, paginationNode) + 1,
      fetchedAll: selectFetchedAll(state, paginationSection, paginationNode),
      bounds: state.layout.main
    }, ownProps)
  }, {
    setDatasetSearch,
    runDatasetSearch,
    showModal,
    loadDatasets
  }
)(Datasets, 'Datasets')

export default DatasetsContainer

import React, { PropTypes } from 'react'
import CodeEditor from './CodeEditor'

import { datasetCompleter } from '../ace/completer/datasets'

const QueryEditor = ({ name, query, onDownload, onRun, onChange, bounds }) => {
  // TODO handleChange no longer used, consider depreciation
  // const handleChange = (name, value) => {
  //   onChange({ queryString: value })
  // }

  return (
    <div className='queryEditor'>
      <CodeEditor
        name={name}
        value={query.queryString}
        completers={[datasetCompleter]}
        width={`${bounds.width - 40}px`}
        height={`${bounds.height - 80}px`}
        onChange={value => onChange({ queryString: value, address: query.address })}
        // TODO - reenable when adding back completion
        // setOptions={{
        //   enableBasicAutocompletion: true,
        //   enableLiveAutocompletion: true
        // }}
      />
      <button className='btn btn-primary' style={{ marginRight: 10 }} onClick={onDownload}>Download</button>
      <button className='btn btn-primary' onClick={onRun}>Run</button>
    </div>
  )
}

QueryEditor.propTypes = {
  name: PropTypes.string.isRequired,
  query: PropTypes.object,
  // datasets: PropTypes.array,
  onRun: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  bounds: PropTypes.object
}

QueryEditor.defaultProps = {
  query: {
    queryString: ''
  }
}

export default QueryEditor
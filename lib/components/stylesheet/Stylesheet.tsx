import React from 'react'

import ValidInput from '../form/ValidInput'
import { defaultPalette } from '../../propTypes/palette'
import Swatch from './Swatch'
import Hash from '../Hash'
import DatasetName from '../DatasetName'
import Datestamp from '../Datestamp'
import StatsLine from '../StatsLine'
import TabPanel from '../TabPanel'
import StatItem from '../item/StatItem'
import Button from '../chrome/Button'
import List from '../List'
import Dropdown from '../chrome/Dropdown'
import DropdownMenu from '../chrome/DropdownMenu'
import RadioInput from '../form/RadioInput'
import DropFile from '../form/DropFile'
import MonthCalendar from '../form/MonthCalendar'

export default class Stylesheet extends React.PureComponent<{stats: any, statItem: any}> {
  constructor (props) {
    super(props)
    this.state = {
    };
    [
    ].forEach((m) => { this[m] = this[m].bind(this) })
  }

  render () {
    const palette = defaultPalette
    const { stats, statItem } = this.props
    return (
      <div id='stylesheet' className='stylesheet'>
        <div className='stylesheet-container'>
          <div className='stylesheet-header'>
            <h4>Type</h4>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='stylesheet-spacer'><h1>Heading 1</h1></div>
              <div className='stylesheet-spacer'><h2>Heading 2</h2></div>
              <div className='stylesheet-spacer'><h3>Heading 3</h3></div>
              <div className='stylesheet-spacer'><h4>Heading 4</h4></div>
              <div className='stylesheet-spacer'><h5>Heading 5</h5></div>
              <div className='stylesheet-spacer'><h6>Heading 6</h6></div>
              <div className='stylesheet-spacer'><span className='datasetName stylesheet-dataset-name'>.datasetName</span></div>
              <div className='stylesheet-spacer'><span className='datasetName large stylesheet-dataset-name'>.datasetName.large</span></div>
              <div className='stylesheet-spacer'><label className='stylesheet-label'>label</label></div>
              <div className='stylesheet-spacer'><span className='code'>.code</span></div>
              <div className='stylesheet-spacer'><span className='stats'>.stats</span></div>
            </div>
            <div className='col-md-6'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in efficitur leo. Suspendisse ut metus sollicitudin augue scelerisque ultricies vel vel diam. Maecenas in sagittis erat. Proin feugiat tempor massa, eu imperdiet lorem dictum nec. Quisque cursus, mauris in finibus semper, ligula nisi maximus orci, sed tempor libero metus sed turpis. Maecenas at mauris et dui malesuada fringilla a et arcu. Pellentesque eget ex neque. Duis tincidunt posuere nibh, quis blandit est auctor sit amet. Praesent egestas posuere diam, nec imperdiet erat consectetur sed. Praesent justo lectus, tristique vitae est viverra, sodales tristique libero. Morbi nisi est, semper non condimentum non, vestibulum ut lectus. Quisque feugiat purus quis diam fringilla dapibus.</p>
              <p>Nam ac dolor non lectus condimentum tincidunt gravida at elit. In erat libero, venenatis a nisl at, semper maximus velit. Vivamus quis malesuada odio. Fusce eu maximus purus. Donec mollis vulputate massa commodo porttitor. Sed a lobortis ex. Vivamus sit amet massa magna. Ut lobortis ut ex id consequat. Maecenas eu felis nulla. Praesent ultrices turpis viverra nisl tempor euismod. Etiam et volutpat lectus. Nullam consequat luctus tristique. Quisque nec congue ex, at laoreet nunc. Aenean viverra enim est, vitae tincidunt ligula malesuada quis.</p>
            </div>
          </div>
        </div>
        <div className='stylesheet-container'>
          <div className='stylesheet-header'>
            <h4>Palette</h4>
          </div>
          <div className='row'>
            <Swatch style={{ backgroundColor: palette.background, border: `1px solid ${palette.primaryMuted}` }} title='background' hex={palette.background.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.sink }} title='sink' hex={palette.sink.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.text }} title='text' hex={palette.text.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primaryDark }} title='muted' hex={palette.primaryDark.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primaryMuted }} title='gray' hex={palette.primaryMuted.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primaryLight }} title='light gray' hex={palette.primaryLight.toUpperCase()} />
          </div>
          <div className='row'>
            <Swatch style={{ backgroundColor: palette.primary }} title='a' hex={palette.primary.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primary }} title='b' hex={palette.primary.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primary }} title='c' hex={palette.primary.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primary }} title='d' hex={palette.primary.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primary }} title='e' hex={palette.primary.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primary }} title='f' hex={palette.primary.toUpperCase()} />
          </div>
          <div className='row'>
            <Swatch style={{ backgroundColor: palette.error }} title='error' hex={palette.error.toUpperCase()} />
            <Swatch style={{ backgroundColor: palette.primaryMuted }} title='hover' hex={palette.primaryMuted.toUpperCase()} />
          </div>
        </div>
        <div className='stylesheet-container'>
          <div className='stylesheet-header'>
            <h4>Forms & Input</h4>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <ValidInput type='text' name='input' label='valid input' value='input' showValidation={false} validation='blah' onChange={() => undefined} />
              <ValidInput type='text' name='input' label='invalid input' value='input' showValidation error='blah' onChange={() => undefined} />
              <Button color='a' text='Primary Button' name='primaryButton' />
            </div>
            <div className='col-md-6' >
              <DatasetName name='ramfox/comics' />
              <DatasetName name='ramfox/comics' large />
              <Hash hash='/ipfs/QmUcBdbLegC4ixyqcuwJFc1ZY2mgJjfcsgRLTx1ZLc1rCk/dataset.json' />
              <Hash hash='/ipfs/QmUcBdbLegC4ixyqcuwJFc1ZY2mgJjfcsgRLTx1ZLc1rCk/dataset.json' short />
              <Datestamp dateString='2017-11-21T15:05:11.047704Z' />
              <Datestamp dateString='2017-11-21T15:05:11.047704Z' muted />
              <Datestamp dateString='2017-11-21T15:05:11.047704Z' relative />
              <Datestamp dateString='2017-12-05T23:40:10.222Z' relative muted />
              <StatsLine stats={stats} />
              <StatsLine stats={stats} muted />
              <StatsLine stats={stats} extraSpace large />
              <List data={statItem} component={StatItem} />
            </div>
          </div>
        </div>
        <div className='stylesheet-container'>
          <div className='row'>
            <div className='col-md-6'>
              <TabPanel
                labels={['Panel A', 'Panel B', 'Panel C']}
                components={[
                  <h1>Panel A</h1>,
                  <h1>Panel B</h1>,
                  <h1>Panel C</h1>
                ]}
                onToggleExpand={(e) => { console.log(e) }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className='stylesheet-button' ><Button text='primary'name='primary' /></div>
          <div className='stylesheet-button' ><Button text='dark' color='dark' name='dark' /></div>
          <div className='stylesheet-button' ><Button text='loading' loading name='loading' /></div>
          <div className='stylesheet-button' ><Button text='full width' full name='full' /></div>
          <div className='stylesheet-button' ><Dropdown text='dropdown' name='dropdown' DropdownMenu={DropdownMenu} options={['a', 'b', 'c']} /></div>
        </div>
        <div style={{ clear: 'both' }}>
          <div><RadioInput name='test' value='a' text='radio a' color='a' /></div>
          <div><RadioInput name='test' value='b' text='radio b' color='b' /></div>
          <div><RadioInput name='test' value='c' text='radio c' color='c' /></div>
          <div><RadioInput name='test' value='d' text='radio d' color='d' /></div>
          <div><RadioInput name='test' value='e' text='radio e' color='e' /></div>
          <div><RadioInput name='test' value='f' text='radio f' color='f' /></div>
          <div><RadioInput name='test' value='neutral-bold' text='radio neutral-bold' color='neutral-bold' /></div>
          <div><RadioInput name='test' value='neutral' text='radio neutral' color='neutral' /></div>
          <div><RadioInput name='test' value='neutral-muted' text='radio neutral-muted' color='neutral-muted' /></div>
          <div><RadioInput name='test' value='dark' text='radio dark' color='dark' /></div>
        </div>
        <div className='stylesheet-bottom' />
        <div><DropFile label='drop_file' name='drop file' onChange={() => console.log('drop file change')} json csv yaml /></div>
        <div><MonthCalendar onChange={() => console.log('month calendar change')} /></div>
      </div>
    )
  }
}

Stylesheet.propTypes = {
}

Stylesheet.defaultProps = {
  fields: [
    { name: 'field_one', type: 'string' },
    { name: 'field_two', type: 'integer' },
    { name: 'field_three', type: 'float' },
    { name: 'field_four', type: 'object' },
    { name: 'field_five', type: 'array' },
    { name: 'field_six', type: 'date' }
  ],
  users: [
    { 'id': '4254923e-a3a3-4d6f-ae1d-f6af177215db', 'created': 1484086940, 'updated': 1484086940, 'username': 'steve', 'type': 'none', 'email': 'steve@qri.io', 'name': 'Steven', 'description': '', 'home_url': '' },
    { 'id': '9080d2c6-4e2a-4f5c-a49f-97dc1c6e1ecb', 'created': 1484080475, 'updated': 1484080475, 'username': 'test_one', 'type': 'none', 'email': 'brendanobrienesq@gmail.com', 'name': 'brendan', 'description': '', 'home_url': '' },
    { 'id': '23c09b51-5048-4150-a85e-73d53f11d066', 'created': 1475804702, 'updated': 1475804702, 'username': 'us_fbi', 'type': 'organization', 'email': 'fbi@qri.io', 'name': '', 'description': '', 'home_url': '' },
    { 'id': '0873e951-41e7-4f34-840b-07109f093b90', 'created': 1475611466, 'updated': 1475682997, 'username': 'b6', 'type': 'none', 'email': 'b@qri.io', 'name': 'brendan', 'description': 'some bro from canada, eh.', 'home_url': '' },
    { 'id': '48e7bafe-cf79-4b78-9f8f-9af846abd6a3', 'created': 1475508601, 'updated': 1475508601, 'username': 'billboard', 'type': 'organization', 'email': 'billboard@qri.io', 'name': '', 'description': '', 'home_url': '' },
    { 'id': '4c9b6bca-6764-462c-a560-d47a037c05bd', 'created': 1474667377, 'updated': 1474667377, 'username': 'forbes', 'type': 'organization', 'email': 'forbes@qri.io', 'name': '', 'description': 'The United States Census', 'home_url': '' },
    { 'id': '1b674f47-d0f4-4b3c-b25d-c49521b5599a', 'created': 1464282748, 'updated': 1464282748, 'username': 'ca_census', 'type': 'organization', 'email': 'ca_census@qri.io', 'name': 'Canadian Census', 'description': 'Les Census Canadien', 'home_url': '' },
    { 'id': '57013bf0-2366-11e6-b67b-9e71128cae77', 'created': 1464282748, 'updated': 1464282748, 'username': 'us_census', 'type': 'organization', 'email': 'us_census@qri.io', 'name': 'United States Census', 'description': 'The United States Census', 'home_url': '' },
    { 'id': '3fe7d2cc-a8dc-4da0-ac37-c3061d067ae7', 'created': 1464282748, 'updated': 1474918993, 'username': 'b5', 'type': 'user', 'email': 'brendan@qri.io', 'name': "Brendan O'Brien", 'description': '', 'home_url': '' },
    { 'id': 'e591aff2-f092-4fc3-813d-c4aad7ce58b5', 'created': 1464282748, 'updated': 1464282748, 'username': 'us_atf', 'type': 'organization', 'email': 'us_atf@qri.io', 'name': 'United States Census', 'description': 'The United States Bureau of Alcohol, Tobacco \u0026 Firearms', 'home_url': '' },
    { 'id': '54b80e91-cae0-423d-b5d8-c9acbb5e2536', 'created': 1463687282, 'updated': 1463687793, 'username': 'janelle', 'type': 'user', 'email': 'test_user_janelle@qri.io', 'name': 'Janelle (test user)', 'description': '', 'home_url': '' }
  ],
  datasets: [
    { 'name': 'brendan', 'address': 'qri.brendan' },
    { 'address': 'qri.brendan.hours', 'file': 'hours.csv', 'format': 'csv', 'fields': [{ 'name': 'datestamp', 'type': 'date' }, { 'name': 'hours', 'type': 'float' }, { 'name': 'category', 'type': 'string' }, { 'name': 'description', 'type': 'string' }] },
    { 'name': 'qri', 'address': 'qri', 'file': 'stats.csv', 'fields': [{ 'name': 'name', 'type': 'string' }, { 'name': 'value', 'type': 'float' }], 'description': 'a service for coordinating datasets' }
  ],
  stats: [
    {
      name: 'fields',
      value: 36
    },
    {
      name: 'rows',
      value: 324000
    },
    {
      name: 'commits',
      value: 24
    }
  ],
  statItem: [
    {
      icon: 'flash',
      title: 'peers connected',
      stat: '2'
    },
    {
      icon: 'up',
      title: 'uptime',
      stat: '3:32:01'
    },
    {
      icon: 'link',
      title: 'transferred',
      stat: '2.4Gib'
    }
  ]
}

import React, {PureComponent} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withAuthentication, AuthenticationService } from '../Helpers'
// import EsriLoaderReact from 'esri-loader-react'
import { WebMap } from 'react-arcgis'

//import {Col, Row, Modal, Button} from 'react-materialize'

const ArcGIS = (props) => (
  <WebMap
      className='claro'
      style={{ width: '100vw', height: '100vh' }}
      mapProperties={{ basemap: 'satellite' }}
      viewProperties={{
          center: [-122.3301, 47.6038],
          zoom: 15
      }}
  />
)

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(ArcGIS))
//
// class ArcGIS extends PureComponent {
//
//   render() {
//     const options = {
//       url: 'https://js.arcgis.com/4.6/'
//     };
//
//     return (
//       <EsriLoaderReact
//         options={options}
//         modulesToLoad={['esri/Map', 'esri/views/MapView']}
//         onReady={({loadedModules: [Map, MapView], containerNode}) => {
//           new MapView({
//             container: containerNode,
//             map: new Map({basemap: 'oceans'})
//           });
//         }}
//       />
//     );
//   }
// }
//
// export default ArcGIS

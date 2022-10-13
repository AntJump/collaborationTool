import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import Box from '@mui/material/Box';

class CalendarColorPicker extends React.Component {
  
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '50px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          paddingTop: '13px'
        },
        swatch: {
          position: 'relative',
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
          height: '30px'
        },
        popover: {
          position: 'relative',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <Box sx={{ display: 'inline-block', zIndex: 2 }}>
        <div style={{ justifyContent:'center', padding: '10px 15px 10px 15px' }}>
          <div style={ styles.swatch } onClick={ this.handleClick }>
              <div style={ styles.color } />
          </div>
          { this.state.displayColorPicker ? <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color } onChange={ this.handleChange } style={{ position: 'absolute' }} />
          </div> : null }

        </div>
      </Box>
    )
  }
}

export default CalendarColorPicker;
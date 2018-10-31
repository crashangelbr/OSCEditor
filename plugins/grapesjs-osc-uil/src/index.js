import grapesjs from 'grapesjs';
import loadComponents from './components';

export default grapesjs.plugins.add('gjs-ui-components', (editor, opts = {}) => {
  const config = {
    blocks: ['countdown','PanelGroup', 'Group', 'List', 'Title', 'Buttom', 'Text', 'Number', 'Bool', 'Slide','Knob','Joystick','Fps','Graph','Timeline'],
    titleComponents: 'OSC Components',
	titleControls: 'OSC Controls',
    
  };

    
// Add components
loadComponents(editor, opts);
    
  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);

});
import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-ui-components', (editor, opts = {}) => {
  const config = {
    blocks: ['PanelGroup', 'Group', 'List', 'Title', 'Buttom', 'Text', 'Number', 'Bool', 'Slide','Knob','Joystick','Fps','Graph','Timeline'],
    titleComponents: 'OSC Components',
	titleControls: 'OSC Controls',
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);

});


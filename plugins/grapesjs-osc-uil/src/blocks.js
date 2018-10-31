export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  let stylePrefix = c.stylePrefix;

  const toAdd = name => blocks.indexOf(name) >= 0;

  // -- Components --------------------------------------------------------------------------

  if (c.blocks.indexOf('PanelGroup') >= 0) {
    bm.add('PanelGroup', {
      label: 'Panel Group',
      category: c.titleComponents,
      attributes: {
        class: 'fa fa-cube'
      },
      content: '<div data-gjs-type="PanelGroup"></div>'
    })
  };

  if (c.blocks.indexOf('Group') >= 0) {
    bm.add('Group', {
      label: 'Group',
      category: c.titleComponents,
      attributes: {
        class: 'fa fa-folder'
      },
      content: '<div data-gjs-type="Group"></div>'
    })
  };

  if (c.blocks.indexOf('Fps') >= 0) {
    bm.add('Fps', {
      label: 'Fps',
      category: c.titleComponents,
      attributes: {
        class: 'fa fa-bolt'
      },
      content: '<div data-gjs-type="Fps"></div>'
    })
  };

  if (c.blocks.indexOf('Graph') >= 0) {
    bm.add('Graph', {
      label: 'Graph',
      category: c.titleComponents,
      attributes: {
        class: 'fa fa-bar-chart'
      },
      content: '<div data-gjs-type="Graph"></div>'
    })
  };

  if (c.blocks.indexOf('Timeline') >= 0) {
    bm.add('Timeline', {
      label: 'Timeline',
      category: c.titleComponents,
      attributes: {
        class: 'fa fa-spinner'
      },
      content: '<div data-gjs-type="Timeline"></div>'
    })
  };

  // -- Controls --------------------------------------------------------------------------

  if (c.blocks.indexOf('List') >= 0) {
    bm.add('List', {
      label: 'List',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-list'
      },
      content: '<div data-gjs-type="List"></div>'
    })
  };

  if (c.blocks.indexOf('Title') >= 0) {
    bm.add('Title', {
      label: 'Title',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-edit'
      },
      content: '<div data-gjs-type="Title"></div>'
    })
  };

  if (c.blocks.indexOf('Buttom') >= 0) {
    bm.add('Buttom', {
      label: 'Buttom',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-square'
      },
      content: '<div data-gjs-type="Buttom"></div>'
    })
  };

  if (c.blocks.indexOf('Text') >= 0) {
    bm.add('Text', {
      label: 'Text',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-font'
      },
      content: '<div data-gjs-type="Text"></div>'
    })
  };

  if (c.blocks.indexOf('Number') >= 0) {
    bm.add('Number', {
      label: 'Number',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-sort-numeric-asc'
      },
      content: '<div data-gjs-type="Number"></div>'
    })
  };

  if (c.blocks.indexOf('Bool') >= 0) {
    bm.add('Bool', {
      label: 'Bool',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-check-square'
      },
      content: '<div data-gjs-type="Bool"></div>'
    })
  };

  if (c.blocks.indexOf('Slide') >= 0) {
    bm.add('Slide', {
      label: 'Slide',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-sliders'
      },
      content: '<div data-gjs-type="Slide"></div>'
    })
  };

  if (c.blocks.indexOf('Knob') >= 0) {
    bm.add('Knob', {
      label: 'Knob',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-dot-circle-o'
      },
      content: '<div data-gjs-type="Knob"></div>'
    })
  };

  if (c.blocks.indexOf('Joystick') >= 0) {
    bm.add('Joystick', {
      label: 'Joystick',
      category: c.titleControls,
      attributes: {
        class: 'fa fa-gamepad'
      },
      content: '<div data-gjs-type="Joystick"></div>'
    })
  };

}
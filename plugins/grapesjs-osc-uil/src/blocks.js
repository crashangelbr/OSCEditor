export default function (editor, opt = {}) {
	const c = opt;
	let bm = editor.BlockManager;
	let blocks = c.blocks;
	let stylePrefix = c.stylePrefix;
	
	const toAdd = name => blocks.indexOf(name) >= 0;
  
  // -- Components --------------------------------------------------------------------------
	toAdd('PanelGroup') && bm.add('PanelGroup', {
		label: 'Panel Group',
		category: c.titleComponents,
		attributes: {class:'fa fa-cube'},
		content: {
			type:'PanelGroup',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Group') && bm.add('Group', {
		label: 'Group',
		category: c.titleComponents,
		attributes: {class:'fa fa-window-maximize'},
		content: {
			type:'Group',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('FPS') && bm.add('FPS', {
		label: 'FPS',
		category: c.titleComponents,
		attributes: {class:'fa fa-bolt'},
		content: {
			type:'FPS',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Graph CPU') && bm.add('Graph CPU', {
		label: 'Graph CPU',
		category: c.titleComponents,
		attributes: {class:'fa chart-area'},
		content: {
			type:'Graph CPU',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Timeline') && bm.add('Timeline', {
		label: 'Timeline',
		category: c.titleComponents,
		attributes: {class:'fa chart-area'},
		content: {
			type:'Timeline',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	
	// -- Controls --------------------------------------------------------------------------
	
	toAdd('List') && bm.add('List', {
		label: 'List',
		category: c.titleControls,
		attributes: {class:'fa fa-list'},
		content: {
			type:'List',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Title') && bm.add('Title', {
		label: 'Title',
		category: c.titleControls,
		attributes: {class:'fa fa-edit'},
		content: {
			type:'Title',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Buttom') && bm.add('Buttom', {
		label: 'Buttom',
		category: c.titleControls,
		attributes: {class:'fa fa-square'},
		content: {
			type:'Buttom',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Text Input') && bm.add('Text Input', {
		label: 'Text Input',
		category: c.titleControls,
		attributes: {class:'fa fa-fony'},
		content: {
			type:'Text Input',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Numeric') && bm.add('Numeric', {
		label: 'Numeric',
		category: c.titleControls,
		attributes: {class:'fa sort-numeric-up'},
		content: {
			type:'Numeric',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Bool') && bm.add('Bool', {
		label: 'Bool',
		category: c.titleControls,
		attributes: {class:'fa toggle-on'},
		content: {
			type:'Bool',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Slide') && bm.add('Slide', {
		label: 'Slide',
		category: c.titleControls,
		attributes: {class:'fa sliders-h'},
		content: {
			type:'Slide',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Knob') && bm.add('Knob', {
		label: 'Knob',
		category: c.titleControls,
		attributes: {class:'fa dot-circle'},
		content: {
			type:'Knob',
			content:'',
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	toAdd('Joystick') && bm.add('Joystick', {
		label: 'Joystick',
		category: c.titleControls,
		attributes: {class:'fa fa-gamepad'},
		content: {
			type:'Joystick',
			content: "<script></script>",
			style: {
				height: '200px',
				width: '200px',
				activeOnRender: 1
			}
		}
	}),
	
	
	editor.BlockManager.add('test-block', {
		label: 'Test block',
		attributes: {class: 'fa fa-text'},
		content: {
			content:'<div id="oie"></div>',
			script: function () {
				uil.add('joystick', {  target: document.getElementById("oie"), pos:{left:'0', top:'0', bottom:'0' }, name:'JOY', w:100, multiplicator:1, precision:2, fontColor:'#D4B87B' });
			},
			style: {
				width: '100px',
				height: '100px',
				'background-color': 'red',
			}
		}
	});
	
}

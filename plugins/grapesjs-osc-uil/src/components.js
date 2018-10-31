export default function (editor, opt = {}) {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const textType = domc.getType('text');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const textModel = textType.model;
  const textView = textType.view;


  domc.addType('PanelGroup', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.Gui({
            target: document.getElementById(this.id),
            css: 'top:0px; left:0px;',
            w: 320,
            h: 20
          });


        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'PanelGroup') {
          return {
            type: 'PanelGroup'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Group', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('group', {
            target: document.getElementById(this.id),
            name: 'Group',
            value: 'olha eu aqui',
            h: 36
          });


        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Group') {
          return {
            type: 'Group'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('List', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('list', {
            target: document.getElementById(this.id),
            name: 'list',
            list: list
          });
          var list = ['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8', 'item-9', 'item-10', 'item-11', 'item-12'];


        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'List') {
          return {
            type: 'List'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Title', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('title', {
            target: document.getElementById(this.id),
            name: 'Title'
          });


        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Title') {
          return {
            type: 'Title'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Buttom', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('button', {
            target: document.getElementById(this.id),
            name: 'MULTY',
            fontColor: '#D4B87B',
            height: 30,
            value: [1, 2, 3, 4]
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Buttom') {
          return {
            type: 'Buttom'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Text', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('string', {
            target: document.getElementById(this.id),
            name: 'Title',
            value: 'oia eu aqui'
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Text') {
          return {
            type: 'Text'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Number', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('number', {
            target: document.getElementById(this.id),
            name: 'vector4',
            value: [0, 0, 0, 0],
            step: 1,
            precision: 0,
            h: 36
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Number') {
          return {
            type: 'Number'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Bool', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('bool', {
            target: document.getElementById(this.id),
            name: 'bool',
            h: 20,
            value: false
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Bool') {
          return {
            type: 'Bool'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Slide', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('slide', {
            target: document.getElementById(this.id),
            name: 'slide',
            min: -100,
            max: 100,
            value: 0,
            precision: 0,
            fontColor: '#E70739',
            h: 20
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Slide') {
          return {
            type: 'Slide'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Knob', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('knob', {
            target: document.getElementById(this.id),
            name: 'knob',
            w: 100,
            min: 0,
            max: 100,
            value: 100,
            precision: 0,
            step: 1,
            fontColor: '#D4B87B'
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Knob') {
          return {
            type: 'Knob'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Joystick', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {
          var isFirst = '{[isFirst]}';
          var OSCParameterName = '{[ OSCParameterName ]}';
          var Width = '{[ Width ]}';
          var Multiplicator = '{[ Multiplicator ]}';
          var Precision = '{[ Precision ]}';
          var FontColor = '{[ FontColor ]}';

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('joystick', {
            target: document.getElementById(this.id),
            isCanvasOnly: true,
            name: OSCParameterName,
            w: parseFloat(Width),
            multiplicator: Multiplicator,
            precision: Precision,
            fontColor: FontColor
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'countdown') {
          return {
            type: 'countdown'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Fps', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('fps', {
            target: document.getElementById(this.id),
            height: 30
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Joystick') {
          return {
            type: 'Joystick'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Graph', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';

          uil.add('graph', {
            target: document.getElementById(this.id),
            name: 'graph',
            h: 80,
            value: [0.5, 1, 0.5, 1, 0.25, 0, 0.5, 1, 0.5]
          });

        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Graph') {
          return {
            type: 'Graph'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');


        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


  domc.addType('Timeline', {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        isFirst: true,
        OSCParameterName: 'OSCParameter',
        Width: 100,
        Multiplicator: 1,
        Precision: 2,
        FontColor: '#D4B878',
        droppable: false,

        traits: [{
            label: 'OSC Parameter',
            name: 'OSCParameterName',
            changeProp: 1,
            type: 'text'
          },
          {
            label: 'Width',
            name: 'Width',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Multiplicator',
            name: 'Multiplicator',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'Precision',
            name: 'Precision',
            changeProp: 1,
            type: 'number'
          },
          {
            label: 'FontColor',
            name: 'FontColor',
            changeProp: 1,
            type: 'color'
          }
        ],
        script: function () {

          var div = document.getElementById(this.id)
          div.innerHTML = '';


        },
        style: {
          width: 'auto',
          height: 'auto',
          float: 'left',
          'background-color': 'transparent !important',
        }
      },
    }, {
      isComponent(el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') == 'Timeline') {
          return {
            type: 'Timeline'
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:OSCParameterName change:Width change:Multiplicator change:Precision change:FontColor', this.updateScript);
        const comps = this.model.get('components');

        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });


}

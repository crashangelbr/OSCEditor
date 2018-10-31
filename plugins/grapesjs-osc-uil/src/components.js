export default function(editor, opt = {}) {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const textType = domc.getType('text');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const textModel = textType.model;
  const textView = textType.view;
  const pfx = 'countdown';
  const COUNTDOWN_TYPE = 'countdown';

  domc.addType(COUNTDOWN_TYPE, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        startfrom: 0,
        endText: 0,
        droppable: false,
        traits: [{
          label: 'Start',
          name: 'startfrom',
          olha_eu_aqui:'texto',
          changeProp: 1,
          type: 'date',
        },{
          label: 'MEU TEXTO',
          name: 'MEU NOME',
          changeProp: 1,
        }],
        script: function() {
          uil.add('joystick', {  target: document.getElementById(this.id), isCanvasOnly: true, name:'JOY', w:100, multiplicator:1, precision:2, fontColor:'#D4B87B'});
        }
      },
    }, {
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == COUNTDOWN_TYPE) {
          return {
            type: COUNTDOWN_TYPE
          };
        }
      },
    }),


    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:startfrom change:endText', this.updateScript);
        const comps = this.model.get('components');

        // Add a basic countdown template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add();
        }
      }
    }),
  });
}

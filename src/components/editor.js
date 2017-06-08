import * as marked from 'marked';
import * as ace from 'brace';

export const editor = {
    props:['content'],
    computed:{
        value:function(){
            return this.content;
        }
    },
    mounted:function(){
        const self = this;
        const editor = ace.edit('editor');
        const session = editor.getSession();
        const selection = editor.getSelection();
        const renderer = editor.renderer;
        editor.setTheme('ace/theme/chrome');
        editor.setFontSize(14);
        editor.setHighlightActiveLine(false);
        renderer.setShowGutter(false);
        session.setMode('ace/mode/markdown');
        session.setUseWrapMode(true);
        session.setWrapLimitRange(null,70);
        if(self.value){
            editor.setValue(self.value,1);
            emitEvent.call(self,'change',marked(editor.getValue()));
        }
        editor.on('change',function(event){
            emitEvent.call(self,'change',marked(editor.getValue()));
        });
        // self.selection.on('changeCursor',function(event){
        //     console.log('cursor position changed');
        // });
        selection.on('changeSelection',function(){
            console.log(editor.getSelectedText());
        });
    },
    template:`
        <div id="editor"></div>
    `
};

function emitEvent(eventName,payload){
    this.$emit(eventName,payload);
}
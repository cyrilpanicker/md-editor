import * as marked from 'marked';
import * as ace from 'brace';

export const editor = {
    props:['content'],
    data:function(){
        return {
            value:this.content,
            editor:null
        };
    },
    methods:{
        onInput:function(){
            this.$emit('input',marked(this.editor.getValue()));
        }
    },
    mounted:function(){
        var self = this;
        self.editor = ace.edit('editor');
        self.editor.getSession().setMode('ace/mode/markdown');
        self.editor.getSession().setUseWrapMode(true);
        self.editor.getSession().setWrapLimitRange(null,70);
        self.editor.setTheme('ace/theme/chrome');
        self.editor.renderer.setShowGutter(false);
        // self.editor.renderer.setShowInvisibles(true);
        self.editor.setFontSize(14);
        self.editor.setHighlightActiveLine(false);
        if(self.value){
            self.editor.setValue(self.value,1);
            self.onInput();
        }
        self.editor.on('change',function(event){
            self.onInput();
        });
    },
    template:`
        <div id="editor"></div>
    `
};
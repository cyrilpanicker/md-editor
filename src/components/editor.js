import * as marked from 'marked';

export const editor = {
    props:['content'],
    data:function(){
        return {
            value : this.content
        };
    },
    methods:{
        onInput:function(){
            this.$emit('input',marked(this.value));
        }
    },
    mounted:function(){
        if(this.value){
            this.$emit('input',marked(this.value));
        }
    },
    template:`
        <textarea class="editor" v-model="value" @input="onInput"></textarea>
    `
};
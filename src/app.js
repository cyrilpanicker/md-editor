import Vue from 'vue';
import * as marked from 'marked';
import {demoText} from './helpers';

var components = {};

components['rtf-editor'] = {
    props:['content'],
    template:`
        <div class="rtf-editor" v-html="content"></div>
    `
};

components['md-editor'] = {
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
        <textarea class="md-editor" cols="60"
            v-model="value" @input="onInput"
        >
        </textarea>
    `
};

var app = new Vue({
    components:components,
    data:{
        mdText:demoText,
        rtfHtml:''
    },
    methods:{
        onMdInput:function(html){
            this.rtfHtml = html;
        }
    },
    template:`
        <div class="app">
            <md-editor :content="mdText" @input="onMdInput"></md-editor>
            <rtf-editor :content="rtfHtml"></rtf-editor>
        </div>
    `
});

app.$mount('.app');
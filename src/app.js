import Vue from 'vue';
import {demoText} from './helpers';
import {rtfEditor} from './components/rtf-editor';
import {mdEditor} from './components/md-editor';

var components = {};
components['rtf-editor'] = rtfEditor;
components['md-editor'] = mdEditor;

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
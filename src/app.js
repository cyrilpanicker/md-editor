import Vue from 'vue';
import {demoText} from './helpers';
import {viewer} from './components/viewer';
import {editor} from './components/editor';

var components = {};
components['viewer'] = viewer;
components['editor'] = editor;

var app = new Vue({
    components:components,
    data:{
        editorInput:demoText,
        editorOutput:''
    },
    methods:{
        onEditorInput:function(editorOutput){
            this.editorOutput = editorOutput;
        }
    },
    template:`
        <div class="app">
            <editor :content="editorInput" @input="onEditorInput"></editor>
            <viewer :content="editorOutput"></viewer>
        </div>
    `
});

app.$mount('.app');
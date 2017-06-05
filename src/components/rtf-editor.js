export const rtfEditor = {
    props:['content'],
    template:`
        <div class="rtf-editor" v-html="content"></div>
    `
};
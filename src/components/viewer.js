export const viewer = {
    props:['content'],
    template:`
        <div class="viewer" v-html="content"></div>
    `
};
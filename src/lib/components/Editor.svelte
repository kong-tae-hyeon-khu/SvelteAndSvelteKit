<script>
import { onMount } from "svelte";
import Editor from "cl-editor";

onMount(() => {
    // Initialize editor
    
const editor = new Editor({
    // <HTMLElement> required
    target: document.getElementById('editor'),
    // optional
    props: {
        // <Array[string | Object]> string if overwriting, object if customizing/creating
        // available actions:
        // 'viewHtml', 'undo', 'redo', 'b', 'i', 'u', 'strike', 'sup', 'sub', 'h1', 'h2', 'p', 'blockquote', 
        // 'ol', 'ul', 'hr', 'left', 'right', 'center', 'justify', 'a', 'image', 'forecolor', 'backcolor', 'removeFormat'
        actions: [
            'b', 'i', 'u', 'strike', 'ul', 'ol',
            {
                name: 'copy', // required
                icon: '<b>C</b>', // string or html string (ex. <svg>...</svg>)
                title: 'Copy',
                result: () => {
                    // copy current selection or whole editor content
                    const selection = window.getSelection();
                    if (!selection.toString().length) {
                        const range = document.createRange();
                        range.selectNodeContents(editor.refs.editor);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                    editor.exec('copy');
                }
            },
            'h1', 'h2', 'p'
        ],
        // default 300px
        height: '300px',
        // initial html
        html: '',
        // remove format action clears formatting, but also removes some html tags.
        // you can specify which tags you want to be removed.
        removeFormatTags: ['h1', 'h2', 'blackquote'] // default
    }
})
})

</script>
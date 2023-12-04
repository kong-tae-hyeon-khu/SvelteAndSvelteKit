<script>
    import { onMount } from "svelte";
  
    let editor;
      
    let toolbarOptions = [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
      


    onMount(async () => {
        const { default: Quill } = await import("quill");
      
        let quill = new Quill(editor, {
            modules: {
            toolbar: toolbarOptions
            },
            theme: "snow",
            placeholder: "Write your story..."
        });
        quill.on('text-change', onChangeHandler)
    });


    const onChangeHandler = (delta, oldDelta, source) => {
        const editorRoot = editor.querySelector('.ql-editor');
        const userHTML = editorRoot.innerHTML;
        console.log("에디터 내용이 변경되었습니다:", userHTML);
    }
  </script>
  
  <style>
    @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
  </style>
  
  <div class="editor-wrapper">
    <div bind:this={editor} on:change={onChangeHandler} />
  </div>
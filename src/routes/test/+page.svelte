<script>
    import { onMount } from "svelte";
    import {test} from "../../lib/store/test"
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

        // Body 에 묶음.
        test.body = userHTML;
        console.log(test.body)
        
    }

    // const onSubmit = () => {
    //     const post = {
    //       title : 
    //     }
    // }
  </script>
  
  <style>
    @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';

    .editor-wrapper {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
  <div class="editor-wrapper">
    <input class = ""  type="text" placeholder="Enter your title..." > 
    <div bind:this={editor} on:change={onChangeHandler} />
    <button>Post</button>
  </div>
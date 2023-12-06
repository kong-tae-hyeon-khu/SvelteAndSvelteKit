<script>
    import Editor from "cl-editor/src/Editor.svelte"
  

    let editorRef;
    const onChangeHandler = (event) => {
        console.log(editorRef.getHtml());
        
        
    }

    const actions = ['b', 'i', 'u', 'strike','ul','ol']
    
  </script>
  
  <Editor actions={actions} bind:this={editorRef} on:change={onChangeHandler}/>
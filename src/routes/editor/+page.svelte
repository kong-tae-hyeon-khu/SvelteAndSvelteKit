<script>
    import Editor from "cl-editor";

    let html = '<h3>내용을 입력해주세요</h3>'


    const onChangeHandler = (evt) => {
        console.log(evt.detail)
        console.log(editor)
        
    }
</script>

<main>
    {@html html}
    <Editor {html} on:change={onChangeHandler}/>
</main>
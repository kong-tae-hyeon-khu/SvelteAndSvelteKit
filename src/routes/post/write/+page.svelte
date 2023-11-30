<script>
    import {_visit} from "./+page"
    import {setInit, visit} from "../../../lib/store/post/visit"
	import { isLogged } from "../../../lib/store/user/login";

    const onClickHandler = async () => {
        if ($isLogged === "0") {
            alert("로그인이 필요합니다.")
        } else {
            const visitReq = {
                userId : parseInt($isLogged),
                title : visit.title,
                body : visit.body
            }
            await _visit(visitReq)
            visit.title = ""
            visit.body = ""
        }
    }
</script>

<style>
    @import "../../../app.css";
    
</style>

<h1>방명록 작성</h1>
<form>
    <label for="title" class="label">제목</label>
    <input class="input" bind:value={visit.title}/>
    <label for="body" class="label">내용</label>
    <input class="input"  bind:value={visit.body} />
    <button on:click={onClickHandler}>작성</button>
</form>
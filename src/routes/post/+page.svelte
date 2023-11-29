<script>
    const data = [
    { id: 1, title: '게시글 1', content: '게시글 내용 1' },
    { id: 2, title: '게시글 2', content: '게시글 내용 2' },
    // 다른 게시글들...
  ];
</script>

<style>
    @import "./+page.css";
</style>

<div>
    {#each data as post (post.id)}
        <div class="post-container">
            <h2 class="post-title"><a href="/post/{post.id}">{post.title}</h2>
        </div>
    {/each}
</div>
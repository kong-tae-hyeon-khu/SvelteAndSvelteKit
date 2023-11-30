<script>
    export let data;
    const {visit} = data;
</script>

<style>
    h2 {
    color: #333;
    text-align: center;
  }

  .visit-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }
</style>
<div class="visit-container">
    <h1>{visit.title}</h1>
    <h2>작성자 : {visit.userName}</h2>
    <p>{visit.body}</p>
</div>
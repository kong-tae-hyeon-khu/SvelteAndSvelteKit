<style>
    @import "./+page.css";
    h2 {
        text-align: center;
    }
    
    label {
    font-weight: bold; /* 글씨를 두껍게 */
    margin-bottom: 5px; /* 레이블 간 간격 조절 */
  }
    
</style>

<div>
    <h2>Sign Up</h2>
    <form>
        <label for="userName">Name</label>
        <input type="text" id="userName" name="userName" required>

        <label for="userNickName">Nick Name</label>
        <input type="text" id="userNickName" name="userNickName" required>

        <label for="userEmail">Email</label>
        <input type="email" id="userEmail" name="userEmail" required>
        
        <label for="userPassword">Password</label>
        <input type="password" id="userPassword" name="userPassword" required>

        <button>Sign Up</button>
    </form>
</div>
<h3>안녕하세요. 웹 어플리케이션 개발에 관심을 갖고 있는 공태현입니다.</h3>
이 웹 페이지는 리눅스로 한 학기 보내기 과제를 수행하며 구현한 웹 페이지입니다. <br>
이 웹 페이지는 SvelteKit 과 Spring Boot 로 API 와 Page 를 구성하고, EC2에 설치한 Nginx 를 통해 배포하고 있습니다. <br>
<br>
<strong>해당 어플리케이션을 계속 수정하여, 앞으로 작업하는 포트폴리오를 다른 사람들에게 공유하고 의견을 주고 받기 위한 공간으로 발전시킬 예정입니다.</strong>



<h3>웹 페이지 기능</h3>
<p><strong>Home</strong> : 메인 페이지 (현재 보고 계신 페이지입니다.)</p>
<p><strong>Posts</strong> : 방명록 목록을 볼 수 있는 페이지입니다. 클릭하면 해당 방명록의 내용을 볼 수 있습니다.</p>
<p><strong>Write</strong> : 방명록을 쓰기 위한 페이지입니다. 로그인이 필요합니다.</p>

<p><strong>Register</strong> : 회원가입을 위한 페이지입니다.</p>
<p><strong>Login</strong> : 로그인을 위한 페이지입니다.</p>
<p><strong>Logout</strong> : 로그아웃을 위한 페이지입니다.</p>


현재 페이지를 수정하고 페이지 호스팅은 github.io 를 통해서 하고 서버는 EC2 를 통해 배포하고 있습니다.

<h4>이후 업데이트 예정</h4>
<ul>
    <li>로그인을 JWT로 전환.</li>
   <li> 단순 Text 가 아닌, 사진과 글꼴 등을 적용한 게시글 작성 기능.</li>
    <li>하나의 EC2 에서 두 개의 서버 (Node, Spring Boot) 가 아닌, 도커를 사용하여 배포</li>
</ul>






<script>
	// import Editor from 'cl-editor';
	// let id;
	// let password;
	
	// let html = '<h3>hello</h3>'

	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	console.log(id, password);
	// }
	let message;


	/**
	 * Send Message
	 * Add Attribute (User Name)
	*/
	const doSend = async (e)=> {
		e.preventDefault()
		const res = await fetch('http://localhost:8080/message', {
			method : 'POST',
			body : JSON.stringify({
				message
			})
		})

		const json = await res.json();
		console.log(JSON.stringify(json));
		message = "";
	}



</script>

<div id="chat-box">
	
</div>
<form id='chat-form'>
	<input bind:value={message}/>
	<button on:click={doSend}>Send</button>
</form>

<!-- <form on:submit={submitHandler}>
	<input bind:value={id}/>
	<input bind:value={password}/>
	<button on:submit={submitHandler}>Test</button>
</form>
{@html html}
{html}
<Editor on:change={(e) => html = e.detail} /> -->
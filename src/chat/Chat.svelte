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

		try {
			console.log(JSON.stringify({message,}))
		const res = await fetch('http://localhost:8080/message', {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			mode : 'cors',
			body : JSON.stringify({
				message,
			})
		})

		
		const json = await res.json();
		console.log(json);
		message = "";
	} catch (err) {
		console.log(err.message);
	}
	}

</script>
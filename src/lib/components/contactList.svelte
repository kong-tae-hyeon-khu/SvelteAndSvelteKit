<!-- ContactList.svelte -->

<script>
    export let contacts;
  </script>
  
  {#each contacts as contact (contact.id)}
    <div class="contact">
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Company: {contact.company}</p>
      <p>Job: {contact.job}</p>
    </div>
  {/each}
  
  <style>
    .contact {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
    }
  </style>
  
export async function loadDocuments() {
	const documents = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5"
	);
	const result = await documents.json();
	return result;
}

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if(!res.ok) {
        return new Response("Failed to fetch user", { status: 500 });
    };

    const user = await res.json();
    return Response.json(user);
}
export async function POST(req: Request) {
    try {
        const body = await req.json();

        if(!body.name || !body.email) {
            return new Response("missing name or email", { status: 400 });
        };

        return Response.json({
            success: true,
            message: `Received contact from ${body.name}`,
            data: body,
        });
    }catch(err) {
        return new Response("Invalid JSON", { status: 400 });
    }
}
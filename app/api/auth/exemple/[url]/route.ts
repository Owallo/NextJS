import type { NextRequest } from "next/server";
import { IExemple } from "@/app/interfaces/exemple";

export async function GET(request: NextRequest, { params }: { params: Promise<{ url: string }> }) {
    const url = request.nextUrl
    console.log((await params).url)
    return Response.json({ message: "Register route is working!" });

}   
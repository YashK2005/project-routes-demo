import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return Response.json(
      { success: false, message: "Missing 'tag' query parameter" },
      { status: 400 }
    );
  }

  try {
    const { invalidateByTag } = await import("@vercel/functions");
    await invalidateByTag(tag);

    return Response.json({
      success: true,
      message: `Invalidated tag via @vercel/functions: ${tag}`,
      invalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: `Failed to invalidate tag: ${error}. Note: invalidateByTag only works on Vercel.`,
      },
      { status: 500 }
    );
  }
}

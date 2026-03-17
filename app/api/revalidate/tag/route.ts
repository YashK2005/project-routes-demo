import { revalidateTag } from "next/cache";
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
    revalidateTag(tag, "max");
    return Response.json({
      success: true,
      message: `Revalidated tag: ${tag}`,
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: `Failed to revalidate tag: ${error}`,
      },
      { status: 500 }
    );
  }
}
